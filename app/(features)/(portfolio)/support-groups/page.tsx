import SupportGroups from "@/features/public/groups/supportGroups";
import { groupKeys } from "@/hooks/useGroups";
import { getGroups } from "@/services/groups.endpoints";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

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

    <HydrationBoundary state={dehydrate(queryClient)}>
      <SupportGroups />
    </HydrationBoundary>
  );





}
