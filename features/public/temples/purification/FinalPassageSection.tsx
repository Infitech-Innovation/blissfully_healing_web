import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { eyebrowClass, fontDisplay, textLinkClass } from "../stillness/styles";

export function PurificationPassageSection() {
  return (
    <section className="group relative grid min-h-svh place-content-center overflow-hidden bg-[radial-gradient(circle_at_50%_44%,rgba(241,215,155,0.18),transparent_16rem),#070706] px-[7vw] py-32 text-center">
      {/* Left atmospheric panel */}
      <div className="absolute bottom-0 left-0 top-0 w-1/2 border-r border-[#c6a15b26] bg-[linear-gradient(90deg,rgba(198,161,91,0.03),transparent),#0a0908] transition-transform duration-[2400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-x-[14%]" />

      {/* Right atmospheric panel */}
      <div className="absolute bottom-0 right-0 top-0 w-1/2 border-l border-[#c6a15b26] bg-[linear-gradient(90deg,rgba(198,161,91,0.03),transparent),#0a0908] transition-transform duration-[2400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-x-[14%]" />

      <motion.div
        className="relative z-[2] mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
      >
        <p className={eyebrowClass} 
        >
          Water becomes moonlight
        </p>

        <h2
          className={`${fontDisplay} my-4 mb-[1.8rem] text-[clamp(3.5rem,7vw,7.5rem)] font-normal leading-[0.85] text-[#829a95;]`}
        >
          Release what no longer needs
          <em className="block font-normal text-[]">
            to be carried.
          </em>
        </h2>

        <p className="mx-auto max-w-2xl text-[#a9bbb6;]">
          {/* #a9bbb6; */}

          Release is not an ending. It is a return to rhythm — a quiet
          permission to let what is ready to leave, leave.
        </p>

        <Button
          asChild
          size="sm"
          variant="ghost"
          className={cn("mt-8 inline-flex", textLinkClass)}
        >
          <a href="/temples/return">
            Continue Journey
            <ArrowRight className="ml-2 size-3.5" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
