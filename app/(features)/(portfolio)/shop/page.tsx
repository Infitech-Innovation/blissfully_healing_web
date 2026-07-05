import LibrarySection from "@/features/public/ebooks/LibarySection";
import { ebookKeys } from "@/services/businessservices/ebook.services";
import { getEbooks } from "@/services/endpoints/ebooks.endpoints";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function EbooksPage() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });

    await queryClient.prefetchQuery({
        queryKey: ebookKeys.all,
        queryFn: getEbooks,
    });

    return (

        <HydrationBoundary state={dehydrate(queryClient)}>
            <LibrarySection />
        </HydrationBoundary>
    );
}
