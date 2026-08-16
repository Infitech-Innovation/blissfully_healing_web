import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import StillnessTemplePage from "@/features/public/temples/TempleOfStillness";

export const metadata: Metadata = createMetadata({
    title: "Temple of Stillness",
    description: "Explore the Blissfully Healing Temple of Stillness.",
    path: "/temples/stillness",
});

export default function StillnessPage() {
    return <StillnessTemplePage />;
}
