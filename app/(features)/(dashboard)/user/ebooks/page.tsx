import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import LibrarySection from "../../../../../features/private/ebooks/MyLibrary";

export const metadata: Metadata = createMetadata({
    title: "My E-Books",
    description: "View your private Blissfully Healing e-book library.",
    path: "/user/ebooks",
    noIndex: true,
});

export default function EbooksPage() {
    return <LibrarySection />;
}
