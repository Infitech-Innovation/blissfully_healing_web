import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from '@/components/common/comming-soon';

export const metadata: Metadata = createMetadata({
 title: "Admin Guide",
 description: "Private Blissfully Healing administration guidance.",
 path: "/admin-guide",
 noIndex: true,
});

export default function AdminGuidePage() {
 return <PageUnderDevelopment title="AdminGuide Page" />;
}
