import { getPlaylistItems } from "./apiClient";

declare const __VITE_YOUTUBE_API_KEY__: string;
declare const __VITE_YOUTUBE_CHANNEL_ID__: string;
declare const __VITE_YOUTUBE_UPLOADS_PLAYLIST_ID__: string;
declare const __VITE_YOUTUBE_PODCAST_PLAYLIST_ID__: string;

const API_KEY = __VITE_YOUTUBE_API_KEY__;
const CHANNEL_ID = __VITE_YOUTUBE_CHANNEL_ID__;
const PODCAST_PLAYLIST_ID = __VITE_YOUTUBE_PODCAST_PLAYLIST_ID__;
const UPLOADS_PLAYLIST_ID = __VITE_YOUTUBE_UPLOADS_PLAYLIST_ID__;

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

const formatPublishTime = (dateTime: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateTime));
};

const mapVideos = (items: any[]): Video[] => {
  return items.map((item) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.medium.url,
    publishedAt: formatPublishTime(item.snippet.publishedAt),
  }));
};

const isValidPlaylistId = (playlistId: string): boolean =>
  // YouTube playlist IDs are "PL" followed by 32 [A-Za-z0-9_-] chars.
  /^PL[A-Za-z0-9_-]{32}$/.test(playlistId);

async function fetchPublicVideosFromPlaylist(
  playlistId: string,
  maxResults: number
): Promise<any[]> {
  const items = await getPlaylistItems(API_KEY, playlistId, maxResults);
  return items.filter((item: any) => item.status.privacyStatus === "public");
}

// Fetch a single playlist, tolerating failures so one bad/removed playlist
// does not break the others.
async function fetchPlaylistSafely(
  playlistId: string,
  label: string
): Promise<any[]> {
  if (!playlistId) {
    console.warn(`Skipping ${label}: playlist id not configured.`);
    return [];
  }
  if (!isValidPlaylistId(playlistId)) {
    console.error(`Skipping ${label}: malformed playlist id "${playlistId}".`);
    return [];
  }
  try {
    return await fetchPublicVideosFromPlaylist(playlistId, 50);
  } catch (error: any) {
    const reason =
      error?.response?.data?.error?.message || error?.message || String(error);
    console.error(
      `Failed to fetch ${label} playlist (${playlistId}): ${reason}`,
      error
    );
    return [];
  }
}

export const fetchAndSplitVideos = async (): Promise<{
  channelVideos: Video[];
  podcastVideos: Video[];
}> => {
  // Return empty if keys are missing
  if (!API_KEY || !UPLOADS_PLAYLIST_ID) {
    return { channelVideos: [], podcastVideos: [] };
  }

  try {
    const [uploadedVideoItems, podcastVideoItems] = await Promise.all([
      fetchPlaylistSafely(UPLOADS_PLAYLIST_ID, "uploads"),
      fetchPlaylistSafely(PODCAST_PLAYLIST_ID, "podcast"),
    ]);

    const podcastVideoIds = new Set(
      podcastVideoItems.map((item) => item.snippet.resourceId.videoId)
    );

    const channelVideoItems = uploadedVideoItems.filter(
      (item) => !podcastVideoIds.has(item.snippet.resourceId.videoId)
    );

    const podcastVideos = mapVideos(podcastVideoItems);
    const channelVideos = mapVideos(channelVideoItems);

    return { channelVideos, podcastVideos };
  } catch (error) {
    console.error("Failed to fetch and split YouTube videos:", error);
    throw error;
  }
};

export const fetchChannelVideos = async (maxResults = 4): Promise<Video[]> => {
  const { channelVideos } = await fetchAndSplitVideos();
  return channelVideos.slice(0, maxResults);
};

export const fetchPodcastVideos = async (maxResults = 10): Promise<Video[]> => {
  const { podcastVideos } = await fetchAndSplitVideos();
  return podcastVideos.slice(0, maxResults);
};
