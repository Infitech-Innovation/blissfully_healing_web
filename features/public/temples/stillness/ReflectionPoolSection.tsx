import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { reflectionStyles, reflections, type Reflection } from "./data";
import { eyebrowClass, fontDisplay, textLinkClass } from "./styles";

export function ReflectionPoolSection({
  activeReflection,
  activeVideo,
  onSelect,
  onClose,
}: {
  activeReflection: Reflection | null;
  activeVideo: number | null;
  onSelect: (index: number) => void;
  onClose: () => void;
}) {
  const nextReflectionIndex =
    activeVideo !== null ? (activeVideo + 1) % reflections.length : 0;

  return (
    <section className="min-h-svh bg-[repeating-radial-gradient(ellipse_at_50%_100%,rgba(198,161,91,0.08)_0_1px,transparent_2px_24px),linear-gradient(#070707,#0c0907_60%,#050505)] px-[6vw] pb-40 pt-32">
      <div className="mx-auto mb-16 max-w-[46rem] text-center">
        <p className={eyebrowClass}>The Reflection Pool</p>
        <h2
          className={`${fontDisplay} my-4 text-[clamp(3rem,5.5vw,5.7rem)] font-normal leading-[0.94]`}
        >
          Teachings that meet you in the quiet.
        </h2>
        <p className="leading-[1.8] text-[#918678]">
          Each monolith holds a reflection. Enter only when you are ready to
          listen.
        </p>
      </div>

      <div className="mx-auto grid max-w-[82rem] grid-cols-3 gap-[clamp(1rem,2.5vw,2.5rem)] [perspective:1200px] max-[900px]:max-w-[34rem] max-[900px]:grid-cols-1">
        {reflections.map((reflection, index) => {
          const style = reflectionStyles[index % reflectionStyles.length];

          return (
            <motion.article
              className="group relative min-h-[36rem] overflow-hidden border border-[var(--reflection-accent)] bg-[linear-gradient(140deg,rgba(255,255,255,0.035),color-mix(in_srgb,var(--reflection-accent)_13%,transparent)),#0d0d0d] shadow-[inset_0_0_60px_rgba(255,255,255,0.015),0_30px_80px_rgba(0,0,0,0.4)] [clip-path:polygon(8%_0,92%_0,100%_5%,100%_100%,0_100%,0_5%)] max-[900px]:min-h-[31rem]"
              key={reflection.title}
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
                src={reflection.poster}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 900px) 50vw, 100vw"
                className="object-cover opacity-55 saturate-[0.72] transition duration-700 group-hover:scale-105 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.2),rgba(5,5,5,0.72)_54%,rgba(5,5,5,0.96)),radial-gradient(circle_at_50%_34%,var(--reflection-glow),transparent_17rem)]" />
              <button
                type="button"
                onClick={() => onSelect(index)}
                className="absolute left-1/2 top-[42%] z-[3] grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--reflection-accent)] bg-black/45 text-[#f7ead0] shadow-[0_0_40px_var(--reflection-glow)] backdrop-blur transition group-hover:scale-105 group-hover:bg-black/60"
                aria-label={`Play ${reflection.title}`}
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
                  {reflection.duration}
                </small>
                <h3
                  className={`${fontDisplay} my-[0.8rem] mb-6 text-[2.5rem] font-normal leading-[0.95] text-[#fff4df]`}
                >
                  {reflection.title}
                </h3>
                <Button
                  size="sm"
                  variant="ghost"
                  className={textLinkClass}
                  onClick={() => onSelect(index)}
                >
                  <Play className="mr-2 size-3.5" />
                  Enter Reflection
                </Button>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-14 flex justify-center">
        <Button
          asChild
          size="sm"
          variant="ghost"
          className="inline-flex h-auto rounded-full border border-[#c6a15b4d] bg-[#c6a15b12] px-7 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#f1d79b] transition hover:-translate-y-0.5 hover:bg-[#c6a15b24] hover:text-white"
        >
          <Link href="/videos">
            Explore More
            <ArrowRight className="ml-2 size-3.5" />
          </Link>
        </Button>
      </div>

      <AnimatePresence>
        {activeReflection && (
          <ReflectionModal
            reflection={activeReflection}
            onClose={onClose}
            onNext={() => onSelect(nextReflectionIndex)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ReflectionModal({
  reflection,
  onClose,
  onNext,
}: {
  reflection: Reflection;
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
        aria-labelledby="reflection-title"
      >
        <div className="relative h-64 w-full bg-black md:h-full md:w-[68%]">
          <iframe
            className="h-full w-full border-0"
            title={reflection.title}
            src={`https://www.youtube-nocookie.com/embed/${reflection.youtubeId}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-8 text-[#1f1710] md:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9f7431]">
              Reflection Pool
            </p>
            <h2
              id="reflection-title"
              className={`${fontDisplay} mt-4 text-3xl font-normal leading-tight tracking-wide text-[#1c1a16] md:text-4xl`}
            >
              {reflection.title}
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#6d6256]">
              Sit with this teaching in full screen presence. When you are
              complete, close the chamber or move to the next reflection.
            </p>
            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.18em] text-[#9f7431]">
              {reflection.duration}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#ead8b5] text-sm font-normal text-[#2b251a] transition hover:bg-[#e2cda4]"
            >
              Next Reflection
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
            aria-label="Close reflection"
          >
            <X className="size-4" />
          </button>
        </div>
      </motion.article>
    </motion.div>
  );
}
