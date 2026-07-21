import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import HelpCenterPage from "./_components/HelpCenter";

export const metadata: Metadata = createMetadata({
 title: "Help Center",
 description: "Find private Blissfully Healing dashboard help and guidance.",
 path: "/help",
 noIndex: true,
});

export default function HelpPage() {
 return <HelpCenterPage/>;
}
