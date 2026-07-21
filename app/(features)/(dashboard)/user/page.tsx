import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import PageUnderDevelopment from '@/components/common/comming-soon';

export const metadata: Metadata = createMetadata({
 title: "User Dashboard",
 description: "Private Blissfully Healing user dashboard.",
 path: "/user",
 noIndex: true,
});

export default function UserPage() {
 return <PageUnderDevelopment title="User Page" />;
}
