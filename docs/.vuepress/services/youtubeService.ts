import axios from "axios";

// Fetch videos from the YouTube API
export const fetchChannelVideos = async () => {
  try {
    const API_KEY = __VITE_YOUTUBE_API_KEY__;
    const CHANNEL_ID = __VITE_YOUTUBE_CHANNEL_ID__;

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: API_KEY,
          channelId: CHANNEL_ID,
          part: "snippet",
          maxResults: 4, // Adjust the number of videos to fetch
          order: "date", // Order by date
        },
      }
    );

    // Format publish time for each video
    const videos = response.data.items.map((video) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url,
      publishedAt: formatPublishTime(video.snippet.publishedAt), // Format publish time
    }));

    return videos;

    // return response.data.items;
  } catch (error) {
    console.error("Failed to fetch YouTube videos:", error);
    throw error;
  }
};

/**
 * Format the publish time using Intl.DateTimeFormat
 * @param {string} dateTime - The raw publishedAt string from the YouTube API
 * @returns {string} - Formatted date (e.g., "Jan 1, 2024, 10:00 AM")
 */
const formatPublishTime = (dateTime) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Display in 12-hour format
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateTime));
};
