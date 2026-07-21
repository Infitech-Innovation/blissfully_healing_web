import RetreatSectionPage from "@/features/public/retreats/RetreatPage";
import { retreatKeys } from "@/hooks/useRetreats";
import { getRetreats } from "@/services/retreats.endpoints";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function RetreatsPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: retreatKeys.list(1),
    queryFn: () => getRetreats(1),
  });

  return (

    <HydrationBoundary state={dehydrate(queryClient)}>
      <RetreatSectionPage />
    </HydrationBoundary>
  );
}
