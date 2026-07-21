import LibrarySection from "@/features/public/ebooks/LibarySection";
import { ebookKeys } from "@/hooks/useEbooks";
import { getEbooks, getFeaturedEbooks } from "@/services/ebooks.endpoints";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function EbooksPage() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });

    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ebookKeys.list(1),
            queryFn: () => getEbooks(1),
        }),
        queryClient.prefetchQuery({
            queryKey: ebookKeys.featured(1),
            queryFn: () => getFeaturedEbooks(1),
        }),
    ]);

    return (

        <HydrationBoundary state={dehydrate(queryClient)}>
            <LibrarySection />
        </HydrationBoundary>
    );
}
