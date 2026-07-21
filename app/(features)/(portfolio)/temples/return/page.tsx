import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from "@/components/common/comming-soon";

export const metadata: Metadata = createMetadata({
 title: "Temple of Return",
 description: "Explore the Blissfully Healing Temple of Return.",
 path: "/temples/return",
});

export default function ReturnPage() {
 return <PageUnderDevelopment title="Return Page" />;
}
