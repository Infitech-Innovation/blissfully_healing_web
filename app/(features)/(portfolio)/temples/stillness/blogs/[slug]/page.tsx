import type { Metadata } from "next";
import {
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";
import { BLOGS_KEYS } from "@/hooks/useBlogs";
import { createMetadata } from "@/app/seo";
import HydrationProvider from "@/lib/hydration-provider";
import { getBlogDetails, getBlogs } from "@/services/blogs.endpoints";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const blog = await getBlogDetails(slug);

    return createMetadata({
      title: blog.seo_title || blog.title,
      description: blog.seo_description || blog.excerpt || "Read this Blissfully Healing journal article.",
      path: `/blogs/${slug}`,
      image: blog.cover_image || "/opengraph-image.png",
    });
  } catch {
    return createMetadata({
      title: "Healing Journal Article",
      description: "Read this Blissfully Healing journal article.",
      path: `/blogs/${slug}`,
    });
  }
}

export default async function BlogDetailsRoute({ params }: PageProps) {
  const { slug } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: BLOGS_KEYS.detail(slug),
    queryFn: () => getBlogDetails(slug),
  });

  return (
    <HydrationProvider state={dehydrate(queryClient)}>
      <BlogDetailsPage slug={slug} />
    </HydrationProvider>
  );
}
