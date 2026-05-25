import BlogDetailsPage from "./blogs_details";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailsRoute({ params }: PageProps) {
  const { slug } = await params;

  return <BlogDetailsPage slug={slug} />;
}
