import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from '@/components/common/comming-soon';

export const metadata: Metadata = createMetadata({
 title: "Support",
 description: "Get private Blissfully Healing account support.",
 path: "/support",
 noIndex: true,
});

export default function SupportPage() {
 return <PageUnderDevelopment title="Support Page" />;
}
