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

export interface VideoListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: VideoAsset[];
}