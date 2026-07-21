import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from "@/components/common/comming-soon";

export const metadata: Metadata = createMetadata({
 title: "Temple of Belonging",
 description: "Explore the Blissfully Healing Temple of Belonging.",
 path: "/temples/belonging",
});

export default function BelongingPage() {
 return <PageUnderDevelopment title="Belonging Page" />;
}
