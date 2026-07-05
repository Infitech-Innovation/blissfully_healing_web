import { api } from "@/lib/axios";
import { VideoListResponse } from "@/types/videos.definations";

const VIDEO_URL = "/videos/"

export const fetchVideosList = async (page: number = 1): Promise<VideoListResponse> => {
    const response = await api.get<VideoListResponse>(VIDEO_URL, {
        params: { page },
    });
    return response.data;
};