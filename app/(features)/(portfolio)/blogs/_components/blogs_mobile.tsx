import { useEffect, useRef } from "react";
import styles from "./blogs.module.css";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { BlogCardItem } from "../definations";

export function BlogCardMobile({
  blog,
  index,
}: {
  blog: BlogCardItem;
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
        className="relative block h-[240px] overflow-hidden bg-[#f0e8de] rounded-lg sm:h-[260px]"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          loading="eager"
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
          <Clock />
          <span className="text-xs text-[#866452] font-medium">
            {blog.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}
