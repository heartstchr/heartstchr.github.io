import { getPlaylistItems, getChannelDetails } from "./apiClient";

declare const __VITE_YOUTUBE_API_KEY__: string;
declare const __VITE_YOUTUBE_CHANNEL_ID__: string;
declare const __VITE_YOUTUBE_PLAYLIST_ID__: string;

const API_KEY = __VITE_YOUTUBE_API_KEY__;
const CHANNEL_ID = __VITE_YOUTUBE_CHANNEL_ID__;
const PODCAST_PLAYLIST_ID = __VITE_YOUTUBE_PLAYLIST_ID__;

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

const formatPublishTime = (dateTime: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateTime));
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

async function fetchPublicVideosFromPlaylist(playlistId: string, maxResults: number): Promise<any[]> {
    const items = await getPlaylistItems(API_KEY, playlistId, maxResults);
    return items.filter(
      (item: any) => item.status.privacyStatus === 'public'
    );
}

async function getUploadsPlaylistId(): Promise<string> {
    const data = await getChannelDetails(API_KEY, CHANNEL_ID);
    if (data.items.length > 0) {
        return data.items[0].contentDetails.relatedPlaylists.uploads;
    }
    throw new Error("Could not find uploads playlist for the channel.");
}

export const fetchAndSplitVideos = async (): Promise<{ channelVideos: Video[], podcastVideos: Video[] }> => {

    try {
        const uploadsPlaylistId = await getUploadsPlaylistId();

        const [uploadedVideoItems, podcastVideoItems] = await Promise.all([
            fetchPublicVideosFromPlaylist(uploadsPlaylistId, 50),
            fetchPublicVideosFromPlaylist(PODCAST_PLAYLIST_ID, 50)
        ]);

        const podcastVideoIds = new Set(podcastVideoItems.map(item => item.snippet.resourceId.videoId));

        const channelVideoItems = uploadedVideoItems.filter(
            item => !podcastVideoIds.has(item.snippet.resourceId.videoId)
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
