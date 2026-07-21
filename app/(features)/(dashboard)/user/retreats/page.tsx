import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import { MyReatreatsSection } from "@/features/private/retreats/MyRetreats";
import { getServerApi } from "@/lib/axios.server";
import { retreatKeys } from "@/hooks/useRetreats";
import { getMyRetreats } from "@/services/retreats.endpoints";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export const metadata: Metadata = createMetadata({
    title: "My Retreats",
    description: "Review your Blissfully Healing retreat registrations.",
    path: "/user/retreats",
    noIndex: true,
});

export default async function RetreatsPage() {

    const serverApi = await getServerApi();
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });

    await queryClient.prefetchQuery({
        queryKey: retreatKeys.registeredList(1),
        queryFn: async () => (await getMyRetreats(1, serverApi)),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <MyReatreatsSection />
        </HydrationBoundary>
    );
}
