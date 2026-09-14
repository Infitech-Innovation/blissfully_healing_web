"use client";

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

const temples = [
  {
    index: "01",
    eyebrow: "Temple of",
    title: "Stillness",
    href: "/temples/stillness",
    image: "https://images.pexels.com/photos/7676886/pexels-photo-7676886.jpeg",
    overlay:
      "radial-gradient(circle at 73% 45%, rgba(247, 202, 115, 0.36), transparent 18rem), linear-gradient(115deg, #120d09, #3d2716 60%, #9e7341)",
    overlayOpacity: 0.58,
    description:
      "Enter into deep stillness and reconnect with your inner sanctuary. A place to breathe, soften and hear what has been waiting beneath the noise.",
    meta: "Stillness • Meditation • Breath",
  },
//   {
//     index: "02",
//     eyebrow: "Temple of",
//     title: "Purification",
//     href: "/temples/purification",
//     image: "https://images.pexels.com/photos/6195987/pexels-photo-6195987.jpeg",
//     overlay:
//       "radial-gradient(ellipse at 73% 26%, rgba(221, 235, 240, 0.18), transparent 20rem), repeating-linear-gradient(100deg, transparent 0 7%, rgba(255, 255, 255, 0.025) 7.2% 7.5%, transparent 7.7% 14%), linear-gradient(140deg, #0c1011, #1e2524 57%, #684d2d)",
//     overlayOpacity: 0.6,
//     description:
//       "Release, cleanse and renew through sacred rituals and practices. Let the old dissolve so your spirit can move with greater ease.",
//     meta: "Release • Renewal • Cleansing",
//   },
  {
    index: "02",
    eyebrow: "Temple of",
    title: "Return",
    href: "/temples/return",
    image: "https://images.pexels.com/photos/6559901/pexels-photo-6559901.jpeg",
    overlay:
      "radial-gradient(circle at 74% 48%, rgba(242, 196, 103, 0.33), transparent 16rem), repeating-radial-gradient(circle at 74% 48%, transparent 0 55px, rgba(242, 196, 103, 0.08) 57px 58px, transparent 60px 105px), linear-gradient(135deg, #0c0907, #27160c 60%, #754c24)",
    overlayOpacity: 0.58,
    description:
      "Return to your essence and remember who you truly are. Come home to the self beneath expectation, fear and performance.",
    meta: "Alignment • Wholeness • Truth",
  },
  {
    index: "03",
    eyebrow: "Temple of",
    title: "Voyage",
    href: "/temples/voyage",
    image: "https://images.pexels.com/photos/37180114/pexels-photo-37180114.jpeg",
    overlay:
      "radial-gradient(ellipse at 70% 68%, rgba(240, 177, 77, 0.28), transparent 17rem), linear-gradient(160deg, #070b0e, #1b2a31 55%, #835a2c)",
    overlayOpacity: 0.58,
    description:
      "Embark on a journey of exploration, growth and expansion. Move toward the horizon with curiosity, courage and trust.",
    meta: "Discovery • Growth • Transformation",
  },
  {
    index: "04",
    eyebrow: "Temple of",
    title: "Remembrance",
    href: "/temples/remembrance",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1300&q=80",
    overlay:
      "repeating-conic-gradient(from 0deg at 72% 50%, rgba(226, 180, 95, 0.08) 0 5deg, transparent 5deg 15deg), radial-gradient(circle at 72% 50%, rgba(226, 180, 95, 0.25), transparent 18rem), linear-gradient(135deg, #0c0907, #27180f 65%, #6e4927)",
    overlayOpacity: 0.6,
    description:
      "Remember the wisdom of your soul and the ancient truths within. Reconnect with the strengths, knowing and stories that shaped you.",
    meta: "Wisdom • Identity • Reconnection",
  },
//   {
//     index: "06",
//     eyebrow: "Temple of",
//     title: "Belonging",
//     href: "/temples/belonging",
//     image: "https://images.pexels.com/photos/31433821/pexels-photo-31433821.jpeg",
//     overlay:
//       "radial-gradient(circle at 73% 48%, rgba(244, 197, 103, 0.28), transparent 18rem), radial-gradient(circle at 80% 30%, rgba(77, 116, 66, 0.16), transparent 18rem), linear-gradient(135deg, #080907, #182016 62%, #6e4e27)",
//     overlayOpacity: 0.58,
//     description:
//       "Belong to yourself, to others and to the sacred whole. Healing is not a solitary path; it is a return to connection.",
//     meta: "Connection • Community • Belonging",
//   },
];

export default function TemplesSection() {
  return (
    <div className="temples-wrap text-[#f4ead7]">
      <section className="temples-head" id="temples">
        <h2>
          Six sacred spaces.
          <br />
          One <em>profound</em> journey.
        </h2>
      </section>

      {temples.map((temple, index) => (
        <section
          className={`temple-panel ${index % 2 === 1 ? "temple-reverse" : ""}`}
          key={temple.title}
          style={
            {
              "--temple-overlay": temple.overlay,
              "--temple-overlay-opacity": temple.overlayOpacity,
            } as CSSProperties
          }
        >
          <div className="temple-bg">
            <Image
              src={temple.image}
              alt=""
              fill
              sizes="100vw"
              className="temple-bg-image object-cover"
              unoptimized
            />
          </div>
          <div className="temple-content">
            <div className="temple-index">
              {temple.index}
            </div>
            <div className="temple-eyebrow">{temple.eyebrow}</div>
            <h3>{temple.title}</h3>
            <p>{temple.description}</p>
            <div className="temple-meta">{temple.meta}</div>
            <Link className="temple-btn" href={temple.href}>
              Enter Sanctuary ✦
            </Link>
          </div>
        </section>
      ))}

      <style jsx>{`
        .temples-wrap {
          --ink: #0d0b09;
          --gold: #c9a15b;
          --gold-bright: #f2cf83;
          --cream: #f4ead7;
          background: var(--ink);
          overflow: hidden;
        }

        .temples-head {
          text-align: center;
          padding: 115px 5vw 60px;
          background: #0b0a08;
        }

        .temple-eyebrow {
          color: var(--gold-bright);
          font-size: 0.67rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .temples-head h2 {
          font-size: clamp(3.4rem, 6vw, 6.5rem);
          font-weight: 400;
          line-height: 0.9;
          margin: 18px auto 0;
          max-width: 920px;
        }

        .temples-head em {
          color: var(--gold-bright);
          font-style: italic;
        }

        .temple-panel {
          align-items: center;
          border-top: 1px solid rgba(226, 180, 95, 0.12);
          display: grid;
          isolation: isolate;
          min-height: 92svh;
          overflow: hidden;
          padding: 100px 6vw;
          position: relative;
        }

        .temple-bg {
          inset: 0;
          overflow: hidden;
          position: absolute;
          z-index: -3;
        }

        :global(.temple-bg-image) {
          filter: brightness(1.18) contrast(1.2) saturate(1.08);
          opacity: 0.78;
          transform: scale(1.14);
          transform-origin: center;
        }

        .temple-bg::after {
          background: var(--temple-overlay);
          content: "";
          inset: 0;
          mix-blend-mode: multiply;
          opacity: var(--temple-overlay-opacity);
          position: absolute;
          z-index: 1;
        }

        .temple-panel::before {
          background: linear-gradient(
            90deg,
            rgba(9, 7, 5, 0.96) 0%,
            rgba(9, 7, 5, 0.74) 42%,
            rgba(9, 7, 5, 0.18) 74%,
            rgba(9, 7, 5, 0.6) 100%
          );
          content: "";
          inset: 0;
          position: absolute;
          z-index: -2;
        }

        .temple-reverse::before {
          background: linear-gradient(
            270deg,
            rgba(9, 7, 5, 0.95) 0%,
            rgba(9, 7, 5, 0.72) 42%,
            rgba(9, 7, 5, 0.16) 74%,
            rgba(9, 7, 5, 0.62) 100%
          );
        }

        .temple-panel::after {
          background: radial-gradient(
            circle at 72% 50%,
            rgba(223, 166, 75, 0.18),
            transparent 25rem
          );
          content: "";
          inset: 0;
          mix-blend-mode: screen;
          position: absolute;
          z-index: -1;
        }

        .temple-reverse::after {
          background: radial-gradient(
            circle at 28% 50%,
            rgba(223, 166, 75, 0.18),
            transparent 25rem
          );
        }

        .temple-content {
          max-width: min(560px, 90vw);
          position: relative;
          z-index: 2;
        }

        .temple-reverse .temple-content {
          margin-left: auto;
        }

        .temple-index {
          color: rgba(226, 180, 95, 0.26);
          font-size: 6.8rem;
          font-weight: 400;
          line-height: 0.75;
        }

        .temple-panel h3 {
          font-size: clamp(4rem, 7vw, 7.2rem);
          font-weight: 400;
          line-height: 0.86;
          margin: 6px 0 24px;
        }

        .temple-panel p {
          color: #d0c3b0;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.9;
          margin: 0;
          max-width: 480px;
        }

        .temple-meta {
          color: var(--gold-bright);
          font-size: 0.64rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          margin: 26px 0;
          text-transform: uppercase;
        }

        :global(.temple-btn) {
          align-items: center;
          background: rgba(17, 12, 8, 0.54);
          border: 1px solid rgba(226, 180, 95, 0.55);
          color: var(--cream);
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

        :global(.temple-btn:hover) {
          background: var(--gold);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
          color: #130d07;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .temple-panel,
          .temple-reverse {
            align-items: end;
            padding: 90px 7vw;
          }

          .temple-panel::before,
          .temple-reverse::before {
            background: linear-gradient(
              180deg,
              rgba(8, 7, 5, 0.28),
              rgba(8, 7, 5, 0.96) 73%
            );
          }

          .temple-content,
          .temple-reverse .temple-content {
            margin-left: 0;
          }

          :global(.temple-bg-image) {
            opacity: 0.68;
            transform: scale(1.22);
          }
        }

        @media (max-width: 560px) {
          .temples-head {
            padding: 92px 7vw 52px;
          }

          .temples-head h2 {
            font-size: 3.4rem;
          }

          .temple-panel h3 {
            font-size: 4rem;
          }
        }
      `}</style>
    </div>
  );
}
