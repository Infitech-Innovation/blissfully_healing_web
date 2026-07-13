import { PaginatedResponse } from "./generic";

export interface VideoAsset {
  id: number;
  title: string;
  slug: string;
  description: string;
  embed_url: string;
  thumbnail_image: string | null;
  duration_minutes: number;
  created_at: Date;
}

export type VideoListResponse = PaginatedResponse<VideoAsset>;
