import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import HealingVideosPage from "@/features/private/video/VideosPage";

export const metadata: Metadata = createMetadata({
 title: "My Videos",
 description: "Watch private Blissfully Healing video resources.",
 path: "/user/videos",
 noIndex: true,
});

export default function VideosPage() {
 return <HealingVideosPage/>;
}
