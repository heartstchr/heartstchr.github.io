import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const getPlaylistItems = async (
  apiKey: string,
  playlistId: string,
  maxResults: number
) => {
  const response = await apiClient.get("/playlistItems", {
    params: {
      key: apiKey,
      playlistId,
      part: "snippet,status",
      maxResults,
    },
  });
  return response.data.items;
};

export const getChannelDetails = async (apiKey: string, channelId: string) => {
  const response = await apiClient.get("/channels", {
    params: {
      key: apiKey,
      id: channelId,
      part: "contentDetails",
    },
  });
  return response.data;
}; 