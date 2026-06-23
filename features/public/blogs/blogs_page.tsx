"use client";

import { useState } from "react";
import styles from "@/styles/blogs.module.css";
import { useBlogs, useCategory } from "@/services/businessservices/blogs.services";
import { BlogCardMobile } from "./blogs_mobile";
import { BlogCardDesktop } from "./blogs_desktop";
import { BlogCardItem } from "@/types/blogs.definations";
import { BlogSectionSkeleton } from "./blogs_skeleton";

export default function BlogSection() {

const { data, isLoading } = useCategory();
// console.log("Categories data:", { data, isLoading, isError, error });

const { data: blogs, isLoading: blogsLoading } = useBlogs();
// console.log("Blogs data:", { blogs, blogsLoading });

  const categories = ["All blogs", ...(data ?? []).map((cat) => cat.name)];

  const [activeTab, setActiveTab] = useState("All blogs");

  if (isLoading || blogsLoading) {
    return <BlogSectionSkeleton />;
  }

  const blogCards: BlogCardItem[] = (blogs ?? []).map((blog) => ({
    href: `/blogs/${blog.slug}`,
    image: blog.cover_image || "/images/bg.webp",
    title: blog.title,
    summary: blog.excerpt,
    category: blog.category.name,
    readTime: `${blog.reading_time} min read`,
  }));

  const filtered: BlogCardItem[] =
    activeTab === "All blogs"
      ? blogCards
      : blogCards.filter((blog) => blog.category === activeTab);

  return (
    <section className={`${styles.blogSection} bg-[#faf5ef] py-10 lg:py-14`}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        {/* ── Header (full width) ── */}
        <div className="mb-10 lg:mb-12">
          <h2 className={styles.bannerTitle}>
            Insights for{" "}
            <span className={styles.bannerTitleSubText}>Mindful Living</span>
          </h2>
        </div>

        <div className="lg:hidden">
          {/* Mobile category pills */}
          <div className="mb-6">
            <p className="text-2xl font-semibold text-[#2d1a0e] mb-3 tracking-widest uppercase">
              Explore Topics
            </p>
            <div role="tablist" className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = activeTab === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-1.5 rounded-full text-base font-medium border transition-all duration-200 ${
                      active
                        ? "bg-[#2d1a0e] text-[#faf5ef] border-[#2d1a0e]"
                        : "bg-transparent text-[#5a3e2b] border-[#d9ccc0] hover:border-[#c47a35] hover:text-[#c47a35]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile blog grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filtered.map((blog, i) => (
                <BlogCardMobile key={blog.href} blog={blog} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-[#7a5c48] text-sm">
              No posts in this category yet.
            </div>
          )}
        </div>

        <div className="hidden lg:flex gap-10 items-start">
          {/* Left sidebar — category list, sticky */}
          <aside className="shrink-0 w-52 sticky top-24 self-start">
            <p className="text-lg font-semibold text-[#2d1a0e] mb-5 tracking-widest uppercase">
              Explore Topics
            </p>
            <div role="tablist" className="flex flex-col gap-1">
              {categories.map((cat) => {
                const active = activeTab === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200 border ${
                      active
                        ? "bg-[#2d1a0e] text-[#faf5ef] border-[#2d1a0e]"
                        : "bg-transparent text-[#5a3e2b] border-transparent hover:bg-[#f0e6d8] hover:text-[#2d1a0e]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right content — blog list (flex col, each card is flex row) */}
          <div className="flex-1 min-w-0">
            {filtered.length > 0 ? (
              <div className="flex flex-col gap-4">
                {filtered.map((blog, i) => (
                  <BlogCardDesktop key={blog.href} blog={blog} index={i} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-[#7a5c48] text-sm">
                No posts in this category yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
