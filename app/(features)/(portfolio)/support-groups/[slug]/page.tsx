import SupportGroupsDetails from "@/features/public/groups/GroupDetails";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <SupportGroupsDetails selectedSlug={slug} />;
}
