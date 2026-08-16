"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Feather, Search, Sparkles } from "lucide-react";
import { useBlogs, useCategory } from "@/hooks/useBlogs";
import { BlogCardItem } from "@/types/blogs.definations";
import { BlogSectionSkeleton } from "./blogs_skeleton";
import { cn } from "@/lib/utils";

const fontDisplay = "font-[family-name:var(--font-baskervville)]";

export default function BlogSection() {
  const { data: categoryData, isLoading: categoriesLoading } = useCategory();
  const { data: blogsData, isLoading: blogsLoading } = useBlogs();
  const [activeTab, setActiveTab] = useState("All blogs");

  const categories = ["All blogs", ...(categoryData ?? []).map((cat) => cat.name)];

  const blogCards: BlogCardItem[] = useMemo(
    () =>
      (blogsData?.results ?? []).map((blog) => ({
        href: `/blogs/${blog.slug}`,
        image: blog.cover_image || "/images/bg.webp",
        title: blog.title,
        summary: blog.excerpt,
        category: blog.category.name,
        readTime: `${blog.reading_time} min read`,
      })),
    [blogsData?.results]
  );

  const filtered =
    activeTab === "All blogs"
      ? blogCards
      : blogCards.filter((blog) => blog.category === activeTab);

  if (categoriesLoading || blogsLoading) {
    return <BlogSectionSkeleton />;
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#f1eadf]">
      <section className="bg-[radial-gradient(circle_at_24%_20%,rgba(198,161,91,0.16),transparent_24rem),linear-gradient(#050505,#0b0907)] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#dac69c]">
              <Feather className="size-4" />
              Healing Journal
            </p>
            <h1
              className={`${fontDisplay} text-[clamp(3.2rem,6vw,6.2rem)] font-normal leading-[0.86]`}
            >
              Readings for return.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#d5ccbf] sm:text-base">
              Articles, reflections, and practice notes for emotional care,
              spiritual reconnection, and the quiet work of becoming whole.
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#dac69c]/80">
              Explore Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveTab(category)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition",
                    activeTab === category
                      ? "border-[#dac69c] bg-[#dac69c] text-[#171a16]"
                      : "border-white/20 bg-white/5 text-[#d5ccbf] hover:border-[#dac69c] hover:bg-white/10 hover:text-white"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <a
              href="#journal-library"
              className="mt-6 inline-flex items-center gap-2 border-b border-[#dac69c] pb-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f0d6a0] transition hover:text-white"
            >
              Open the archive
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="journal-library"
        className="bg-[repeating-radial-gradient(ellipse_at_50%_100%,rgba(198,161,91,0.08)_0_1px,transparent_2px_24px),linear-gradient(#0b0907,#050505_62%)] px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c6a15b]">
                  Journal Library
                </p>
                <h2
                  className={`${fontDisplay} mt-2 text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[0.92] text-[#f1eadf]`}
                >
                  Explore the latest reflections.
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c6a15b3d] bg-[#c6a15b12] px-4 py-2 text-sm text-[#d5ccbf]">
                <Search className="size-4 text-[#c6a15b]" />
                {filtered.length} posts
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="mx-auto grid max-w-[82rem] grid-cols-3 gap-[clamp(1.4rem,3vw,3.5rem)] max-[900px]:max-w-[34rem] max-[900px]:grid-cols-1">
                {filtered.map((blog, index) => (
                  <JournalCard key={blog.href} blog={blog} index={index} />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function JournalCard({ blog, index }: { blog: BlogCardItem; index: number }) {
  return (
    <article
      className="group relative min-h-[39rem] bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.55),transparent_16rem),linear-gradient(145deg,#d8bd85,#f0deb8_53%,#b58f54)] px-[2.2rem] pb-12 pt-[4.5rem] text-[#271a0d] shadow-[0_25px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-3 hover:shadow-[0_30px_85px_rgba(0,0,0,0.34)] [clip-path:polygon(6%_0,94%_0,100%_5%,98%_94%,93%_100%,7%_98%,0_93%,2%_6%)]"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <span className="absolute left-1/2 top-[3.2rem] grid aspect-square w-[3.2rem] -translate-x-1/2 place-items-center rounded-full bg-[#6a2b18] text-[#f0d6a0] shadow-[0_0_0_0.35rem_rgba(106,43,24,0.16)]">
        <Sparkles className="size-4" />
      </span>
      <small className="mt-[3.2rem] block text-[0.58rem] uppercase tracking-[0.18em] text-[#765222]">
        {blog.category}
      </small>
      <Link
        href={blog.href}
        aria-label={`Read ${blog.title}`}
        className="relative mt-4 block aspect-[16/10] overflow-hidden border border-[#76522233] bg-[#6a2b18]/10 shadow-[inset_0_0_28px_rgba(39,26,13,0.18)]"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 900px) 34rem, 100vw"
          className="object-cover sepia-[0.18] transition duration-700 group-hover:scale-105"
          unoptimized={blog.image.startsWith("http")}
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(39,26,13,0.04),rgba(39,26,13,0.3))]" />
      </Link>
      <Link href={blog.href} className="group/title block">
        <h3
          className={`${fontDisplay} my-4 mb-[1.1rem] text-[2.35rem] font-medium leading-[0.95] text-[#271a0d] transition group-hover/title:text-[#654117]`}
        >
          {blog.title}
        </h3>
      </Link>
      <p className="line-clamp-3 leading-[1.8] text-[#5f4528]">
        {blog.summary}
      </p>
      <div className="mt-5 flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.14em] text-[#765222]">
        <Clock className="size-3.5" />
        {blog.readTime}
      </div>
      <Link
        className="absolute bottom-[2.4rem] left-[2.2rem] border-b border-[#6541178c] pb-1.5 text-[0.61rem] uppercase tracking-[0.16em] text-[#654117]"
        href={blog.href}
      >
        Unfold the Manuscript
      </Link>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[8px] border border-[#c6a15b3d] bg-[#0b0907] px-6 py-20 text-center text-[#d5ccbf]">
      No journal posts are available yet.
    </div>
  );
}
