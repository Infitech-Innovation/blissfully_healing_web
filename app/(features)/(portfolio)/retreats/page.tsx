import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import RetreatSectionPage from "@/features/public/retreats/RetreatPage";
import { retreatKeys } from "@/hooks/useRetreats";
import HydrationProvider from "@/lib/hydration-provider";
import { getRetreats } from "@/services/retreats.endpoints";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export const metadata: Metadata = createMetadata({
  title: "Retreats",
  description:
    "Explore Blissfully Healing retreats designed for restoration, emotional spaciousness, and grounded integration.",
  path: "/retreats",
});

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

    <HydrationProvider state={dehydrate(queryClient)}>
      <RetreatSectionPage />
    </HydrationProvider>
  );
}
