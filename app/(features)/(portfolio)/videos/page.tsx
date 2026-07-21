import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from '@/components/common/comming-soon';

export const metadata: Metadata = createMetadata({
  title: "Healing Videos",
  description:
    "Watch Blissfully Healing video resources for guided care, emotional wellness, and reflection.",
  path: "/videos",
});

export default function VideosPage() {
 return <PageUnderDevelopment title="Videos Page" />;
}
