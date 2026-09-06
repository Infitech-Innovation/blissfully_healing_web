"use client";

import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const embers = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  duration: `${8 + (index % 12)}s`,
  delay: `${-(index % 14)}s`,
  opacity: 0.15 + (index % 7) * 0.07,
}));

export default function HeroSection() {
  return (
    <section
      className={`${manrope.className} bliss-hero relative isolate grid h-screen min-h-[100svh] items-center overflow-hidden px-[5vw] py-[120px] text-[#f4ead7]`}
      id="top"
    >
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/video/walking_hb.mp4" type="video/mp4" />
      </video>

      <div className="embers" aria-hidden="true">
        {embers.map((ember) => (
          <span
            className="ember"
            key={ember.id}
            style={{
              animationDelay: ember.delay,
              animationDuration: ember.duration,
              left: ember.left,
              opacity: ember.opacity,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">A sanctuary for soul and spirit</div>
        <h1 className={cormorantGaramond.className}>
          The journey <em>home</em> begins within
        </h1>
        <div className="hero-ornament" aria-hidden="true">
          &#10022;
        </div>
        <p>
          Ancient wisdom. Modern healing. Timeless transformation.
        </p>
        <div className="hero-actions">
          <Link className="hero-btn" href="#temples">
            Begin your journey &#10022;
          </Link>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span />
        Scroll to begin
      </div>

      <style jsx>{`
        .bliss-hero {
          background:
            radial-gradient(
              circle at 68% 47%,
              rgba(229, 168, 72, 0.2),
              transparent 25rem
            ),
            linear-gradient(180deg, #1f1209 0%, #100b07 65%, #090807 100%);
        }

        .hero-video {
          filter: brightness(0.82) contrast(1.18) saturate(1.08);
          height: 100%;
          inset: 0;
          object-fit: cover;
          object-position: center;
          position: absolute;
          transform: scale(1.04);
          width: 100%;
          z-index: -4;
        }

        .bliss-hero::before {
          background: radial-gradient(
            ellipse at 72% 5%,
            rgba(255, 221, 151, 0.22),
            transparent 35%
          );
          content: "";
          inset: 0;
          position: absolute;
          z-index: -3;
        }

        .bliss-hero::after {
          background:
            linear-gradient(
              90deg,
              rgba(8, 6, 4, 0.96) 0%,
              rgba(17, 10, 5, 0.78) 37%,
              rgba(17, 10, 5, 0.26) 67%,
              rgba(8, 6, 4, 0.82) 100%
            ),
            linear-gradient(180deg, rgba(7, 6, 5, 0.1), rgba(7, 6, 5, 0.5));
          content: "";
          inset: 0;
          position: absolute;
          z-index: -2;
        }

        .embers {
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          z-index: -1;
        }

        .ember {
          animation: rise linear infinite;
          background: #f2cf83;
          border-radius: 999px;
          box-shadow: 0 0 10px #f2cf83;
          height: 3px;
          position: absolute;
          top: 0;
          width: 3px;
        }

        .hero-content {
          margin-top: 4vh;
          max-width: min(560px, 92vw);
          position: relative;
          z-index: 2;
        }

        .hero-eyebrow {
          color: #f2cf83;
          font-size: 0.67rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .hero-content h1 {
          font-size: clamp(4rem, 7.1vw, 7.6rem);
          font-weight: 400;
          line-height: 0.85;
          margin: 20px 0 26px;
        }

        .hero-content h1 em {
          color: #f2cf83;
          display: block;
          font-style: italic;
          font-weight: 400;
        }

        .hero-content p {
          color: #d6c9b6;
          font-size: 0.92rem;
          font-weight: 300;
          line-height: 1.8;
          margin: 0;
          max-width: 400px;
        }

        .hero-ornament {
          align-items: center;
          color: #c9a15b;
          display: flex;
          gap: 12px;
          margin: 25px 0;
        }

        .hero-ornament::before,
        .hero-ornament::after {
          background: linear-gradient(90deg, transparent, #c9a15b);
          content: "";
          height: 1px;
          width: 66px;
        }

        .hero-ornament::after {
          transform: scaleX(-1);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        :global(.hero-btn) {
          align-items: center;
          background: rgba(17, 12, 8, 0.54);
          border: 1px solid rgba(226, 180, 95, 0.55);
          color: #f4ead7;
          display: inline-flex;
          font-size: 0.67rem;
          font-weight: 600;
          justify-content: center;
          letter-spacing: 0.13em;
          min-height: 50px;
          padding: 15px 22px;
          text-transform: uppercase;
          transition:
            background 0.3s ease,
            box-shadow 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        :global(.hero-btn:hover) {
          background: #c9a15b;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
          color: #130d07;
          transform: translateY(-2px);
        }

        .scroll-cue {
          bottom: 24px;
          color: #c8b9a3;
          font-size: 0.58rem;
          font-weight: 500;
          left: 50%;
          letter-spacing: 0.2em;
          position: absolute;
          text-align: center;
          text-transform: uppercase;
          transform: translateX(-50%);
        }

        .scroll-cue span {
          border: 1px solid rgba(242, 207, 131, 0.55);
          border-radius: 15px;
          display: block;
          height: 36px;
          margin: 0 auto 8px;
          position: relative;
          width: 23px;
        }

        .scroll-cue span::before {
          animation: wheel 1.8s infinite;
          background: #f2cf83;
          content: "";
          height: 7px;
          left: 50%;
          position: absolute;
          top: 7px;
          transform: translateX(-50%);
          width: 2px;
        }

        @keyframes rise {
          from {
            transform: translateY(110vh) scale(0.6);
          }

          to {
            transform: translateY(-15vh) scale(1.2);
          }
        }

        @keyframes wheel {
          0% {
            opacity: 0;
            transform: translate(-50%, 0);
          }

          30% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-50%, 13px);
          }
        }

        @media (max-width: 900px) {
          .bliss-hero {
            padding-top: 145px;
          }

          .hero-video {
            filter: brightness(0.72) contrast(1.22) saturate(1.08);
            object-position: 58% center;
            transform: scale(1.08);
          }

          .bliss-hero::after {
            background: linear-gradient(
              180deg,
              rgba(8, 7, 5, 0.2),
              rgba(8, 7, 5, 0.96) 72%
            );
          }

          .hero-content {
            margin-top: 0;
          }
        }

        @media (max-width: 560px) {
          .hero-content h1 {
            font-size: 4rem;
          }

          :global(.hero-btn) {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
