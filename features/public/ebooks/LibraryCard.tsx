
import { EBookList } from "@/types/ebooks.definations";
import {
    FileText,
    Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type LibraryProps = {
    library: EBookList[]
}

export default function LibraryCard({ library }: LibraryProps) {
    return (
        <div>
            {/* E-Books Detailed Deck Grid */}
            <div className="grid gap-10 lg:grid-cols-2">
                {library.map((book) => (
                    <article
                        key={book.slug}
                        className="group flex flex-col overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] transition duration-300 hover:shadow-[0_28px_70px_rgba(63,52,44,0.12)]"
                    >
                        {/* Purchase Header Bar */}
                        <div className="mb-5 flex items-center justify-between border-b border-[#f8f0e8] pb-4 text-xs text-[#6f5c4f]">
                            <span className="rounded bg-[#fffaf6] border border-[#eadfd4] px-2.5 py-1 font-semibold text-[#8f6249]">
                                Verified Owner
                            </span>
                            {
                                book.price === '0.00' ? (
                                    <span className="flex items-center gap-1.5 font-bold text-xl text-[#0F766E]">
                                        <Tag size={20} className="text-[#0F766E]" />
                                        Free
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1.5 font-bold text-xl text-[#2f251f]">
                                        <Tag size={20} className="text-[#8f6249]" />
                                        KES {book.price}
                                    </span>
                                )
                            }

                        </div>

                        {/* Layout Content Frame */}
                        <div className="flex flex-col gap-6 sm:flex-row">
                            {/* Book Cover Container */}
                            <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-[6px] bg-[#f8f0e8] shadow-md sm:w-40">
                                <Image
                                    src={book.cover_image}
                                    alt={book.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                                    width={300}
                                    height={400}
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/20 to-transparent" />
                                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#8f6249] shadow-sm">
                                    {book.category_label}
                                </span>
                            </div>

                            {/* Primary Book Metadata */}
                            <div className="flex flex-1 flex-col justify-between">
                                <div className="mb-4">
                                    <h3 className="mb-1 font-serif text-xl font-semibold text-[#2f251f] line-clamp-2">
                                        {book.title}
                                    </h3>
                                    <p className="mb-3 text-xs italic text-[#8f6249]">
                                        by {book.author}
                                    </p>
                                </div>

                                {/* Core Metrics Grid */}
                                <div className="grid grid-cols-3  gap-2 rounded-[6px] bg-[#fffaf6] p-3 text-center text-[11px] text-[#6f5c4f]">
                                    <div className="border-r border-[#eadfd4]/60">
                                        <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                                            Format
                                        </span>
                                        <span className="font-semibold text-[#2f251f] flex items-center justify-center gap-1 mt-0.5">
                                            <FileText size={11} className="text-[#8f6249]" />{" "}
                                            {book.file_format}
                                        </span>
                                    </div>
                                    <div className="border-r border-[#eadfd4]/60">
                                        <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                                            Extent
                                        </span>
                                        <span className="font-semibold text-[#2f251f] block mt-0.5">
                                            {book.file_pages} Pages
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                                            Size
                                        </span>
                                        <span className="font-semibold text-[#2f251f] block mt-0.5">
                                            {book.file_size_mb} MB
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 border-t border-[#f8f0e8] pt-5 mt-auto flex flex-col sm:flex-row gap-3">
                                    <Link
                                        className="flex flex-1 items-center justify-center gap-2 rounded-[8px] bg-[#8f6249] px-4 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#2f251f]"
                                        href={`/shop/${book.slug}`}>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
