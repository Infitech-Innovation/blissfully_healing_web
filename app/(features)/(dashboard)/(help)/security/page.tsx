import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from '@/components/common/comming-soon';

export const metadata: Metadata = createMetadata({
 title: "Security",
 description: "Private Blissfully Healing account security information.",
 path: "/security",
 noIndex: true,
});

export default function SecurityPage() {
 return <PageUnderDevelopment title="Security Page" />;
}
