import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import LibrarySection from "@/features/public/ebooks/LibarySection";
import { ebookKeys } from "@/hooks/useEbooks";
import HydrationProvider from "@/lib/hydration-provider";
import { getEbooks, getFeaturedEbooks } from "@/services/ebooks.endpoints";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export const metadata: Metadata = createMetadata({
    title: "E-Book Library",
    description:
        "Browse Blissfully Healing digital guides, e-books, somatic handbooks, and ritual resources.",
    path: "/shop",
});

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

        <HydrationProvider state={dehydrate(queryClient)}>
            <LibrarySection />
        </HydrationProvider>
    );
}
