import { motion } from "framer-motion";
import { fontDisplay } from "./styles";

export function SilenceSection() {
  return (
    <section
      id="silence"
      className="relative grid min-h-svh place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_10%,rgba(198,161,91,0.08),transparent_25rem),#080808] px-[6vw] py-32"
    >
      <div className="absolute bottom-0 left-[-8vw] top-[8%] w-[32vw] max-w-[32rem] rounded-t-[48%] border border-b-0 border-[#c6a15b1f]" />
      <div className="absolute bottom-0 right-[-8vw] top-[8%] w-[32vw] max-w-[32rem] rounded-t-[48%] border border-b-0 border-[#c6a15b1f]" />
      <motion.blockquote
        className={`${fontDisplay} relative z-[2] m-0 max-w-[70rem] text-center text-[clamp(3.2rem,6.8vw,7.4rem)] leading-[0.92] max-[620px]:text-[3.5rem]`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 1.4 }}
      >
        Stillness is not empty.
        <em className="mt-4 block font-normal text-[#f1d79b]">
          It is where your soul remembers itself.
        </em>
      </motion.blockquote>
    </section>
  );
}
