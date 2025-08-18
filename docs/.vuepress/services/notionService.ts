import axios from "axios";

declare const __VITE_NOTION_ENDPOINT__: string | undefined;
declare const __VITE_NOTION_DATABASE_ID__: string | undefined;

export interface ProjectRequestPayload {
  name: string;
  email: string;
  details: string;
  service: string;
  budget: string;
  requirementsUrls?: string[];
}

export interface NotionResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
}

export interface SelectOption {
  id: string;
  name: string;
  color?: string;
}

export interface ServiceOption {
  label: string;
  value: string;
  color?: string;
}

// Notion file object type
export interface NotionFileObject {
  name: string;
  type: "external" | "file";
  external?: { url: string };
  file?: { url: string };
}

// Configuration - using proxy endpoint for CORS-free operation
const endpoint = __VITE_NOTION_ENDPOINT__;
const databaseId = __VITE_NOTION_DATABASE_ID__;

// Log configuration status
if (endpoint) {
  console.log("✅ Using proxy endpoint for Notion integration:", endpoint);
  console.log("🌐 Client origin:", window.location.origin);
} else {
  console.error(
    "❌ Notion integration not configured. Please set VITE_NOTION_ENDPOINT to your Vercel function URL."
  );
}

function buildNotionProperties(
  payload: ProjectRequestPayload,
  files?: NotionFileObject[]
) {
  const now = new Date();
  const dateReceived = now.toISOString();
  const followUp = new Date(
    now.getTime() + 2 * 24 * 60 * 60 * 1000
  ).toISOString();

  const properties: any = {
    // Title column
    "Client Name": {
      title: [
        {
          text: { content: payload.name },
        },
      ],
    },
    // Email column
    Email: { email: payload.email },
    // Rich text column
    "Project Details": {
      rich_text: [
        {
          text: { content: payload.details },
        },
      ],
    },
    // Select columns
    "Service Type": {
      select: { name: payload.service },
    },
    "Budget Range": {
      select: { name: payload.budget },
    },
    // Status (status-type)
    Status: {
      status: { name: "New" },
    },
    // Date columns
    "Date Received": {
      date: { start: dateReceived },
    },
    "Follow-up Date": {
      date: { start: followUp },
    },
    // "Assigned To": people column can be set by backend if desired
  };
  if (files && files.length > 0) {
    properties["Requirements"] = {
      files,
    };
  }
  return properties;
}

// Upload files to Netlify function and get Notion file objects
export async function uploadFilesToNotion(
  files: File[]
): Promise<NotionFileObject[]> {
  if (!endpoint) throw new Error("Notion endpoint not configured");
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  // Support images and common document types
  const SUPPORTED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  // Convert files to base64
  const filePromises = files.map((file) => {
    if (file.size > MAX_FILE_SIZE)
      throw new Error(`File ${file.name} is too large.`);
    if (!SUPPORTED_TYPES.includes(file.type))
      throw new Error(
        `File ${file.name} is not a supported format. Allowed: images, PDF, Word, Excel.`
      );
    return new Promise<{
      name: string;
      type: string;
      size: number;
      data: string;
    }>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = (reader.result as string).split(",")[1];
        resolve({
          name: file.name,
          type: file.type,
          size: file.size,
          data: base64Data,
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  });
  const fileData = await Promise.all(filePromises);
  // POST to upload endpoint
  const res = await fetch(`${endpoint}/api/upload-image`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ files: fileData }),
  });
  if (!res.ok) throw new Error("File upload failed");
  const data = await res.json();
  if (!data.uploadedFiles || !Array.isArray(data.uploadedFiles))
    throw new Error("No files uploaded");
  // Return Notion file objects
  return data.uploadedFiles.map(
    (f: any) =>
      f.fileForNotion || {
        name: f.fileName,
        type: "external",
        external: { url: f.publicUrl || "" },
      }
  );
}

// Update: accept optional notionFiles and include in properties
export async function submitProjectRequest(
  payload: ProjectRequestPayload,
  notionFiles?: NotionFileObject[]
): Promise<NotionResponse> {
  // Validate payload
  const requiredFields = ["name", "email", "details", "service", "budget"];
  for (const field of requiredFields) {
    if (!payload[field as keyof ProjectRequestPayload]) {
      return {
        ok: false,
        error: `Missing required field: ${field}`,
      };
    }
  }

  // Check if endpoint is configured
  if (!endpoint) {
    return {
      ok: false,
      error:
        "Notion integration not configured. Please set VITE_NOTION_ENDPOINT.",
    };
  }

  try {
    console.log("📤 Submitting to proxy endpoint:", endpoint);

    const notionPageRequest: any = {
      parent: {
        database_id: databaseId,
      },
      properties: buildNotionProperties(payload, notionFiles),
    };

    const response = await fetch(`${endpoint}/all`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        endpoint: `/v1/pages`,
        options: {
          method: "POST",
          body: JSON.stringify(notionPageRequest),
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Successfully submitted to proxy endpoint");
    return { ok: true, data };
  } catch (error: any) {
    const message =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      error?.message ||
      "Unknown error";

    console.error("❌ Proxy endpoint error:", {
      message: error?.message || error,
      endpoint,
    });

    return { ok: false, error: message };
  }
}

// Fetch Service Type select options from Notion database schema
export async function fetchServiceTypeOptions(): Promise<ServiceOption[]> {
  if (!endpoint) {
    console.error("❌ Notion proxy endpoint missing: VITE_NOTION_ENDPOINT");
    return [];
  }

  try {
    const response = await fetch(`${endpoint}/all`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        endpoint: `/v1/databases/${databaseId}/query`,
        options: {
          method: "POST",
          body: JSON.stringify({}), // Empty body for database query
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("data->", data);

    // data.properties should contain the DB properties
    const properties = data?.properties || {};
    const serviceProp = properties["Service Type"];
    if (!serviceProp) return [];

    // Support both select and multi_select definitions
    const options: SelectOption[] =
      serviceProp?.select?.options || serviceProp?.multi_select?.options || [];

    return options.map((opt) => ({
      label: opt.name,
      value: opt.name,
      color: opt.color,
    }));
  } catch (error) {
    console.error("Failed to fetch Service Type options from Notion:", error);
    return [];
  }
}
