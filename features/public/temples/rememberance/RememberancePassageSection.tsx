"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { eyebrowClass, fontDisplay, textLinkClass } from "../stillness/styles";

export function RememberancePassageSection() {
  return (
    <section
      id="remember-invitation"
      className="remember-invitation group relative grid min-h-svh place-content-center overflow-hidden bg-[#070706] px-[7vw] py-32 text-center"
    >
      {/* Background panels */}
      <div className="absolute inset-y-0 left-0 w-1/2 border-r border-[#c6a15b26] bg-[linear-gradient(90deg,rgba(198,161,91,0.03),transparent),#0a0908] transition-transform duration-[2400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-x-[14%]" />

      <div className="absolute inset-y-0 right-0 w-1/2 border-l border-[#c6a15b26] bg-[linear-gradient(270deg,rgba(198,161,91,0.03),transparent),#0a0908] transition-transform duration-[2400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-x-[14%]" />

      {/* Original invitation lighting */}
      <div className="remember-invitation-light pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_44%,rgba(241,215,155,0.18),transparent_16rem)]" />

      {/* Main content */}
      <motion.div
        className="remember-invitation-inner relative z-[2]"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
      >
        <p className={cn(eyebrowClass, "remember-kicker")}>
          The Temple of Remembrance
        </p>

        <h2
          className={cn(
            fontDisplay,
            "my-4 mb-[1.8rem] text-[clamp(4rem,7vw,7.5rem)] font-normal leading-[0.85] text-white"
          )}
        >
          Your next chapter
          <em className="block font-normal text-[#f1d79b]">
            begins within.
          </em>
        </h2>

        <p className="mx-auto max-w-xl text-[#948878]">
          Discover the strength, embrace the change, and become the person you
          were always meant to be.
        </p>
        <Button
          asChild
          variant="ghost"
          className={cn(
            "mt-8 inline-flex h-auto min-w-[240px] justify-center gap-3 px-7 py-4 text-base font-medium tracking-[0.12em] text-[#f1d79b] transition-all duration-300 hover:bg-[#f1d79b]/10 hover:text-white sm:min-w-[280px] sm:text-lg",
            textLinkClass
          )}
        >
          <a href="/temples/stillness" className="text-white">
            Continue the Journey
            <ArrowRight className="size-5 shrink-0" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}