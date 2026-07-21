import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import OurStorySection from "@/features/public/about/our_story";
import ValuesSection from "@/features/public/about/our_values";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn the story, values, and care philosophy behind Blissfully Healing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <OurStorySection />
      <ValuesSection />
    </div>
  );
}
