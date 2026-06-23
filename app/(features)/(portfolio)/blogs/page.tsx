import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getBlogs, getCategory } from "@/services/endpoints/blogs.endpoints";
import { BLOGS_KEYS, CAT_KEYS } from "@/services/businessservices/blogs.services";
import BlogSection from "@/features/public/blogs/blogs_page";

export default async function BlogPage() {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: BLOGS_KEYS.all,
      queryFn: getBlogs,
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
