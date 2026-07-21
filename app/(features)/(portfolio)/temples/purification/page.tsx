import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from "@/components/common/comming-soon";

export const metadata: Metadata = createMetadata({
 title: "Temple of Purification",
 description: "Explore the Blissfully Healing Temple of Purification.",
 path: "/temples/purification",
});

export default function PurificationPage() {
 return <PageUnderDevelopment title="Purification Page" />;
}
