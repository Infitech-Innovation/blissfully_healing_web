"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./blogs.module.css";

const categories = [
  "All blogs",
  "Spiritual Healing",
  "Mental Health",
  "Personal Reconnection",
  "Retreats",
  "Courses",
  "Support Groups",
];

const blogs = [
  {
    title: "Beginning Your Spiritual Healing Journey",
    category: "Spiritual Healing",
    readTime: "5 mins read",
    image:
      "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1200",
    href: "/blog/beginning-your-spiritual-healing-journey",
    summary:
      "A gentle introduction to spiritual healing, emotional safety, and creating space for personal growth.",
  },
  {
    title: "Creating a Calm and Safe Mindset",
    category: "Mental Health",
    readTime: "6 mins read",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1200",
    href: "/blog/creating-a-calm-and-safe-mindset",
    summary:
      "Explore simple practices that support calmness, emotional balance, and a more grounded daily life.",
  },
  {
    title: "The Art of Personal Reconnection",
    category: "Personal Reconnection",
    readTime: "7 mins read",
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1200",
    href: "/blog/the-art-of-personal-reconnection",
    summary:
      "Personal reconnection is about returning to yourself with compassion, patience, and inner awareness.",
  },
  {
    title: "Why Healing Retreats Create Deep Transformation",
    category: "Retreats",
    readTime: "8 mins read",
    image:
      "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200",
    href: "/blog/why-healing-retreats-create-deep-transformation",
    summary:
      "Retreats offer a peaceful space to pause, reflect, release, and reconnect through guided healing experiences.",
  },
  {
    title: "Learning Through Healing Courses",
    category: "Courses",
    readTime: "5 mins read",
    image:
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1200",
    href: "/blog/learning-through-healing-courses",
    summary:
      "Courses allow users to learn at their own pace with lifetime access to healing and wellness content.",
  },
  {
    title: "The Power of Support Groups",
    category: "Support Groups",
    readTime: "6 mins read",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200",
    href: "/blog/the-power-of-support-groups",
    summary:
      "Support groups help people connect, share experiences, and feel emotionally supported in a safe space.",
  },
];

const ClockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.667 8A6.333 6.333 0 1 0 8 1.667 6.333 6.333 0 0 0 1.667 8Z"
      stroke="#866452"
      strokeLinejoin="round"
    />
    <path
      d="M8.005 7.004a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 0V4.665M10.01 10.012 8.71 8.713"
      stroke="#866452"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Desktop card: image left, content right (flex row) ──────────────────────
function BlogCardDesktop({
  blog,
  index,
}: {
  blog: (typeof blogs)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.isVisible);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.blogCardAnimate} group flex flex-row bg-white rounded-2xl overflow-visible border border-[#ede5db] hover:shadow-[0_8px_32px_rgba(134,100,82,0.12)] transition-shadow duration-300 p-4`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Image — fixed width on the left */}
      <Link
        href={blog.href}
        aria-label={`Read ${blog.title}`}
        className="relative block shrink-0 w-[400px] h-[200px] bg-[#f0e8de] overflow-hidden rounded-lg"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="400px"
        />
        {/* Category badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c47a35] shrink-0" />
          <p className="text-[10px] font-medium text-[#5a3e2b] tracking-wide leading-none">
            {blog.category}
          </p>
        </div>
      </Link>

      {/* Content — fills remaining space */}
      <div className="flex flex-col justify-between gap-3 p-7 flex-1 min-w-0">
        <Link href={blog.href} className="block group/title">
          <h3 className="text-[1.65rem] font-[500] text-[#2d1a0e] leading-snug group-hover/title:text-[#c47a35] transition-colors duration-200 line-clamp-2">
            {blog.title}
          </h3>
        </Link>
        <p className="text-sm text-[#7a5c48] leading-relaxed font-light line-clamp-3 flex-1">
          {blog.summary}
        </p>
        <div className="flex items-center gap-1.5 pt-1">
          <ClockIcon />
          <span className="text-xs text-[#866452] font-medium">
            {blog.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Mobile card: image top, content below (flex col) ────────────────────────
function BlogCardMobile({
  blog,
  index,
}: {
  blog: (typeof blogs)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.isVisible);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.blogCardAnimate} group flex flex-col bg-white rounded-2xl overflow-visible border border-[#ede5db] hover:shadow-[0_8px_32px_rgba(134,100,82,0.12)] transition-shadow duration-300 p-4`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <Link
        href={blog.href}
        aria-label={`Read ${blog.title}`}
        className="relative block overflow-hidden aspect-[16/10] bg-[#f0e8de] rounded-lg"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c47a35] shrink-0" />
          <p className="text-[11px] font-medium text-[#5a3e2b] tracking-wide">
            {blog.category}
          </p>
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-6 flex-1">
        <Link href={blog.href} className="block group/title">
          <h3 className="text-[1.35rem] font-semibold text-[#2d1a0e] leading-snug group-hover/title:text-[#c47a35] transition-colors duration-200">
            {blog.title}
          </h3>
        </Link>
        <p className="text-sm text-[#7a5c48] leading-relaxed font-light flex-1">
          {blog.summary}
        </p>
        <div className="flex items-center gap-1.5 pt-1">
          <ClockIcon />
          <span className="text-xs text-[#866452] font-medium">
            {blog.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("All blogs");

  const filtered =
    activeTab === "All blogs"
      ? blogs
      : blogs.filter((b) => b.category === activeTab);

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

        {/* ════════════════════════════════════════════════════════
            DESKTOP layout — sidebar left, cards right
            shown only at lg breakpoint and above
        ════════════════════════════════════════════════════════ */}
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
        {/* ════ end desktop layout ════ */}
      </div>
    </section>
  );
}
