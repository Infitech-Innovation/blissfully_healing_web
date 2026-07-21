import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import HomePage from '@/features/public/home/homepage'

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Discover Blissfully Healing courses, retreats, support groups, videos, and digital wellness resources.",
  path: "/homepage",
});

export default function OverviewPage() {
  return <HomePage/>
}
