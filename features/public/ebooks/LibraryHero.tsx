
"use client";

import { EBook } from "@/types/ebooks.definations";
import { Search, Sparkles, Flame, Clock, Bookmark } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type LibraryHeroProps = {
    ebooks: EBook[];
};

export default function LibraryHero({ ebooks }: LibraryHeroProps) {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (ebooks.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % ebooks.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [ebooks.length]);

    const activeBook = ebooks[activeIndex];


    const quickFilters = [
        { label: "Trending", icon: Flame, color: "text-[#8f6249] bg-[#fffaf6] border-[#eadfd4]" },
        { label: "New Releases", icon: Clock, color: "text-[#8f6249] bg-[#fffaf6] border-[#eadfd4]" },
        { label: "Editor's Pick", icon: Sparkles, color: "text-[#8f6249] bg-[#fffaf6] border-[#eadfd4]" },
        { label: "Audiobooks", icon: Bookmark, color: "text-[#8f6249] bg-[#fffaf6] border-[#eadfd4]" },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf6] via-white to-white pt-2 pb-4 md:pt-3 md:pb-5  mb-6 ">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-[#eadfd4]/40 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 -z-10 h-60 w-60 rounded-full bg-[#f8f0e8]/60 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

                    {/* Left Column: Text & Search */}
                    <div className="flex flex-col justify-center space-y-6 lg:col-span-7">
                        <h1 className="text-4xl font-extrabold tracking-tight text-[#2f251f] sm:text-5xl md:text-6xl">
                            Explore Your Next <br />
                            <span className="bg-gradient-to-r from-[#8f6249] to-[#6f5c4f] bg-clip-text text-transparent">
                                Great Adventure
                            </span>
                        </h1>

                        <p className="max-w-xl text-base text-[#6f5c4f] md:text-lg">
                            Instantly download bestsellers, hidden gems, and technical guides. Filter by genre, author, or mood to find your perfect digital read.
                        </p>

                        {/* Main Browse Search Bar */}
                        <div className="max-w-xl w-full">
                            <div className="relative flex items-center drop-shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                    <Search className="h-5 w-5 text-[#6f5c4f]/50" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search by title, author, topics..."
                                    className="w-full rounded-2xl border border-[#eadfd4] bg-white py-3.5 pl-12 pr-32 text-sm text-[#2f251f] placeholder-[#6f5c4f]/50 focus:border-[#8f6249] focus:outline-none focus:ring-2 focus:ring-[#8f6249]/20 transition-all"
                                />
                                <button className="absolute right-2 rounded-xl bg-[#8f6249] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2f251f] focus:outline-none focus:ring-2 focus:ring-[#8f6249] focus:ring-offset-2 transition-all">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Quick Filters */}
                        <div className="space-y-2.5">
                            <span className="text-xs font-semibold text-[#6f5c4f]/60 uppercase tracking-wider">Quick Filters</span>
                            <div className="flex flex-wrap gap-2.5">
                                {quickFilters.map((filter, index) => {
                                    const Icon = filter.icon;
                                    return (
                                        <button
                                            key={index}
                                            className={`flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-medium transition-transform hover:-translate-y-0.5 active:translate-y-0 ${filter.color}`}
                                        >
                                            <Icon className="h-3.5 w-3.5" />
                                            {filter.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Auto-cycling Books */}
                    <div className="hidden lg:col-span-5 lg:block">
                        <div className="relative flex justify-center items-center h-80">

                            {/* Left Book */}
                            <div className="absolute left-4 z-0 w-44 -rotate-12 transform rounded-xl shadow-xl opacity-70 blur-[0.5px] transition-all duration-700">
                                {ebooks[(activeIndex - 1 + ebooks.length) % ebooks.length] && (
                                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#f8f0e8] relative">
                                        <Image
                                            src={ebooks[(activeIndex - 1 + ebooks.length) % ebooks.length].coverImage}
                                            alt={ebooks[(activeIndex - 1 + ebooks.length) % ebooks.length].title}
                                            className="h-full w-full object-cover"
                                            width={176}
                                            height={235}
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/90 via-[#2f251f]/50 to-[#2f251f]/20" />
                                        <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#f8f0e8]/60">
                                                {ebooks[(activeIndex - 1 + ebooks.length) % ebooks.length].tag}
                                            </span>
                                            <h4 className="font-serif text-base font-bold leading-tight line-clamp-2">
                                                {ebooks[(activeIndex - 1 + ebooks.length) % ebooks.length].title}
                                            </h4>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Main (Center) Book */}
                            <div className="relative z-10 w-56 transform rounded-2xl shadow-2xl transition-all duration-700 hover:rotate-2 hover:scale-105">
                                {activeBook && (
                                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#f8f0e8] relative group">
                                        <Image
                                            key={activeBook.slug}
                                            src={activeBook.coverImage}
                                            alt={activeBook.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            width={224}
                                            height={299}
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/90 via-[#2f251f]/50 to-[#2f251f]/20" />
                                        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                                            <span className="text-xs font-bold uppercase tracking-widest text-[#f8f0e8]/80">
                                                {activeBook.tag}
                                            </span>
                                            <div>
                                                <h3 className="font-serif text-xl font-bold leading-tight line-clamp-2">
                                                    {activeBook.title}
                                                </h3>
                                                <p className="mt-2 text-xs text-[#f8f0e8]/70">by {activeBook.author}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-bold">{activeBook.pricePaid}</span>
                                                <div className="h-1.5 w-12 rounded-full bg-[#eadfd4]/60" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Book */}
                            <div className="absolute right-4 z-0 w-44 rotate-12 transform rounded-xl shadow-xl opacity-70 blur-[0.5px] transition-all duration-700">
                                {ebooks[(activeIndex + 1) % ebooks.length] && (
                                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#f8f0e8] relative">
                                        <Image
                                            src={ebooks[(activeIndex + 1) % ebooks.length].coverImage}
                                            alt={ebooks[(activeIndex + 1) % ebooks.length].title}
                                            className="h-full w-full object-cover"
                                            width={176}
                                            height={235}
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/90 via-[#2f251f]/50 to-[#2f251f]/20" />
                                        <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#f8f0e8]/80">
                                                {ebooks[(activeIndex + 1) % ebooks.length].tag}
                                            </span>
                                            <h4 className="font-serif text-base font-bold leading-tight line-clamp-2">
                                                {ebooks[(activeIndex + 1) % ebooks.length].title}
                                            </h4>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}