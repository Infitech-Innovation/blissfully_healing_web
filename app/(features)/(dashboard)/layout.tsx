import type { Metadata } from "next";
import DashboardShell from "./DashboardShell";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Private Blissfully Healing dashboard workspace.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
