"use client";

import LibrarySkeleton from "@/components/skeleton/LibraryCard";
import LibraryCard from "@/features/public/ebooks/LibraryCard";
import LibraryHero from "@/features/public/ebooks/LibraryHero";
import { useGetEbooks, useGetFeaturedEbooks } from "@/hooks/useEbooks";
import { EBookList } from "@/types/ebooks.definations";


const EMPTY_EBOOKS: EBookList[] = [];

export default function LibrarySection() {

    const { data: eBooksData, isLoading } = useGetEbooks();
    const { data: featuredEBookData } = useGetFeaturedEbooks();

    const eBooks = eBooksData?.results ?? EMPTY_EBOOKS;
    const featuredEBooks = featuredEBookData?.results ?? EMPTY_EBOOKS;

    if (isLoading) {
        return <LibrarySkeleton />;
    }
    return (
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
            <LibraryHero ebooks={featuredEBooks} />
            <LibraryCard library={eBooks} />
        </div>
    )
}
