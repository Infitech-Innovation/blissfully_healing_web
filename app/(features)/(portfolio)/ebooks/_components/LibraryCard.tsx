import { EBook } from "@/app/(features)/(dashboard)/user/ebooks/definations";
import {
    Layers,
    FileText,
    CheckCircle,
    Tag,
} from "lucide-react";
import Image from "next/image";

type LibraryProps = {
    library: EBook[]
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
                                Verified Owner • {book.pricePaid}
                            </span>
                            <span className="flex items-center gap-1.5 font-bold text-xl text-[#2f251f]">
                                <Tag size={20} className="text-[#8f6249]" />
                                 {book.pricePaid}
                            </span>
                        </div>

                        {/* Layout Content Frame */}
                        <div className="flex flex-col gap-6 sm:flex-row">
                            {/* Book Cover Container */}
                            <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-[6px] bg-[#f8f0e8] shadow-md sm:w-40">
                                <Image
                                    src={book.coverImage}
                                    alt={book.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                                    width={300}
                                    height={400}
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/20 to-transparent" />
                                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#8f6249] shadow-sm">
                                    {book.tag}
                                </span>
                            </div>

                            {/* Primary Book Metadata */}
                            <div className="flex flex-1 flex-col justify-between">
                                <div>
                                    <h3 className="mb-1 font-serif text-xl font-semibold text-[#2f251f] line-clamp-2">
                                        {book.title}
                                    </h3>
                                    <p className="mb-3 text-xs italic text-[#8f6249]">
                                        by {book.author}
                                    </p>
                                    <p className="mb-4 text-xs leading-relaxed text-[#6f5c4f] line-clamp-3">
                                        {book.desc}
                                    </p>
                                </div>

                                {/* Core Metrics Grid */}
                                <div className="grid grid-cols-3 gap-2 rounded-[6px] bg-[#fffaf6] p-3 text-center text-[11px] text-[#6f5c4f]">
                                    <div className="border-r border-[#eadfd4]/60">
                                        <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                                            Format
                                        </span>
                                        <span className="font-semibold text-[#2f251f] flex items-center justify-center gap-1 mt-0.5">
                                            <FileText size={11} className="text-[#8f6249]" />{" "}
                                            {book.format}
                                        </span>
                                    </div>
                                    <div className="border-r border-[#eadfd4]/60">
                                        <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                                            Extent
                                        </span>
                                        <span className="font-semibold text-[#2f251f] block mt-0.5">
                                            {book.pages} Pages
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                                            Size
                                        </span>
                                        <span className="font-semibold text-[#2f251f] block mt-0.5">
                                            {book.fileSize}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collateral Module: Core Index Breakdown */}
                        <div className="mt-6 border-t border-[#f8f0e8] pt-5">
                            <span className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#2f251f]">
                                <Layers size={12} className="text-[#8f6249]" /> Included
                                Manifest modules
                            </span>
                            <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                                {book.chapters.map((chapter, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 text-xs text-[#6f5c4f]"
                                    >
                                        <CheckCircle
                                            size={12}
                                            className="shrink-0 text-[#8f6249]/70"
                                        />
                                        <span className="truncate">{chapter}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Global Interactive Downloads */}
                        <div className="mt-auto flex flex-col sm:flex-row gap-3">
                            <button
                                type="button"
                                className="flex flex-1 items-center justify-center gap-2 rounded-[8px] bg-[#8f6249] px-4 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#2f251f]"
                            >
                                {/* < size={14} /> */}
                                {book.pricePaid}  Buy Now
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
