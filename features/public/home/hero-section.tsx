"use client";

import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { useRef } from "react";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const petals: string[] = [];

export default function HeroSection() {
  const artifactRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const artifact = artifactRef.current;

    if (!artifact) {
      return;
    }

    const rect = artifact.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -14;

    artifact.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }

  function resetArtifact() {
    const artifact = artifactRef.current;

    if (artifact) {
      artifact.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  }

  return (
    <section
      className={`${manrope.className} bliss-hero relative isolate grid h-[85vh] place-items-center overflow-hidden px-[6vw] pb-8 text-[#2a211c]`}
      id="top"
    >
      <div className="grid w-[min(1180px,100%)] items-center gap-4 text-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:text-left">
        <div>
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-[#5b473b]">
            A private sanctuary for transformation
          </div>
          <h1
            className={`${cormorantGaramond.className} my-4 text-[3rem] font-medium leading-[0.84] tracking-[-0.035em] sm:text-[4.6rem] lg:text-[6.2rem] xl:text-[6rem]`}
          >
            Return to the wisdom within.
          </h1>
          <p className="mx-auto max-w-[630px] text-base font-light leading-[1.85] text-[#67584f] sm:text-md lg:mx-0">
            Blissfully Healing is a luxurious digital sanctuary created for
            those seeking deeper restoration, meaningful self-discovery and a
            more intentional way of living.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
            <Link
              href="#journey"
              className="rounded-full border border-[#2a211c] bg-[#2a211c] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(42,33,28,0.12)]"
            >
              Begin Your Journey
            </Link>
            <Link
              href="#temples"
              className="border-b border-[#b99a60]/40 pb-1 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-[#2a211c]"
            >
              Explore the six temples
            </Link>
          </div>
        </div>

        <div
          className="grid place-items-center [perspective:1200px]"
          aria-label="Decorative healing artifact"
          onPointerLeave={resetArtifact}
          onPointerMove={handlePointerMove}
        >
          <div
            className="relative h-[min(680px,84vw,78vh)] w-[min(640px,86vw)] transition-transform duration-200 ease-out [transform-style:preserve-3d] lg:h-[min(760px,52vw,82vh)] lg:w-[min(720px,50vw)]"
            id="artifact"
            ref={artifactRef}
          >
            <div className="bliss-ring bliss-r1" />
            <div className="bliss-ring bliss-r2" />
            <div className="bliss-ring bliss-r3" />
            <div className="bliss-lotus-real" aria-hidden="true">
              <Image
                src="/images/hero-lotus-cutout.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 86vw"
                className="bliss-lotus-image object-contain"
              />
              <span className="bliss-stem" />
              {petals.map((petal) => (
                <span
                  className={`bliss-petal ${petal}`}
                  key={petal}
                />
              ))}
              <span className="bliss-lotus-core">✦</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#76675d]">
        Scroll to enter
        <span className="mx-auto mt-3 block h-[50px] w-px bg-gradient-to-b from-[#b99a60] to-transparent" />
      </div>

      <style jsx>{`
        .bliss-hero::before {
          content: "";
          position: absolute;
          width: min(72vw, 850px);
          aspect-ratio: 1;
          border: 1px solid rgba(185, 154, 96, 0.22);
          border-radius: 999px;
          animation: bliss-spin 90s linear infinite;
          z-index: -2;
          box-shadow:
            0 0 0 80px rgba(185, 154, 96, 0.04),
            0 0 0 160px rgba(185, 154, 96, 0.025);
        }

        .bliss-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -3;
          background:
            linear-gradient(
              112deg,
              transparent 30%,
              rgba(255, 255, 255, 0.55) 43%,
              transparent 56%
            ),
            radial-gradient(circle at 72% 30%, rgba(218, 198, 156, 0.26), transparent 35%),
            #fbf7ef;
        }

        .bliss-ring {
          position: absolute;
          inset: 8%;
          border: 1px solid rgba(185, 154, 96, 0.42);
          border-radius: 999px;
          transform-style: preserve-3d;
        }

        .bliss-r1 {
          animation: bliss-orbit1 18s linear infinite;
        }

        .bliss-r2 {
          inset: 18%;
          border-color: rgba(69, 75, 60, 0.4);
          animation: bliss-orbit2 24s linear infinite reverse;
        }

        .bliss-r3 {
          inset: 29%;
          animation: bliss-orbit3 14s linear infinite;
        }

        .bliss-lotus-real {
          position: absolute;
          inset: -9% -15% -12%;
          transform: translateZ(95px) rotateY(-7deg) rotateX(2deg) scale(1.08);
          transform-origin: 50% 55%;
          transform-style: preserve-3d;
          filter:
            drop-shadow(0 34px 34px rgba(91, 71, 59, 0.26))
            drop-shadow(0 0 42px rgba(255, 132, 38, 0.3));
          animation: bliss-real-lotus-float 4.8s ease-in-out infinite;
        }

        .bliss-lotus-image {
          transform-origin: 50% 70%;
          animation: bliss-petal-bloom 4.8s ease-in-out infinite;
          will-change: transform, filter;
        }

        .bliss-lotus-real > span {
          display: none;
        }

        .bliss-lotus {
          position: absolute;
          inset: 6% 2% 0;
          filter: drop-shadow(0 34px 34px rgba(91, 71, 59, 0.22))
            drop-shadow(0 0 38px rgba(255, 132, 38, 0.26));
          transform: translateZ(80px) rotateX(5deg) rotateY(-7deg);
          transform-style: preserve-3d;
          animation: bliss-lotus-float 6s ease-in-out infinite;
        }

        .bliss-stem {
          position: absolute;
          left: 49%;
          top: 54%;
          width: 28px;
          height: 54%;
          border-radius: 999px;
          background:
            linear-gradient(90deg, rgba(37, 31, 12, 0.36), transparent 30%, rgba(255, 227, 134, 0.28) 54%, rgba(34, 28, 9, 0.38)),
            linear-gradient(180deg, #6b5b1f, #4d4018 46%, #766328);
          box-shadow:
            inset 7px 0 10px rgba(255, 239, 152, 0.16),
            12px 22px 28px rgba(42, 33, 28, 0.2);
          transform: translateX(-50%) rotate(-5deg) translateZ(-48px);
          transform-origin: 50% 0;
        }

        .bliss-petal {
          position: absolute;
          left: 50%;
          top: 36%;
          width: 170px;
          height: 310px;
          border-radius: 58% 58% 46% 46% / 70% 70% 32% 32%;
          background:
            radial-gradient(ellipse at 46% 14%, rgba(255, 245, 170, 0.92), transparent 28%),
            repeating-linear-gradient(82deg, rgba(142, 25, 17, 0.22) 0 1px, transparent 1px 10px),
            linear-gradient(145deg, #ff4b2d 0%, #ff7a33 28%, #ffd06d 68%, #e5481e 100%);
          border: 1px solid rgba(122, 30, 18, 0.3);
          box-shadow:
            inset 0 26px 30px rgba(255, 238, 154, 0.42),
            inset 18px -20px 30px rgba(117, 24, 18, 0.14),
            0 18px 32px rgba(83, 38, 21, 0.18);
          transform-origin: 50% 92%;
        }

        .bliss-petal::after {
          content: "";
          position: absolute;
          inset: 8% 17% 9%;
          border-radius: inherit;
          background:
            repeating-linear-gradient(78deg, rgba(120, 19, 19, 0.26) 0 1px, transparent 1px 15px),
            radial-gradient(ellipse at 50% 10%, rgba(255, 243, 157, 0.32), transparent 44%);
          mix-blend-mode: multiply;
          opacity: 0.58;
        }

        .back-left {
          width: 145px;
          height: 300px;
          transform: translate(-166%, -36%) rotate(-38deg) rotateY(-42deg) rotateX(12deg) translateZ(-36px);
        }

        .back-center {
          width: 155px;
          height: 350px;
          transform: translate(-61%, -54%) rotate(-7deg) rotateX(8deg) translateZ(-58px);
        }

        .back-right {
          width: 180px;
          height: 320px;
          transform: translate(3%, -42%) rotate(24deg) rotateY(28deg) translateZ(-50px);
        }

        .side-left-high {
          width: 130px;
          height: 290px;
          transform: translate(-123%, -38%) rotate(-14deg) rotateY(-34deg) translateZ(-12px);
        }

        .side-right-high {
          width: 132px;
          height: 270px;
          transform: translate(112%, -24%) rotate(54deg) rotateY(42deg) translateZ(-16px);
        }

        .side-left-wide {
          width: 145px;
          height: 375px;
          transform: translate(-204%, -7%) rotate(-70deg) rotateY(-46deg) rotateX(12deg) translateZ(10px);
        }

        .side-right-wide {
          width: 155px;
          height: 410px;
          transform: translate(83%, 6%) rotate(76deg) rotateY(48deg) rotateX(9deg) translateZ(18px);
        }

        .inner-left {
          width: 145px;
          height: 260px;
          transform: translate(-84%, -27%) rotate(-14deg) rotateY(-18deg) translateZ(42px);
        }

        .inner-center {
          width: 160px;
          height: 285px;
          transform: translate(-42%, -30%) rotate(-2deg) rotateX(-7deg) translateZ(68px);
        }

        .inner-right {
          width: 145px;
          height: 250px;
          transform: translate(7%, -20%) rotate(27deg) rotateY(16deg) translateZ(50px);
        }

        .front-center {
          width: 180px;
          height: 250px;
          border-radius: 55% 55% 50% 50% / 72% 72% 35% 35%;
          transform: translate(-50%, 1%) rotate(-14deg) rotateX(-18deg) translateZ(104px);
        }

        .front-left-low {
          width: 145px;
          height: 310px;
          transform: translate(-101%, 23%) rotate(-75deg) rotateY(-26deg) translateZ(62px);
        }

        .front-right-low {
          width: 150px;
          height: 390px;
          transform: translate(22%, 30%) rotate(70deg) rotateY(32deg) translateZ(56px);
        }

        .front-curl {
          width: 82px;
          height: 255px;
          background:
            radial-gradient(ellipse at 46% 14%, rgba(255, 245, 170, 0.9), transparent 28%),
            repeating-linear-gradient(82deg, rgba(142, 25, 17, 0.28) 0 1px, transparent 1px 9px),
            linear-gradient(145deg, #e5321f, #ff8e36 52%, #fff0a5 100%);
          transform: translate(8%, 30%) rotate(82deg) rotateY(58deg) translateZ(118px);
        }

        .bliss-lotus-core {
          position: absolute;
          left: 50%;
          top: 47%;
          z-index: 4;
          width: 96px;
          height: 78px;
          border-radius: 999px;
          background:
            radial-gradient(circle at 58% 24%, #2f4617 0 6%, transparent 7%),
            radial-gradient(circle at 42% 30%, #d9d171 0 10%, transparent 11%),
            linear-gradient(135deg, #8a8a2d, #d0c76b 38%, #6c7624);
          box-shadow:
            inset 0 12px 18px rgba(255, 255, 174, 0.34),
            0 16px 25px rgba(78, 54, 21, 0.18);
          font-size: 0;
          transform: translate(-50%, -50%) rotateX(16deg) translateZ(24px);
        }

        @keyframes bliss-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bliss-lotus-float {
          50% {
            transform: translateY(-12px) translateZ(95px) rotateX(5deg) rotateY(-4deg) rotateZ(1.5deg);
          }
        }

        @keyframes bliss-real-lotus-float {
          0%,
          100% {
            transform: translateZ(95px) rotateY(-7deg) rotateX(2deg) scale(1.08);
            filter:
              drop-shadow(0 34px 34px rgba(91, 71, 59, 0.26))
              drop-shadow(0 0 42px rgba(255, 132, 38, 0.3));
          }

          50% {
            transform: translateY(-14px) translateZ(115px) rotateY(-4deg) rotateX(2deg) rotateZ(1deg) scale(1.08);
            filter:
              drop-shadow(0 38px 38px rgba(91, 71, 59, 0.3))
              drop-shadow(0 0 58px rgba(255, 132, 38, 0.42));
          }
        }

        @keyframes bliss-petal-bloom {
          0%,
          100% {
            transform: translateY(8px) scaleX(0.94) scaleY(1.04);
            filter: brightness(0.96) saturate(0.98);
          }

          50% {
            transform: translateY(-4px) scaleX(1.08) scaleY(0.97);
            filter: brightness(1.08) saturate(1.1);
          }
        }

        @keyframes bliss-orbit1 {
          to {
            transform: rotateX(68deg) rotateZ(360deg);
          }
        }

        @keyframes bliss-orbit2 {
          to {
            transform: rotateY(68deg) rotateZ(360deg);
          }
        }

        @keyframes bliss-orbit3 {
          to {
            transform: rotateX(58deg) rotateY(35deg) rotateZ(360deg);
          }
        }

        @media (max-width: 1023px) {
          .bliss-lotus {
            inset: 8% 0 0;
            transform: translateZ(70px) rotateX(5deg) rotateY(-7deg) scale(0.86);
            transform-origin: 50% 42%;
          }

          .bliss-lotus-real {
            inset: -6% -18% -12%;
            transform: translateZ(80px) rotateY(-7deg) rotateX(2deg) scale(1);
          }

          @keyframes bliss-lotus-float {
            50% {
              transform: translateY(-10px) translateZ(80px) rotateX(5deg) rotateY(-4deg) rotateZ(1.5deg) scale(0.86);
            }
          }

          @keyframes bliss-real-lotus-float {
            0%,
            100% {
              transform: translateZ(80px) rotateY(-7deg) rotateX(2deg) scale(1);
            }

            50% {
              transform: translateY(-10px) translateZ(90px) rotateY(-4deg) rotateX(2deg) rotateZ(1deg) scale(1.07);
            }
          }

          @keyframes bliss-petal-bloom {
            0%,
            100% {
              transform: translateY(6px) scaleX(0.95) scaleY(1.03);
              filter: brightness(0.96) saturate(0.98);
            }

            50% {
              transform: translateY(-3px) scaleX(1.06) scaleY(0.98);
              filter: brightness(1.08) saturate(1.1);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bliss-hero::before,
          .bliss-ring,
          .bliss-lotus,
          .bliss-lotus-real,
          .bliss-lotus-image {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
