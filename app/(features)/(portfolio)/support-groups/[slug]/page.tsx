"use client";

import SupportGroupsDetails from "@/features/public/groups/GroupDetails";
import { GroupDetailSkeleton } from "@/components/skeleton/GroupSkeleton";
import { useGroupDetails } from "@/hooks/useGroups";
import { useParams, notFound } from "next/navigation";
// import { getGroups } from "@/services/endpoints/groups.endpoints";

// export async function generateStaticParams() {
//   const { results } = await getGroups(1);

//   return results.map((group) => ({
//     slug: group.slug,
//   }));
// }

export default function GroupsDetailPage() {
  const { slug } = useParams() as { slug: string };
  const { data: group, isLoading, error } = useGroupDetails(slug);

  if (isLoading) {
    return <GroupDetailSkeleton />;
  }

  if (error || !group) {
    notFound();
  }

  return <SupportGroupsDetails group={group} />
}
