import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import DashboardShell from "./DashboardShell";

export const metadata: Metadata = createMetadata({
  title: "Dashboard",
  description: "Private Blissfully Healing dashboard workspace.",
  path: "/dashboard",
  noIndex: true,
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
