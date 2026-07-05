import { VideoListResponse } from "@/types/videos.definations";
import { useQuery } from "@tanstack/react-query";
import { fetchVideosList } from "../endpoints/videos.endpoints";

/**
 * Custom Hook Layer: Wraps the endpoint layer inside TanStack Query
 * 
 * @param page - Optional page counter parameter for tracking pagination states
 */
export function useVideosListQuery(page: number = 1) {
    return useQuery<VideoListResponse, Error>({
        queryKey: ["videos", "list", page],
        queryFn: () => fetchVideosList(page),
        placeholderData: (previousData) => previousData,
        staleTime: 5 * 60 * 1000,
    });
}