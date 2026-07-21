"use client";

import EbookDetailSkeleton from "@/components/skeleton/EbookDetails";
import EbookDetailsView from "@/features/public/ebooks/EbookDetailsView";
import { useEbookDetails } from "@/hooks/useEbooks";
// import { getEbooks } from "@/services/endpoints/ebooks.endpoints";
import { useParams, notFound } from "next/navigation";

// export async function generateStaticParams() {
//     const { results } = await getEbooks(1);

//     return results.map((book) => ({
//         slug: book.slug,
//     }));
// }

export default function EbookDetailsPage() {
    const { slug } = useParams() as { slug: string };
    const { data: ebook, isLoading, error } = useEbookDetails(slug);

    if (isLoading) {
        return <EbookDetailSkeleton />
    }

    if (error || !ebook) {
        notFound();
    }

    return <EbookDetailsView ebook={ebook} />;
}