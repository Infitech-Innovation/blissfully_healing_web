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
    Crown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./EbookDetailsView.module.css";

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
        <div className={`${styles.details} min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8`}>
            <div className="mx-auto max-w-5xl">

                {/* Navigation Breadcrumb Bar */}
                <Link
                    href="/shop"
                    className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d5ccbf] transition hover:text-[#c7a05d]"
                >
                    <ArrowLeft size={14} /> Back to Library
                </Link>

                {/* Layout Main Deck Split Grid */}
                <div className="grid gap-10 md:grid-cols-3">

                    {/* Left Column: Visual Book Profile Cover Sticky Anchor */}
                    <div className="md:col-span-1">
                        <div className="sticky top-28 flex flex-col items-center">
                            <div className={styles.badge} aria-hidden="true"><Crown size={34} strokeWidth={1.4} /></div>
                            <div className={`${styles.coverFrame} relative aspect-[3/4] w-full max-w-[280px] overflow-hidden md:max-w-none`}>
                                <Image
                                    src={book.cover_image}
                                    alt={book.title}
                                    className="h-full w-full object-cover"
                                    width={400}
                                    height={533}
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/20 to-transparent" />
                                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#0a0908]/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#c7a05d] shadow-sm">
                                    {book.category_label}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Book Profiles & Information Systems Meta */}
                    <div className="flex flex-col md:col-span-2">
                        <article className={`${styles.frame} flex flex-1 flex-col rounded-[8px] p-6 sm:p-8`}>

                            {/* Top Banner Asset Identifiers */}
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#c7a05d]/30 pb-5">
                                <div>
                                    <h1 className="font-serif text-3xl font-normal text-[#c7a05d] sm:text-4xl">
                                        {book.title}
                                    </h1>
                                    <p className="mt-1 text-sm italic text-[#c7a05d]">
                                        by {book.author}
                                    </p>
                                </div>

                                {/* Cost/Pricing Tier Indicator Badge */}
                                <div>
                                    {isFree ? (
                                        <span className="flex items-center gap-1.5 font-bold text-2xl text-[#c7a05d]">
                                            <Tag size={22} className="text-[#c7a05d]" />
                                            Free
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1.5 font-bold text-2xl text-[#ead8b5]">
                                            <Tag size={22} className="text-[#c7a05d]" />
                                            KES {book.price}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Core Physical File Metrics Deck */}
                            <div className="mb-8 grid grid-cols-3 gap-2 rounded-[6px] bg-[#0a0908] p-4 text-center text-xs text-[#d5ccbf]">
                                <div className="border-r border-[#c7a05d]/60">
                                    <span className="block text-[10px] uppercase tracking-wider text-[#c7a05d]">
                                        File Format
                                    </span>
                                    <span className="mt-1 flex items-center justify-center gap-1.5 font-semibold text-[#ead8b5]">
                                        <FileText size={13} className="text-[#c7a05d]" />{" "}
                                        {book.file_format}
                                    </span>
                                </div>
                                <div className="border-r border-[#c7a05d]/60">
                                    <span className="block text-[10px] uppercase tracking-wider text-[#c7a05d]">
                                        Extent
                                    </span>
                                    <span className="mt-1 block font-semibold text-[#ead8b5]">
                                        {book.file_pages} Pages
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-wider text-[#c7a05d]">
                                        File Size
                                    </span>
                                    <span className="mt-1 block font-semibold text-[#ead8b5]">
                                        {book.file_size_mb} MB
                                    </span>
                                </div>
                            </div>

                            {/* Book Summary Description Segment */}
                            <div className="mb-8">
                                <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#ead8b5]">
                                    Synopsis / Summary
                                </h2>
                                <p className="text-sm leading-relaxed text-[#d5ccbf]">
                                    {book.short_description || "No description provided for this digital asset item."}
                                </p>
                            </div>

                            {/* Interactive Modules / Manifest Content List Checklist */}
                            {book.modules && book.modules.length > 0 && (
                                <div className="mb-8 border-t border-[#c7a05d]/30 pt-6">
                                    <h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ead8b5]">
                                        <Layers size={14} className="text-[#c7a05d]" />
                                        Included Content Modules ({book.modules.length})
                                    </h2>
                                    <ul className="grid gap-3 sm:grid-cols-2">
                                        {book.modules
                                            .sort((a, b) => a.order - b.order)
                                            .map((mod) => (
                                                <li
                                                    key={mod.id}
                                                    className="flex items-start gap-2.5 rounded-[6px] border border-[#c7a05d]/30 bg-[#0a0908]/50 p-3 text-xs text-[#d5ccbf]"
                                                >
                                                    <CheckCircle
                                                        size={14}
                                                        className="mt-0.5 shrink-0 text-[#c7a05d]/70"
                                                    />
                                                    <span className="font-medium line-clamp-2">{mod.text}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}

                            {/* Primary Conversions Call To Action Bar */}
                            <div className="mt-auto border-t border-[#c7a05d]/30 pt-6">
                                {isFree ? (
                                    <button
                                        type="button"
                                        onClick={handleFreeClaim}
                                        className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#c7a05d] bg-[#201b13] px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#ead8b5] transition hover:bg-[#29241b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead8b5]"
                                    >
                                        <BookOpen size={14} />
                                        Claim This Book for Free
                                    </button>
                                ) : (
                                    /* Your custom checkout component handles the redirect, styling, and onClick internally */
                                    <CheckOutButton
                                        className="mt-0 border border-[#c7a05d] bg-[#201b13] py-4 text-[#ead8b5] hover:bg-[#29241b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ead8b5]"
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