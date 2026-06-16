"use client";

import { BookOpen, Clock, Compass, Heart } from "lucide-react";
import Image from "next/image";
import { useGetFeaturedCourses } from "../courses.services";
import { useEffect, useState } from "react";

export default function CourseHero() {
  const { data: featuredCourses = [] } = useGetFeaturedCourses();
  const [activeIndex, setActiveIndex] = useState(0);

  const featured = featuredCourses[activeIndex];

  useEffect(() => {
    if (featuredCourses.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredCourses.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [featuredCourses.length]);

  return (
    <div className="relative overflow-hidden border-b border-[#eadfd4] bg-[#f8f0e8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 text-lg font-semibold text-[#8f6249]">
            Guided healing courses
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#2f251f] sm:text-5xl lg:text-6xl">
            Learn gently, heal deeply, return to yourself.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f5c4f] sm:text-lg">
            Explore self-paced courses created to support emotional healing,
            grief care, self-awareness, and grounded daily practices.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Heart, label: "Trauma-informed" },
              { icon: BookOpen, label: "Self-paced lessons" },
              { icon: Compass, label: "Practical rituals" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-sm border border-[#eadfd4] bg-white/75 p-4 text-[#3f342c] shadow-sm"
              >
                <item.icon className="mb-3 h-5 w-5 text-[#8f6249]" />
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_30px_80px_rgba(63,52,44,0.16)]">
          {featured ? (
            <>
              <Image
                key={featured.id}
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                  Featured path
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  {featured.title}
                </h2>
                <p className="mt-1 text-sm text-white/80 line-clamp-2">
                  {featured.short_description}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-sm backdrop-blur">
                    <Clock className="h-4 w-4" />
                    {featured.duration} of guided practice
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-sm backdrop-blur capitalize">
                    {featured.difficulty}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full w-full animate-pulse bg-[#eadfd4]" />
          )}
        </div>
      </div>
    </div>
  );
}
