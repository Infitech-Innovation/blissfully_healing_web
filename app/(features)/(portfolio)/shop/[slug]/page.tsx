"use client";

import EbookDetailSkeleton from "@/components/skeleton/EbookDetails";
import EbookDetailsView from "@/features/public/ebooks/EbookDetailsView";
import { useEbookDetails } from "@/services/businessservices/ebook.services";
import { useParams, notFound } from "next/navigation";

export default function RetreatDetailPage() {
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