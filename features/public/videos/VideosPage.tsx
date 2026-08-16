"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Radio,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  publicVideos,
  videoCategories,
  type PublicVideo,
  type VideoCategory,
} from "./video-data";

const fontDisplay = "font-[family-name:var(--font-baskervville)]";
const textLinkClass =
  "h-auto cursor-pointer rounded-none border-0 border-b border-[#c6a15b8c] bg-transparent px-0 pb-1.5 text-[0.61rem] uppercase tracking-[0.16em] text-[#f1d79b] shadow-none hover:bg-transparent hover:text-[#f1d79b]";
const reflectionStyles = [
  {
    accent: "#c6a15b",
    number: "rgba(198,161,91,0.62)",
    glow: "rgba(198,161,91,0.32)",
  },
  {
    accent: "#8c7f62",
    number: "rgba(140,127,98,0.7)",
    glow: "rgba(140,127,98,0.34)",
  },
  {
    accent: "#b58f54",
    number: "rgba(181,143,84,0.68)",
    glow: "rgba(181,143,84,0.34)",
  },
];

export default function PublicVideosPage() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");
  const [activeVideo, setActiveVideo] = useState<PublicVideo | null>(null);

  const filteredVideos = useMemo(() => {
    if (activeCategory === "All") return publicVideos;
    return publicVideos.filter((video) => video.category === activeCategory);
  }, [activeCategory]);

  const selectCategory = (category: VideoCategory) => {
    setActiveCategory(category);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f1eadf]">
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-[#050505] px-4 pb-16 pt-24 text-white sm:px-6 lg:px-8">
        <Image
          src="/images/bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 saturate-[0.72]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(198,161,91,0.2),transparent_24rem),linear-gradient(180deg,rgba(5,5,5,0.58),#050505_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative mx-auto flex min-h-[72svh] max-w-4xl flex-col items-center justify-center text-center">
              <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#dac69c]">
                <Radio className="size-4 animate-pulse" />
                Healing Videos
              </p>
              <h1
                className={`${fontDisplay} text-[clamp(4rem,9vw,8.5rem)] font-normal leading-[0.82]`}
              >
                Video Sanctuary
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#d5ccbf] sm:text-lg">
                Guided teachings, reflections, and grounding practices for the
                moments when your body asks for a softer way back.
              </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#video-sanctuary"
                className="inline-flex items-center gap-2 rounded-full border border-[#dac69c] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
              >
                Begin Watching
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/temples/stillness"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d5ccbf] transition hover:bg-white/10 hover:text-white"
              >
                Temple of Stillness
              </Link>
            </div>
        </div>
      </section>

      <section
        id="video-sanctuary"
        className="bg-[repeating-radial-gradient(ellipse_at_50%_100%,rgba(198,161,91,0.08)_0_1px,transparent_2px_24px),linear-gradient(#050505,#0c0907_60%,#050505)] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c6a15b]">
                    Browse Library
                  </p>
                  <h3
                    className={`${fontDisplay} mt-2 text-[clamp(3rem,6vw,5.7rem)] font-normal leading-[0.94] text-[#f1eadf]`}
                  >
                    Practices for the moment you are in.
                  </h3>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {videoCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => selectCategory(category)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition",
                      activeCategory === category
                        ? "border-[#c6a15b] bg-[#c6a15b] text-[#050505]"
                        : "border-[#c6a15b3d] bg-transparent text-[#c9bdac] hover:border-[#c6a15b] hover:bg-[#c6a15b14] hover:text-white"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mx-auto grid max-w-[82rem] grid-cols-3 gap-[clamp(1rem,2.5vw,2.5rem)] [perspective:1200px] max-[900px]:max-w-[34rem] max-[900px]:grid-cols-1">
                {filteredVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    index={publicVideos.findIndex((item) => item.id === video.id)}
                    onSelect={() => setActiveVideo(video)}
                  />
                ))}
              </div>
        </div>

        <AnimatePresence>
          {activeVideo && (
            <VideoModal
              video={activeVideo}
              onClose={() => setActiveVideo(null)}
              onNext={() => {
                const currentIndex = publicVideos.findIndex(
                  (video) => video.id === activeVideo.id
                );
                setActiveVideo(publicVideos[(currentIndex + 1) % publicVideos.length]);
              }}
            />
          )}
        </AnimatePresence>
      </section>

      <section className="bg-[#171a16] px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dac69c]">
            Continue the journey
          </p>
          <h2
            className={`${fontDisplay} mt-4 text-[clamp(3rem,7vw,6rem)] font-normal leading-[0.88]`}
          >
            Let the teaching become a practice.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#d5ccbf]">
            Return to the temples when a video opens a doorway you want to walk
            through more slowly.
          </p>
          <Button
            asChild
            className="mt-8 rounded-full border border-[#dac69c] bg-transparent px-6 py-5 text-sm text-white hover:bg-white/10"
          >
            <Link href="/homepage#temples">
              Explore Temples
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function VideoModal({
  video,
  onClose,
  onNext,
}: {
  video: PublicVideo;
  onClose: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0" onClick={onClose} />
      <motion.article
        className="relative z-10 flex h-full max-h-[85vh] w-full max-w-[1240px] flex-col overflow-hidden rounded-xl bg-[#f6efe2] shadow-2xl md:flex-row"
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35 }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
      >
        <div className="relative h-64 w-full bg-black md:h-full md:w-[68%]">
          <iframe
            className="h-full w-full border-0"
            title={video.title}
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-8 text-[#1f1710] md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9f7431]">
              Video Sanctuary
            </p>
            <h2
              id="video-title"
              className={`${fontDisplay} mt-4 text-3xl font-normal leading-tight tracking-wide text-[#1c1a16] md:text-4xl`}
            >
              {video.title}
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#6d6256]">
              {video.description}
            </p>
            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.18em] text-[#9f7431]">
              {video.duration} / {video.category}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#ead8b5] text-sm font-normal text-[#2b251a] transition hover:bg-[#e2cda4]"
            >
              Next Video
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-[#d8c9b8] bg-white text-sm font-normal text-[#5c5147] transition hover:bg-[#f8f4ed]"
            >
              Close
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-black/10 bg-white/80 text-[#4d443b] transition hover:bg-white"
            aria-label="Close video"
          >
            <X className="size-4" />
          </button>
        </div>
      </motion.article>
    </motion.div>
  );
}

function VideoCard({
  video,
  index,
  onSelect,
}: {
  video: PublicVideo;
  index: number;
  onSelect: () => void;
}) {
  const style = reflectionStyles[index % reflectionStyles.length];

  return (
    <motion.article
      className="group relative min-h-[36rem] overflow-hidden border border-[var(--reflection-accent)] bg-[linear-gradient(140deg,rgba(255,255,255,0.035),color-mix(in_srgb,var(--reflection-accent)_13%,transparent)),#0d0d0d] shadow-[inset_0_0_60px_rgba(255,255,255,0.015),0_30px_80px_rgba(0,0,0,0.4)] [clip-path:polygon(8%_0,92%_0,100%_5%,100%_100%,0_100%,0_5%)] max-[900px]:min-h-[31rem]"
      style={
        {
          "--reflection-accent": style.accent,
          "--reflection-number": style.number,
          "--reflection-glow": style.glow,
        } as CSSProperties
      }
      whileHover={{ y: -10 }}
    >
      <Image
        src={video.poster}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 900px) 50vw, 100vw"
        className="object-cover opacity-55 saturate-[0.72] transition duration-700 group-hover:scale-105 group-hover:opacity-75"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.2),rgba(5,5,5,0.72)_54%,rgba(5,5,5,0.96)),radial-gradient(circle_at_50%_34%,var(--reflection-glow),transparent_17rem)]" />
      <button
        type="button"
        onClick={onSelect}
        className="absolute left-1/2 top-[42%] z-[3] grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--reflection-accent)] bg-black/45 text-[#f7ead0] shadow-[0_0_40px_var(--reflection-glow)] backdrop-blur transition group-hover:scale-105 group-hover:bg-black/60"
        aria-label={`Play ${video.title}`}
      >
        <Play className="ml-1 size-8 fill-current" />
      </button>
      <span
        className={`${fontDisplay} absolute left-8 top-8 z-[2] text-[4.6rem] text-[var(--reflection-number)]`}
      >
        0{index + 1}
      </span>
      <span className="absolute right-[20%] top-0 z-[2] h-[55%] w-px rotate-[13deg] bg-linear-to-b from-transparent via-[var(--reflection-accent)] to-transparent opacity-45 transition duration-[600ms] group-hover:opacity-100 group-hover:shadow-[0_0_18px_var(--reflection-accent)]" />
      <div className="absolute bottom-[2.4rem] left-8 right-8 z-[2]">
        <small className="text-[0.6rem] uppercase tracking-[0.18em] text-[#c8bca9]">
          {video.duration}
        </small>
        <h3
          className={`${fontDisplay} my-[0.8rem] mb-6 text-[2.5rem] font-normal leading-[0.95] text-[#fff4df]`}
        >
          {video.title}
        </h3>
        <Button
          size="sm"
          variant="ghost"
          className={textLinkClass}
          onClick={onSelect}
        >
          <Play className="mr-2 size-3.5" />
          Enter Reflection
        </Button>
      </div>
    </motion.article>
  );
}
