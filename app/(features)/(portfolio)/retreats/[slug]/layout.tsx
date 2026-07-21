import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/app/seo";
import { getRetreatDetails } from "@/services/retreats.endpoints";

type RetreatLayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RetreatLayoutProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const retreat = await getRetreatDetails(slug);

    return createMetadata({
      title: retreat.title,
      description: retreat.short_description || "Explore this Blissfully Healing retreat.",
      path: `/retreats/${slug}`,
      image: retreat.cover_image || "/opengraph-image.png",
    });
  } catch {
    return createMetadata({
      title: "Retreat Details",
      description: "Explore this Blissfully Healing retreat.",
      path: `/retreats/${slug}`,
    });
  }
}

export default function RetreatDetailsLayout({ children }: RetreatLayoutProps) {
  return children;
}
