import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/app/seo";
import { getEbookDetails } from "@/services/ebooks.endpoints";

type EbookLayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: EbookLayoutProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const ebook = await getEbookDetails(slug);

    return createMetadata({
      title: ebook.title,
      description: ebook.short_description || `Explore ${ebook.title} by ${ebook.author}.`,
      path: `/shop/${slug}`,
      image: ebook.cover_image || "/opengraph-image.jpg",
    });
  } catch {
    return createMetadata({
      title: "E-Book Details",
      description: "Explore this Blissfully Healing digital guide.",
      path: `/shop/${slug}`,
    });
  }
}

export default function EbookDetailsLayout({ children }: EbookLayoutProps) {
  return children;
}
