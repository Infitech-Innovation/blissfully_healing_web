"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=600&q=80",
];

export default function DomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full pt-6 bg-white">
      {/* Inline SVG clipPath — uses objectBoundingBox so it scales with the div */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="islamicDome" clipPathUnits="objectBoundingBox">
  {/*
    Single smooth onion covering the whole box.
    0.50,0.00  → pointed finial
    curves bulge out through the shoulders (~y=0.35)
    reach full width by y≈0.75
    straight across the base.
  */}
  <path d="
    M 0.50 0.00
    C 0.30 0.04, 0.00 0.30, 0.00 0.75
    L 0.00 1.00
    L 1.00 1.00
    L 1.00 0.75
    C 1.00 0.30, 0.70 0.04, 0.50 0.00
    Z
  " />
</clipPath>

        </defs>
      </svg>

      <div
        className="relative max-w-7xl mx-auto min-h-[560px] md:min-h-[680px] bg-gradient-to-b from-[#e5c173] via-[#d4a849] to-[#b38728] text-white px-6 md:px-16 pt-40 md:pt-48 pb-16 flex items-center shadow-xl"
        style={{
          clipPath: "url(#islamicDome)",
          WebkitClipPath: "url(#islamicDome)",
        }}
      >
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
          <div className="col-span-1 md:col-span-5 flex justify-center items-center">
            <div className="relative w-56 h-56 sm:w-76 sm:h-76 rounded-full p-1 bg-white/30 backdrop-blur-sm shadow-2xl overflow-hidden">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-white drop-shadow-md">
              Learn, heal, connect, and grow.
            </h1>
            <p className="max-w-xl text-amber-50/90 text-sm sm:text-base md:text-lg leading-relaxed font-light drop-shadow-sm">
              Explore a sacred space where every detail is tuned for slow renewal,
            ritual care, and deeper connection with your own inner sanctuary. 
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />
      </div>
    </div>
  );
}
