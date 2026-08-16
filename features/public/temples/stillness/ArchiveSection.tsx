import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { writings } from "./data";
import { eyebrowClass, fontDisplay } from "./styles";

export function ArchiveSection() {
  return (
    <section className="min-h-svh bg-[radial-gradient(circle_at_50%_16%,rgba(198,161,91,0.09),transparent_25rem),#0a0908] px-[6vw] py-36">
      <div className="mx-auto mb-16 max-w-[46rem] text-center">
        <p className={eyebrowClass}>The Archive</p>
        <h2
          className={`${fontDisplay} my-4 text-[clamp(3rem,5.5vw,5.7rem)] font-normal leading-[0.94]`}
        >
          Written works from the inner chamber.
        </h2>
      </div>

      <div className="mx-auto grid max-w-[82rem] grid-cols-3 gap-[clamp(1.4rem,3vw,3.5rem)] max-[900px]:max-w-[34rem] max-[900px]:grid-cols-1">
        {writings.map((item, index) => (
          <motion.article
            className="relative min-h-[33rem] bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.55),transparent_16rem),linear-gradient(145deg,#d8bd85,#f0deb8_53%,#b58f54)] px-[2.2rem] pb-12 pt-[4.5rem] text-[#271a0d] shadow-[0_25px_70px_rgba(0,0,0,0.36)] [clip-path:polygon(6%_0,94%_0,100%_5%,98%_94%,93%_100%,7%_98%,0_93%,2%_6%)]"
            key={item.title}
            initial={{ opacity: 0, y: 70, rotate: index - 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15, rotate: 0 }}
            viewport={{ once: true }}
          >
            <span className="absolute left-1/2 top-[3.2rem] grid aspect-square w-[3.2rem] -translate-x-1/2 place-items-center rounded-full bg-[#6a2b18] text-[#f0d6a0] shadow-[0_0_0_0.35rem_rgba(106,43,24,0.16)]">
              <Sparkles className="size-4" />
            </span>
            <small className="mt-[3.2rem] block text-[0.58rem] uppercase tracking-[0.18em] text-[#765222]">
              {item.category}
            </small>
            <h3
              className={`${fontDisplay} my-4 mb-[1.3rem] text-[2.55rem] font-medium leading-[0.95]`}
            >
              {item.title}
            </h3>
            <p className="leading-[1.8] text-[#5f4528]">{item.excerpt}</p>
            <a
              className="absolute bottom-[2.4rem] left-[2.2rem] border-b border-[#6541178c] pb-1.5 text-[0.61rem] uppercase tracking-[0.16em] text-[#654117]"
              href="#"
            >
              Unfold the Manuscript
            </a>
          </motion.article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Button
          asChild
          size="sm"
          variant="ghost"
          className="inline-flex h-auto rounded-full border border-[#d8bd8566] bg-[#f0deb812] px-7 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#f0d6a0] transition hover:-translate-y-0.5 hover:bg-[#f0deb824] hover:text-white"
        >
          <Link href="/blogs">
            Explore More
            <ArrowRight className="ml-2 size-3.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
