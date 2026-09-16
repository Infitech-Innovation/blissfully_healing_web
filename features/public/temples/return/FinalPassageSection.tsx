import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { eyebrowClass, fontDisplay, textLinkClass } from "../stillness/styles";

export function ReturnPassageSection() {
  return (
    <section className="group relative grid min-h-svh place-content-center overflow-hidden bg-[radial-gradient(circle_at_50%_44%,rgba(241,215,155,0.18),transparent_16rem),#070706] px-[7vw] py-32 text-center">
      <div className="absolute bottom-0 left-0 top-0 w-1/2 border-r border-[#c6a15b26] bg-[linear-gradient(90deg,rgba(198,161,91,0.03),transparent),#0a0908] transition-transform duration-[2400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-x-[14%]" />
      <div className="absolute bottom-0 right-0 top-0 w-1/2 border-l border-[#c6a15b26] bg-[linear-gradient(90deg,rgba(198,161,91,0.03),transparent),#0a0908] transition-transform duration-[2400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-x-[14%]" />
      <motion.div
        className="relative z-[2]"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
      >
        <p className={eyebrowClass}>The return continues</p>
        <h2
          className={`${fontDisplay} text-white my-4 mb-[1.8rem] text-[clamp(4rem,7vw,7.5rem)] font-normal leading-[0.85]`}
        >
          Come back to yourself{" "}
          <em className="block font-normal text-[#f1d79b]">
            gently.
          </em>
        </h2>
        <p className="text-[#948878]">
          What you find here can be held in a private space, with time to be
          witnessed without performing.
        </p>
        <Button
          asChild
          size="sm"
          variant="ghost"
          className={cn("mt-8 inline-flex", textLinkClass)}
        >
          <a href="/temples/voyage">
            Continue the Journey
            <ArrowRight className="ml-2 size-3.5" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
