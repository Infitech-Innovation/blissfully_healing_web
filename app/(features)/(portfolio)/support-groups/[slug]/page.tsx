"use client";

import SupportGroupsDetails from "@/features/public/groups/GroupDetails";
import { GroupDetailSkeleton } from "@/components/skeleton/GroupSkeleton";
import { useGroupDetails } from "@/services/businessservices/groups.services";
import { useParams, notFound } from "next/navigation";

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
