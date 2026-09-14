"use client";

import Image from "next/image";
import HeroSection from "./hero-section";
import SacredOrb from "./SacredOrb";
import TempleSectionPage from "./temple-section";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <Temples /> */}
      <TempleSectionPage />
      {/* ORIGINAL QUOTE SECTION */}
      <section className="quote">
        <SacredOrb />
        <motion.div className="quoteText" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.6 }}>
          <small>LIVING WISDOM</small>
          <blockquote className="text-white">
            “Healing is not becoming someone new.<br />
            <em>It is remembering who you were</em><br />
            before the world told you otherwise.”
          </blockquote>
          <span>— BLISSFULLY HEALING</span>
        </motion.div>
      </section>

      {/* ORIGINAL JOURNEY COMPOSITION, NEW PREMIUM OBJECT INSTEAD OF LOTUS */}
      <section id="journey" className="journey">
        <div>
          <Image src="/floweer.png" alt="Golden Mist" width={600} height={400} />
        </div>
        <motion.div className="journeyCopy" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
          <small>THE INNER SANCTUARY</small>
          <h2 className="text-white">The journey home<br /><em>begins within.</em></h2>
          <p>There is nowhere you need to arrive. Only somewhere within you waiting to be remembered.</p>
          <a className="cta" href="#temples">Begin your journey <span>→</span></a>
        </motion.div>
      </section>

    </div>
  );
}
