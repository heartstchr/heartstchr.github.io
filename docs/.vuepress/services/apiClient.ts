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
      playlistId: playlistId,
      part: "snippet,status",
      maxResults,
    },
  });
  return response.data.items;
}; 