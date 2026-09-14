"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";
import Image from "next/image";

const temples = [
  ["I", "Temple of Stillness", "For the parts of you asking for quiet.", "https://images.pexels.com/photos/7676886/pexels-photo-7676886.jpeg", "/temples/stillness"],
  ["II", "Temple of Purification", "For what you are finally ready to release.", "https://images.pexels.com/photos/6195987/pexels-photo-6195987.jpeg", "/temples/purification"],
  ["III", "Temple of Return", "For the self you are ready to meet again.", "https://images.pexels.com/photos/6559901/pexels-photo-6559901.jpeg", "/temples/return"],
  ["IV", "Temple of Voyage", "For the path that asks you to move beyond the known.", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60", "/temples/voyage"],
  ["V", "Temple of Remembrance", "For what your spirit has never forgotten.", "https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?w=600&auto=format&fit=crop&q=60", "/temples/remembrance"],
];

export default function TempleSectionPage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      {/* NEW IMAGE-LED TEMPLES ON VISIBLE SILK */}
      <section id="temples" className="temples">
        <div className="silkLight silkLight1" />
        <div className="silkLight silkLight2" />
        <header>
          <p>SIX SACRED SPACES</p>
          <h2 className="text-white">Choose the place<br /><em>that is calling you.</em></h2>
          <span>Each sanctuary holds a different invitation. Enter the one that speaks to you.</span>
        </header>

        <div className="templeList">
          {temples.map((t, i) => (
            <motion.article
              key={t[1]}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .25 }}
              transition={{ duration: 1 }}
              className={i % 2 ? "reverse" : ""}
            >
              <div className="templeImage">
                <Image src={t[3]} alt={t[1]} width={200} height={200} />
                <div className="imageVeil" />
                <strong>{t[0]}</strong>
              </div>
              <div className="copy">
                <small>{t[0]} · SANCTUARY</small>
                <h3 className="text-white">{t[1]}</h3>
                <p>{t[2]}</p>
                <a href={t[4]} style={{ color: "white" }}>
                  Enter sanctuary <b>↗</b>
                </a>

              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
