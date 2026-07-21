import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { BLOGS_KEYS } from "@/services/businessservices/blogs.services";
import { getBlogDetails, getBlogs } from "@/services/endpoints/blogs.endpoints";
import BlogDetailsPage from "@/features/public/blogs/blogs_details";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

 
export async function generateStaticParams() {
  const { results } = await getBlogs("", "", "", 1);

  return results.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailsRoute({ params }: PageProps) {
  const { slug } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: BLOGS_KEYS.detail(slug),
    queryFn: () => getBlogDetails(slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogDetailsPage slug={slug} />
    </HydrationBoundary>
  );
}
