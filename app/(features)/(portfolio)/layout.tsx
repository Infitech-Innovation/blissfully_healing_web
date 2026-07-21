import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PortfolioShell from "./PortfolioShell";

export const metadata: Metadata = createMetadata({
  title: "Blissfully Healing Wellness Sanctuary",
  description:
    "Explore Blissfully Healing courses, retreats, support groups, videos, and digital guides for emotional and spiritual care.",
  path: "/homepage",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PortfolioShell>{children}</PortfolioShell>;
}
