import { AnimatePresence, motion } from "framer-motion";
import { quotes } from "./data";
import { eyebrowClass, fontDisplay } from "./styles";

export function WisdomSection({ quoteIndex }: { quoteIndex: number }) {
  return (
    <section className="grid min-h-svh place-content-center bg-[radial-gradient(circle_at_50%_50%,rgba(198,161,91,0.08),transparent_20rem),#050505] px-[7vw] py-32 text-center">
      <p className={eyebrowClass}>Living Wisdom</p>
      <AnimatePresence mode="wait">
        <motion.blockquote
          className={`${fontDisplay} mx-auto my-6 max-w-[70rem] text-[clamp(4rem,8vw,9rem)] font-normal leading-[0.82] tracking-[-0.045em] max-[620px]:text-[4.4rem]`}
          key={quotes[quoteIndex]}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 1.1 }}
        >
          {quotes[quoteIndex]}
        </motion.blockquote>
      </AnimatePresence>
      <small className="text-[0.58rem] tracking-[0.18em] text-[#655d52]">
        0{quoteIndex + 1} / 0{quotes.length}
      </small>
    </section>
  );
}
