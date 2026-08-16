import { useMemo } from "react";
import { motion } from "framer-motion";
import { createParticles, eyebrowClass, fontDisplay } from "./styles";

export function ArrivalSection() {
  const particles = useMemo(() => createParticles(), []);

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[radial-gradient(circle_at_50%_43%,rgba(198,161,91,0.13),transparent_24rem),linear-gradient(#050505,#0b0907_68%,#050505)]">
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute bottom-[-5%] rounded-full bg-[#f1d79b] opacity-35 shadow-[0_0_10px_#f1d79b]"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
            }}
            animate={{ y: ["8vh", "-110vh"], scale: [0.6, 1.2] }}
            transition={{
              duration: particle.duration,
              delay: -particle.delay,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <motion.div
        className="pointer-events-none relative z-[3] mx-auto w-[min(780px,90vw)] pt-[18vh] text-center max-[620px]:pt-[16vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1.7 }}
      >
        <p className={eyebrowClass}>The Primordial Void</p>
        <p
          className={`${fontDisplay} mt-[26px] text-[clamp(1.3rem,2vw,1.8rem)] text-[#d7cbb8]`}
        >
          Silence is where healing begins.
        </p>
        <small className="mt-2.5 block text-[0.62rem] uppercase tracking-[0.2em] text-[#796f61]">
          Enter quietly.
        </small>
      </motion.div>

      <a
        className="absolute bottom-7 left-1/2 z-[4] flex -translate-x-1/2 flex-col items-center gap-2.5 text-[0.55rem] uppercase tracking-[0.18em] text-[#887d6d]"
        href="#silence"
      >
        <span className="h-[45px] w-px bg-linear-to-b from-[#c6a15b] to-transparent" />
        Continue your pilgrimage
      </a>
    </section>
  );
}
