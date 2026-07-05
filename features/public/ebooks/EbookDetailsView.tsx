"use client";

import CheckOutButton from "@/components/common/checkoutBtn";
import { EBook } from "@/types/ebooks.definations";
import {
    ArrowLeft,
    FileText,
    BookOpen,
    Tag,
    CheckCircle,
    Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EbookDetailsViewProps {
    ebook: EBook;
}

export default function EbookDetailsView({ ebook: book }: EbookDetailsViewProps) {
    const isFree = book.price === "0.00" || parseFloat(book.price) === 0;

    // We only need a handler for the free version now
    const handleFreeClaim = () => {
        alert(`Claiming free copy of: ${book.title}`);
    };

    return (
        <div className="min-h-screen bg-[#fffaf6] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">

                {/* Navigation Breadcrumb Bar */}
                <Link
                    href="/shop"
                    className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6f5c4f] transition hover:text-[#8f6249]"
                >
                    <ArrowLeft size={14} /> Back to Library
                </Link>

                {/* Layout Main Deck Split Grid */}
                <div className="grid gap-10 md:grid-cols-3">

                    {/* Left Column: Visual Book Profile Cover Sticky Anchor */}
                    <div className="md:col-span-1">
                        <div className="sticky top-6 flex flex-col items-center">
                            <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[8px] border border-[#eadfd4] bg-[#f8f0e8] shadow-[0_18px_45px_rgba(63,52,44,0.1)] transition duration-300 hover:shadow-[0_28px_70px_rgba(63,52,44,0.16)] md:max-w-none">
                                <Image
                                    src={book.cover_image}
                                    alt={book.title}
                                    className="h-full w-full object-cover"
                                    width={400}
                                    height={533}
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/20 to-transparent" />
                                <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#8f6249] shadow-sm">
                                    {book.category_label}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Book Profiles & Information Systems Meta */}
                    <div className="flex flex-col md:col-span-2">
                        <article className="flex flex-1 flex-col rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] sm:p-8">

                            {/* Top Banner Asset Identifiers */}
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#f8f0e8] pb-5">
                                <div>
                                    <h1 className="font-serif text-2xl font-bold text-[#2f251f] sm:text-3xl">
                                        {book.title}
                                    </h1>
                                    <p className="mt-1 text-sm italic text-[#8f6249]">
                                        by {book.author}
                                    </p>
                                </div>

                                {/* Cost/Pricing Tier Indicator Badge */}
                                <div>
                                    {isFree ? (
                                        <span className="flex items-center gap-1.5 font-bold text-2xl text-[#0F766E]">
                                            <Tag size={22} className="text-[#0F766E]" />
                                            Free
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1.5 font-bold text-2xl text-[#2f251f]">
                                            <Tag size={22} className="text-[#8f6249]" />
                                            KES {book.price}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Core Physical File Metrics Deck */}
                            <div className="mb-8 grid grid-cols-3 gap-2 rounded-[6px] bg-[#fffaf6] p-4 text-center text-xs text-[#6f5c4f]">
                                <div className="border-r border-[#eadfd4]/60">
                                    <span className="block text-[10px] uppercase tracking-wider text-gray-400">
                                        File Format
                                    </span>
                                    <span className="mt-1 flex items-center justify-center gap-1.5 font-semibold text-[#2f251f]">
                                        <FileText size={13} className="text-[#8f6249]" />{" "}
                                        {book.file_format}
                                    </span>
                                </div>
                                <div className="border-r border-[#eadfd4]/60">
                                    <span className="block text-[10px] uppercase tracking-wider text-gray-400">
                                        Extent
                                    </span>
                                    <span className="mt-1 block font-semibold text-[#2f251f]">
                                        {book.file_pages} Pages
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-wider text-gray-400">
                                        File Size
                                    </span>
                                    <span className="mt-1 block font-semibold text-[#2f251f]">
                                        {book.file_size_mb} MB
                                    </span>
                                </div>
                            </div>

                            {/* Book Summary Description Segment */}
                            <div className="mb-8">
                                <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#2f251f]">
                                    Synopsis / Summary
                                </h2>
                                <p className="text-sm leading-relaxed text-[#6f5c4f]">
                                    {book.short_description || "No description provided for this digital asset item."}
                                </p>
                            </div>

                            {/* Interactive Modules / Manifest Content List Checklist */}
                            {book.modules && book.modules.length > 0 && (
                                <div className="mb-8 border-t border-[#f8f0e8] pt-6">
                                    <h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2f251f]">
                                        <Layers size={14} className="text-[#8f6249]" />
                                        Included Content Modules ({book.modules.length})
                                    </h2>
                                    <ul className="grid gap-3 sm:grid-cols-2">
                                        {book.modules
                                            .sort((a, b) => a.order - b.order)
                                            .map((mod) => (
                                                <li
                                                    key={mod.id}
                                                    className="flex items-start gap-2.5 rounded-[6px] border border-[#f8f0e8] bg-[#fffaf6]/50 p-3 text-xs text-[#6f5c4f]"
                                                >
                                                    <CheckCircle
                                                        size={14}
                                                        className="mt-0.5 shrink-0 text-[#8f6249]/70"
                                                    />
                                                    <span className="font-medium line-clamp-2">{mod.text}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}

                            {/* Primary Conversions Call To Action Bar */}
                            <div className="mt-auto border-t border-[#f8f0e8] pt-6">
                                {isFree ? (
                                    <button
                                        type="button"
                                        onClick={handleFreeClaim}
                                        className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#2f251f] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#8f6249]"
                                    >
                                        <BookOpen size={14} />
                                        Claim This Book for Free
                                    </button>
                                ) : (
                                    /* Your custom checkout component handles the redirect, styling, and onClick internally */
                                    <CheckOutButton
                                        id={book.id}
                                        type="ebook"
                                        btnName={`Purchase E-Book • KES ${book.price}`}
                                    />
                                )}
                            </div>

                        </article>
                    </div>

                </div>
            </div>
        </div>
    );
}