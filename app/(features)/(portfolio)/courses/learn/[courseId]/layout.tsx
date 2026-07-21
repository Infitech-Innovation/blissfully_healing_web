import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Course Learning",
  description: "Continue a Blissfully Healing course lesson.",
  path: "/courses/learn",
  noIndex: true,
});

export default function PublicCourseLearnLayout({ children }: { children: ReactNode }) {
  return children;
}
