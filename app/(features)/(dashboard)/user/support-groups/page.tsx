import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import MySupportGroupsDashboard from "@/features/private/groups/MySupportGroups";
import { getServerApi } from "@/lib/axios.server";
import { groupKeys } from "@/hooks/useGroups";
import { getMyGroups } from "@/services/groups.endpoints";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export const metadata: Metadata = createMetadata({
    title: "My Support Groups",
    description: "View and manage your Blissfully Healing support group memberships.",
    path: "/user/support-groups",
    noIndex: true,
});

export default async function SupportGroupsPage() {

    const serverApi = await getServerApi();
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });

    await queryClient.prefetchQuery({
        queryKey: groupKeys.myGroupList(1),
        queryFn: async () => getMyGroups(1, serverApi),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <MySupportGroupsDashboard />
        </HydrationBoundary>
    );
}
