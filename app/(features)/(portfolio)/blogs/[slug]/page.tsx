import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BlogDetailsPage from "./blogs_details";
import { BLOGS_KEYS } from "../blogs.services";
import { getBlogDetails } from "../blogs.endpoints";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
