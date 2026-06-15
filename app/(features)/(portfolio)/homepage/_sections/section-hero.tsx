"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=600&q=80",
];

// Dome path: slant completes ~a quarter from the top, then mostly straight sides.
const DOME_PATH =
  "M 0.50 0.00 C 0.32 0.01, 0.02 0.18, 0.00 0.25 L 0.00 1.00 L 1.00 1.00 L 1.00 0.25 C 0.98 0.18, 0.68 0.01, 0.50 0.00 Z";

// Only the top arc of the dome (no side or bottom strokes).
const DOME_TOP_PATH =
  "M 0.00 0.25 C 0.02 0.18, 0.32 0.01, 0.50 0.00 C 0.68 0.01, 0.98 0.18, 1.00 0.25";

export default function DomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full pt-6 bg-white">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="islamicDome" clipPathUnits="objectBoundingBox">
            <path d={DOME_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div
          className="relative min-h-[560px] md:min-h-[680px] bg-white text-neutral-900 px-6 md:px-16 pt-40 md:pt-48 pb-16 flex items-center shadow-xl"
          style={{
            clipPath: "url(#islamicDome)",
            WebkitClipPath: "url(#islamicDome)",
          }}
        >
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
            <div className="col-span-1 md:col-span-5 flex justify-center items-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full p-1 bg-amber-100 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-amber-950">
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.img
                      key={index}
                      src={IMAGES[index]}
                      alt={`Sand dune landscape ${index + 1}`}
                      initial={{ y: "-100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{
                        y: { type: "spring", stiffness: 50, damping: 15 },
                        opacity: { duration: 0.3 },
                      }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-7 flex flex-col justify-center text-left space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-neutral-900">
                Learn, heal, connect, and grow.
              </h1>
              <p className="max-w-xl text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                Explore a sacred space where every detail is tuned for slow
                renewal, ritual care, and deeper connection with your own inner
                sanctuary.
              </p>
            </div>
          </div>
        </div>

        {/* Gold outline that traces the same dome path on top */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={DOME_TOP_PATH}
            fill="none"
            stroke="#c9962b"
            strokeWidth={5}
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
