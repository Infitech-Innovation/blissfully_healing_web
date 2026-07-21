"use client";

import LibrarySkeleton from "@/components/skeleton/LibraryCard";
import Pagination from "@/components/custom/Pagination";
import LibraryCard from "@/features/public/ebooks/LibraryCard";
import LibraryHero from "@/features/public/ebooks/LibraryHero";
import { useGetEbooks, useGetFeaturedEbooks } from "@/hooks/useEbooks";
import { getPaginationPageSize } from "@/lib/pagination";
import { EBookList } from "@/types/ebooks.definations";
import { useState } from "react";


const EMPTY_EBOOKS: EBookList[] = [];

export default function LibrarySection() {
    const [page, setPage] = useState(1);

    const { data: eBooksData, isLoading, isFetching } = useGetEbooks(page);
    const { data: featuredEBookData } = useGetFeaturedEbooks();

    const eBooks = eBooksData?.results ?? EMPTY_EBOOKS;
    const featuredEBooks = featuredEBookData?.results ?? EMPTY_EBOOKS;
    const pageSize = getPaginationPageSize(eBooksData, page, eBooks.length);

    if (isLoading) {
        return <LibrarySkeleton />;
    }
    return (
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
            <LibraryHero ebooks={featuredEBooks} />
            <LibraryCard library={eBooks} />
            <Pagination
                currentPage={page}
                totalItems={eBooksData?.count ?? eBooks.length}
                pageSize={pageSize}
                onPageChange={setPage}
                disabled={isFetching}
            />
        </div>
    )
}
