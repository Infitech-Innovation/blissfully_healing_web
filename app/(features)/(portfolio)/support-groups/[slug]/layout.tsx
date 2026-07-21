import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/app/seo";
import { getGroupDetails } from "@/services/groups.endpoints";

type GroupLayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: GroupLayoutProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const group = await getGroupDetails(slug);

    return createMetadata({
      title: group.title,
      description: group.short_description || "Explore this Blissfully Healing support group.",
      path: `/support-groups/${slug}`,
      image: group.icon_image || "/opengraph-image.png",
    });
  } catch {
    return createMetadata({
      title: "Support Group Details",
      description: "Explore this Blissfully Healing support group.",
      path: `/support-groups/${slug}`,
    });
  }
}

export default function GroupDetailsLayout({ children }: GroupLayoutProps) {
  return children;
}
