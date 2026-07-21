import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Dashboard Overview",
  description: "Private Blissfully Healing account overview and activity dashboard.",
  path: "/dashboard",
  noIndex: true,
});

export default function DashboardRouteLayout({ children }: { children: ReactNode }) {
  return children;
}
