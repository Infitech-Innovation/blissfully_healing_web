import type { Metadata } from "next";
import { createMetadata } from "./seo";
import HomeOverviewPage from "./_home/overviewpage";

export const metadata: Metadata = createMetadata({
  title: "Welcome",
  description:
    "Enter Blissfully Healing, a digital sanctuary for guided wellness, healing resources, and intentional care.",
  path: "/",
});

export default function HomePage() {
  return <HomeOverviewPage />;
}
