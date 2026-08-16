import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import SupportGroups from "@/features/public/groups/supportGroups";
import { groupKeys } from "@/hooks/useGroups";
import HydrationProvider from "@/lib/hydration-provider";
import { getGroups } from "@/services/groups.endpoints";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export const metadata: Metadata = createMetadata({
  title: "Support Groups",
  description:
    "Find facilitated Blissfully Healing support groups for grief, anxiety, burnout, parenting, and emotional care.",
  path: "/support-groups",
});

export default async function Page() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: groupKeys.list(1),
    queryFn: () => getGroups(1),
  })
  return (

    <HydrationProvider state={dehydrate(queryClient)}>
      <SupportGroups />
    </HydrationProvider>
  );





}
