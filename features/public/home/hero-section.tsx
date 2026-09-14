"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="heroText">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          THE THRESHOLD · A SACRED BEGINNING
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: 1.2 }}>
          A return to the place <em>within you</em> that never left.
        </motion.h1>
        <motion.div className="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7, duration: 1.2 }}>
          Blissfully Healing is a sanctuary for reflection, restoration and the journey back to yourself.
        </motion.div>
        <a className="cta" href="#temples">Cross the threshold <span>→</span></a>
      </div>

      <div className="film">
        <video autoPlay muted loop playsInline>
          {/* <source src="/threshold-film.mp4" type="video/mp4"/> */}
          <source src="/video/walking_hb.mp4" type="video/mp4" />
        </video>
        <div className="filmFallback">
          <span>YOUR FILM</span>
          <b>Place <code>threshold-film.mp4</code> in /public</b>
        </div>
        <div className="smoke" />
      </div>
      <div className="scroll">SCROLL TO ENTER <i /></div>
    </section>
  );
}
