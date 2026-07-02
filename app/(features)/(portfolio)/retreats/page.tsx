import RetreatSectionPage from "@/features/public/retreats/RetreatPage";
import { retreatKeys } from "@/services/businessservices/retreats.services";
import { getRetreats } from "@/services/endpoints/retreats.endpoints";
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
    queryKey: retreatKeys.registered,
    queryFn: getRetreats,
  });

  return (

    <HydrationBoundary state={dehydrate(queryClient)}>
      <RetreatSectionPage />
    </HydrationBoundary>
  );
}
