"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    title: "Safety",
    highlight: "Safety",
    titleBase: "",
    description:
      "This is a judgment-free space. Whatever you're carrying, you are welcome here exactly as you are.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3L5.25 8.25V18C5.25 24.627 10.8645 30.0645 18 32.25C25.1355 30.0645 30.75 24.627 30.75 18V8.25L18 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12.75 18L16.5 21.75L23.25 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Authenticity",
    highlight: "Authenticity",
    titleBase: "",
    description:
      "No performance, no perfection. We speak honestly about healing because real growth requires real honesty.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 30.75C18 30.75 4.5 23.25 4.5 13.5C4.5 10.0482 7.2982 7.25 10.75 7.25C13.0275 7.25 15.0225 8.4525 16.125 10.275C16.7325 9.1425 17.6925 8.22 18.855 7.625" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 30.75C18 30.75 31.5 23.25 31.5 13.5C31.5 10.0482 28.7018 7.25 25.25 7.25C22.9725 7.25 20.9775 8.4525 19.875 10.275" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 13.5V19.5M15 16.5H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Accessibility",
    highlight: "Accessibility",
    titleBase: "",
    description:
      "Healing should not be a luxury. We work to make our content and community available to as many people as possible.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18H30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 18C6 18 10.5 12 18 12C25.5 12 30 18 30 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 18C6 18 10.5 24 18 24C25.5 24 30 18 30 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M18 6V9M18 27V30M6 18H3M33 18H30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Spiritual Grounding",
    highlight: "Spiritual Grounding",
    titleBase: "",
    description:
      "We honor the spiritual dimension of healing — the part of you that goes beyond the mind and body.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4.5C18 4.5 11.25 10.5 11.25 17.25C11.25 20.9779 14.2721 24 18 24C21.7279 24 24.75 20.9779 24.75 17.25C24.75 10.5 18 4.5 18 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M18 24V31.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M13.5 29.25H22.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11.25 17.25C8.5 16 6 13.5 5.25 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M24.75 17.25C27.5 16 30 13.5 30.75 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Community",
    highlight: "Community",
    titleBase: "",
    description:
      "You heal faster in connection. Our groups, retreats, and shared spaces exist because no one should heal alone.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="7.5" cy="15" r="3.75" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="28.5" cy="15" r="3.75" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M26.25 27C26.25 23.2721 22.5563 20.25 18 20.25C13.4437 20.25 9.75 23.2721 9.75 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M33 29.25C33 26.1934 30.7279 23.7187 28.5 22.875" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M3 29.25C3 26.1934 5.27208 23.7187 7.5 22.875" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Growth",
    highlight: "Growth",
    titleBase: "",
    description:
      "Healing is not the destination — it is the beginning. We build tools for lasting, meaningful personal growth.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 31.5V13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M18 13.5C18 13.5 18 7.5 24 4.5C24 10.5 21 13.5 18 13.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M18 18C18 18 18 12 12 9C12 15 15 18 18 18Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M10.5 31.5H25.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = sectionRef.current?.querySelectorAll("[data-animate]");
    targets?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Google Fonts — move to layout.tsx <head> via next/font for production */}
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        [data-animate].is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="values-section relative bg-[#130a03] py-24 overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b86e2a] opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#b86e2a] opacity-[0.05] blur-[120px]" />
        </div>

        <div className="relative max-w-[1180px] mx-auto px-6 lg:px-10">

          {/* ── Header ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

            <div className="max-w-lg">
              {/* Eyebrow */}
              <div
                data-animate
                style={{ transitionDelay: "0ms" }}
                className="flex items-center gap-2.5 mb-5"
              >
                <span className="w-2 h-2 rounded-full bg-[#c47a35] shrink-0" />
                <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#c47a35] m-0">
                  What We Stand For
                </p>
              </div>

              {/* Headline */}
              <h2
                data-animate
                style={{ transitionDelay: "80ms" }}
                className="values-heading text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.1] text-[#f4ebe0] m-0"
              >
                Values That Guide{" "}
                <em className="text-[#c47a35] not-italic italic font-light">
                  Everything Here
                </em>
              </h2>
            </div>

            {/* Sub-copy */}
            <p
              data-animate
              style={{ transitionDelay: "160ms" }}
              className="lg:max-w-[340px] text-[1.25rem] leading-[1.75] text-[rgba(244,235,224,0.55)] font-light m-0"
            >
              Not a list of rules — a reflection of what we believe healing
              actually requires.
            </p>
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[rgba(244,235,224,0.08)]">
            {values.map((value, i) => (
              <div
                key={i}
                data-animate
                style={{ transitionDelay: `${(i + 2) * 60}ms` }}
                className="group relative flex flex-col gap-5 p-8 border-[rgba(244,235,224,0.08)]
                  [border-right-width:1px] [border-bottom-width:1px]
                  last:border-r-0
                  lg:[&:nth-child(3n)]:border-r-0
                  sm:[&:nth-child(2n)]:border-r-0
                  lg:[&:nth-child(2n)]:border-r
                  lg:[&:nth-child(3n)]:border-r-0
                  transition-colors duration-300 hover:bg-[#1c0d04]"
              >
                {/* Subtle top accent on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-[#c47a35] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon */}
                <div className="text-[#c47a35] w-10 h-10 shrink-0">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="card-title text-[1.6rem] font-normal leading-snug text-[#f4ebe0] m-0 italic">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-[1.275rem] leading-[1.8] text-[rgba(244,235,224,0.58)] font-light m-0">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}