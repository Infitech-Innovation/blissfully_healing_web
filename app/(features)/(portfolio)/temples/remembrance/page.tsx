import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from "@/components/common/comming-soon";

export const metadata: Metadata = createMetadata({
 title: "Temple of Remembrance",
 description: "Explore the Blissfully Healing Temple of Remembrance.",
 path: "/temples/remembrance",
});

export default function RemembrancePage() {
 return <PageUnderDevelopment title="Remembrance Page" />;
}
