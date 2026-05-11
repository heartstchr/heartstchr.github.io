import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { freelance } from "./data/projects.js";
import { services } from "./data/services.js";
import { posts } from "./data/posts.js";
import { toKebabCase } from "./utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsRoot = path.resolve(__dirname, "..");
const publicDir = path.resolve(__dirname, "./public");
const outProjectDir = path.resolve(docsRoot, "web-development-projects");
const outServiceDir = path.resolve(docsRoot, "web-development-services");
const outTagsDir = path.resolve(docsRoot, "tags");
const detailsDir = path.resolve(__dirname, "./data/details");
const DOMAIN = "https://stackseekers.com";

const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const clearDirectory = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
         if (!file.startsWith('.')) {
           fs.rmSync(curPath, { recursive: true, force: true });
         }
      } else {
        if (file !== "README.md") {
          fs.unlinkSync(curPath);
        }
      }
    });
  }
};

const readMarkdownContent = (detailsPath) => {
  if (!detailsPath) return "";
  const fullPath = path.resolve(detailsDir, path.basename(detailsPath));
  try {
    const content = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, "utf-8") : "";
    return content
      .replace(/^---$/gm, "***")
      .replace(/\n---$/gm, "\n***");
  } catch (error) {
    console.error(`Error reading markdown file ${fullPath}:`, error);
    return "";
  }
};

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const toIsoDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString().split("T")[0];
  }
  return date.toISOString().split("T")[0];
};

const projectTemplate = (project, projectIndex, allProjects) => {
  const markdownContent = readMarkdownContent(project.details);
  const previousProject =
    projectIndex > 0
      ? {
          name: allProjects[projectIndex - 1].name,
          link: `/web-development-projects/${toKebabCase(allProjects[projectIndex - 1].name)}/`,
        }
      : null;
  const nextProject =
    projectIndex < allProjects.length - 1
      ? {
          name: allProjects[projectIndex + 1].name,
          link: `/web-development-projects/${toKebabCase(allProjects[projectIndex + 1].name)}/`,
        }
      : null;

  return `---
title: "${project.name}"
description: "${project.description}"
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "${project.name}"
  description: "${project.description}"
  software: "${project.software}"
  schema: "${project.schema}"
  domain: "${project.domain}"
  year: "${project.year}"
  price: ${project.price || 0}
  currency: "${project.currency || 'USD'}"
  link: "${project.link || ''}"
  codeLink: "${project.codeLink || ''}"
  contact: "${project.contact || ''}"
  stack: ${JSON.stringify(project.stack || [])}
  images: ${JSON.stringify(project.images || [])}
  features: ${JSON.stringify(project.features || [])}
  perspective: ${JSON.stringify({ executive: "", technical: "", ...project.perspective })}
  previousProject: ${JSON.stringify(previousProject)}
  nextProject: ${JSON.stringify(nextProject)}
---

<ProjectHero :project="$frontmatter.project" />

<ProjectGallery :images="$frontmatter.project.images" />

<ProjectTabs v-if="$frontmatter.project?.perspective?.executive" :project="$frontmatter.project">

${markdownContent}

</ProjectTabs>

<template v-else>

<ProjectTabs :project="$frontmatter.project" />

<div v-pre class="project-markdown-content text-lg line-height-4 mb-8">

${markdownContent}

</div>

</template>

<ConsultingBridge />

<AuditCTA />

<RelatedServices />

<ProjectNavigation :previous="$frontmatter.project?.previousProject" :next="$frontmatter.project?.nextProject" />

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>`;
};

const serviceTemplate = (service, serviceIndex, allServices) => {
  const previousService =
    serviceIndex > 0
      ? {
          name: allServices[serviceIndex - 1].name,
          link: `/web-development-services/${toKebabCase(allServices[serviceIndex - 1].code)}/`,
        }
      : null;
  const nextService =
    serviceIndex < allServices.length - 1
      ? {
          name: allServices[serviceIndex + 1].name,
          link: `/web-development-services/${toKebabCase(allServices[serviceIndex + 1].code)}/`,
        }
      : null;

  const desc = service.description || (service.descriptions && service.descriptions[0]) || "";

  return `---
title: "${service.name}"
description: "${desc}"
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
service:
  name: "${service.name}"
  code: "${service.code}"
  description: "${desc}"
  benefits: ${JSON.stringify(service.deliverables || [])}
  outcomes: ${JSON.stringify(service.problems || [])}
  previousService: ${JSON.stringify(previousService)}
  nextService: ${JSON.stringify(nextService)}
---

<section class="mt-4 mb-6">
  <div class="grid align-items-center">
    <div class="col-12 lg:col-7">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Core Expertise</div>
      <h1 class="text-4xl md:text-6xl font-bold mb-3 mt-0 line-height-2">${service.name}</h1>
      <p class="text-xl opacity-70 line-height-4 max-w-40rem mb-4">${desc}</p>
      <div class="flex gap-3">
         <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
           <Button label="Consult Strategy" icon="pi pi-calendar" severity="primary" size="large" raised rounded class="px-6 py-3 font-bold" />
         </a>
      </div>
    </div>
    <div class="col-12 lg:col-5 hidden lg:block">
       <div class="surface-card p-4 border-round-3xl shadow-2 border-1 border-100 flex align-items-center justify-content-center min-h-20rem">
          <i class="pi pi-cog text-primary-100" style="font-size: 15rem; opacity: 0.2"></i>
       </div>
    </div>
  </div>
</section>

<div class="grid mb-8">
  <div class="col-12 lg:col-8">
    <div class="surface-card p-4 md:p-6 border-round-3xl shadow-1 mb-6">
      <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
        <i class="pi pi-verified text-primary"></i>
        Strategic Deliverables
      </h3>
      <div class="grid">
        <div v-for="benefit in $frontmatter.service.benefits" :key="benefit" class="col-12 md:col-6 mb-3">
          <div class="flex align-items-start gap-3">
            <i class="pi pi-check-circle text-primary mt-1"></i>
            <span class="text-lg line-height-3">{{ benefit }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="surface-card p-4 md:p-6 border-round-3xl shadow-1">
       <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
        <i class="pi pi-exclamation-triangle text-primary"></i>
        Challenges We Solve
      </h3>
      <div class="flex flex-column gap-4">
        <div v-for="outcome in $frontmatter.service.outcomes" :key="outcome" class="p-3 border-round-2xl surface-50 border-1 border-100">
           <div class="text-lg line-height-3">{{ outcome }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 lg:col-4">
    <AuditSidebar />
  </div>
</div>

<ConsultingBridge />

<div class="flex justify-content-between align-items-center mt-8 pt-6 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.service.previousService" :href="$frontmatter.service.previousService.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary group">
      <i class="pi pi-chevron-left mr-2 transition-transform group-hover:-translate-x-1"></i>
      <div class="flex flex-column">
        <span class="text-xs uppercase text-500 font-bold">Previous</span>
        <span class="font-bold text-900">{{ $frontmatter.service.previousService.name }}</span>
      </div>
    </a>
  </div>
  <div class="flex-1 text-center">
    <a href="/web-development-services/" class="no-underline text-color-secondary hover:text-primary font-bold">
      <i class="pi pi-th-large mr-2"></i>
      Services
    </a>
  </div>
  <div class="flex-1 text-right">
    <a v-if="$frontmatter.service.nextService" :href="$frontmatter.service.nextService.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary group">
      <div class="flex flex-column text-right">
        <span class="text-xs uppercase text-500 font-bold">Next</span>
        <span class="font-bold text-900">{{ $frontmatter.service.nextService.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2 transition-transform group-hover:translate-x-1"></i>
    </a>
  </div>
</div>
`;
};

const tagTemplate = (tag) => {
  const description = `Explore our collection of articles, tutorials, and insights about ${tag}. Stay updated with the latest trends and best practices in ${tag}.`;
  return `---
title: "Tag: ${tag}"
description: "${description}"
layout: Layout
tag: "${tag}"
---
<TagPage :tag="'${tag}'" />
`;
};

const generatePages = (data, outputDir, slugKey, templateFn) => {
  ensureDirectoryExists(outputDir);
  data.forEach((item, index) => {
    const content = templateFn(item, index, data);
    const dirPath = path.join(outputDir, toKebabCase(item[slugKey] || item.code));
    const filePath = path.join(dirPath, "index.md");
    ensureDirectoryExists(dirPath);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Created: ${filePath}`);
  });
};

const generateTagPages = () => {
  const allTags = new Set();
  posts.forEach((post) => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach((tag) => allTags.add(String(tag).toLowerCase()));
    }
  });
  freelance.forEach((project) => {
    if (Array.isArray(project.stack)) {
      project.stack.forEach((tag) => allTags.add(String(tag).toLowerCase()));
    }
  });
  const tagsArray = Array.from(allTags).sort();
  ensureDirectoryExists(outTagsDir);
  clearDirectory(outTagsDir);
  tagsArray.forEach((tag) => {
    const content = tagTemplate(tag);
    const dirPath = path.join(outTagsDir, toKebabCase(tag));
    const filePath = path.join(dirPath, "index.md");
    ensureDirectoryExists(dirPath);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Created Tag Page: ${filePath}`);
  });
  const indexContent = `---
title: Explore Topics | Stack Seekers
description: Browse all technical topics, tutorials, and insights by category and tags.
layout: Layout
---
<TagIndex />
`;
  fs.writeFileSync(path.join(outTagsDir, "README.md"), indexContent, "utf-8");
};

const collectMarkdownPages = (dirPath, result = []) => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    if (entry.name === "node_modules") continue;
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      collectMarkdownPages(fullPath, result);
      continue;
    }
    if (!entry.name.endsWith(".md")) continue;
    result.push(fullPath);
  }
  return result;
};

const toPagePath = (filePath) => {
  const relativePath = path.relative(docsRoot, filePath).replace(/\\/g, "/");
  if (relativePath === "README.md") return "/";
  if (relativePath.endsWith("/README.md")) return `/${relativePath.replace(/\/README\.md$/, "/")}`;
  if (relativePath.endsWith("/index.md")) return `/${relativePath.replace(/\/index\.md$/, "/")}`;
  return `/${relativePath.replace(/\.md$/, "/")}`;
};

const generateSitemap = () => {
  ensureDirectoryExists(publicDir);
  const markdownFiles = collectMarkdownPages(docsRoot).filter(
    (filePath) => !filePath.includes(`${path.sep}.vuepress${path.sep}`)
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${markdownFiles
  .map((filePath) => {
    const pagePath = toPagePath(filePath);
    return `  <url><loc>${escapeXml(DOMAIN + pagePath)}</loc></url>`;
  })
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf-8");
};

clearDirectory(outProjectDir);
clearDirectory(outServiceDir);
generatePages(freelance, outProjectDir, "name", projectTemplate);
generatePages(services, outServiceDir, "code", serviceTemplate);
generateTagPages();
generateSitemap();
