"use client";


import Link from "next/link";
import LibraryCard from "./LibraryCard";
import { useMyEbooks } from "@/services/businessservices/ebook.services";
import LibrarySkeleton from "@/components/skeleton/LibraryCard";
import { OwnedEbooks } from "@/types/ebooks.definations";

const EMPTY_LIST: OwnedEbooks[] = [];


export default function LibrarySection() {

    const { data: purchasedEBooksResponse, isLoading } = useMyEbooks()
    const purchasedEBooks = purchasedEBooksResponse?.results ?? EMPTY_LIST;

    return (
        <section className="bg-[#fffaf6] px-6 py-8 min-h-screen">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
                            Digital Sanctuary Vault
                        </p>
                        <h2 className="font-serif text-4xl font-semibold leading-tight text-[#2f251f] md:text-5xl">
                            My E-Book
                            <br />
                            Library & Guides
                        </h2>
                    </div>
                    <div className="md:max-w-xs">
                        <p className="mb-4 text-sm leading-7 text-[#6f5c4f]">
                            Access and download your purchased digital literature, somatic handbooks, and ritual blueprints.
                        </p>
                        <Link
                            href="/shop"
                            className="inline-block rounded-[8px] border border-[#eadfd4] bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]"
                        >
                            Browse Bookstore
                        </Link>
                    </div>
                </div>

                {isLoading ? (
                    <LibrarySkeleton />
                ) : purchasedEBooks.length > 0 ? (
                    <div className="grid gap-10 lg:grid-cols-2">
                        {purchasedEBooks.map((ebook) => (
                            <LibraryCard key={ebook.id} library={ebook} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-[#dbc7b7] bg-[#f8f0e8] px-6 py-14 text-center">
                        <h3 className="text-xl font-semibold text-[#2f251f]">
                            No ebooks found
                        </h3>

                        <p className="mt-2 max-w-sm text-sm text-[#6f5c4f]">
                            Please subscribe to a course to get started, or try clearing your
                            search query.
                        </p>

                        <Link
                            href="/shop"
                            className="mt-6 inline-block rounded-[8px] border border-[#eadfd4] bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249] shadow-sm"
                        >
                            Explore Curriculum
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}