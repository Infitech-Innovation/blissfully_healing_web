import type { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getBlogs, getCategory } from "@/services/blogs.endpoints";
import { BLOGS_KEYS, CAT_KEYS } from "@/hooks/useBlogs";
import BlogSection from "@/features/public/blogs/blogs_page";
import { createMetadata } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Healing Journal",
  description:
    "Read Blissfully Healing articles on emotional wellness, spiritual care, somatic practice, and personal reconnection.",
  path: "/blogs",
});

export default async function BlogPage() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: BLOGS_KEYS.list("", "", "", 1),
      queryFn: async() => (await getBlogs("", "", "", 1)),
      staleTime: 1000 * 60 * 5,
    }),

    queryClient.prefetchQuery({
      queryKey: CAT_KEYS,
      queryFn: getCategory,
      staleTime: 1000 * 60 * 5,
    }),
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogSection />
    </HydrationBoundary>
  );
}
