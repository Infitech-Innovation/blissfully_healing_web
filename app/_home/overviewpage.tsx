"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "../styles/overview.module.css";

export default function HomeOverviewPage() {
  const router = useRouter();
  const autoOpenStarted = useRef(false);
  const openingTimeout = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const [loading, setLoading] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const openLetter = useCallback(() => {
    if (showLetter || isOpening) {
      return;
    }

    if (shouldReduceMotion) {
      setShowLetter(true);
      return;
    }

    setIsOpening(true);

    openingTimeout.current = window.setTimeout(() => {
      setShowLetter(true);
      setIsOpening(false);
    }, 650);

    return () => {
      if (openingTimeout.current) {
        window.clearTimeout(openingTimeout.current);
      }
    };
  }, [isOpening, shouldReduceMotion, showLetter]);

  useEffect(() => {
    const hasEntered = localStorage.getItem("hasEnteredSanctuary");

    if (hasEntered === "true") {
      router.replace("/homepage");
      return;
    }

    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (showLetter || isOpening || autoOpenStarted.current) {
      return;
    }

    autoOpenStarted.current = true;

    const openTimer = setTimeout(() => openLetter(), 700);
    return () => clearTimeout(openTimer);
  }, [isOpening, loading, openLetter, showLetter]);

  useEffect(() => {
    return () => {
      if (openingTimeout.current) {
        window.clearTimeout(openingTimeout.current);
      }
    };
  }, []);

  const handleEnterSanctuary = () => {
    localStorage.setItem("hasEnteredSanctuary", "true");
    router.replace("/homepage");
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d0d]">
          <div className="text-center">
            <Image
              src="/images/bh_logo.webp"
              alt="Blissfully Healing"
              width={170}
              height={170}
              className="mx-auto animate-pulse"
              priority
            />

            <h1 className="mt-4 font-[family-name:var(--font-great-vibes)] text-4xl text-[#d4af37]">
              Blissfully Healing
            </h1>
          </div>
        </div>
      )}

      <main className={`${styles.page} relative overflow-hidden`}>
        <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-12 sm:px-8 lg:px-10">
          <div className="flex flex-1 items-center justify-center text-center">
            <div className="w-full">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#e7c768]">
                Blissfully Healing
              </p>

              <h1 className="font-serif text-4xl leading-tight text-white drop-shadow-[0_0_18px_rgba(255,220,120,0.58)] md:text-6xl">
                A Love Letter to My Beloved
                <br />
                To you, my Beloved,
              </h1>

              <motion.div
                layout
                className="mx-auto mt-8 w-full"
                transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {!showLetter ? (
                    <motion.div
                    key="closed-scroll"
                    className="relative mx-auto min-h-[360px] w-full max-w-[440px]"
                    initial={{ opacity: 0, y: -130, scale: 0.86, rotate: -8 }}
                    animate={
                      isOpening
                        ? { opacity: 0, y: 8, scale: 0.98, rotate: 0 }
                        : { opacity: 1, y: 0, scale: 1, rotate: 0 }
                    }
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div className="relative z-10">
                      <Image
                        src="/images/newscroll.webp"
                        alt="Letter Scroll"
                        width={320}
                        height={320}
                        className="mx-auto w-[220px] drop-shadow-[0_34px_42px_rgba(0,0,0,0.42)] md:w-[280px] lg:w-[320px]"
                        priority
                      />
                    </motion.div>

                    <AnimatePresence>
                      {!isOpening && (
                        <motion.button
                          onClick={openLetter}
                          className="mt-5 rounded-full border border-[#f4d36f] bg-[#d4af37] px-8 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#09220e] shadow-[0_18px_42px_rgba(0,0,0,0.32)] transition hover:bg-[#fff1c2] hover:shadow-[0_0_0_4px_rgba(210,175,55,0.25),0_18px_42px_rgba(0,0,0,0.32)]"
                          exit={{ opacity: 0, y: 12, scale: 0.96 }}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Open Letter
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  ) : (
                    <motion.div
                  key="open-letter"
                  className={`${styles.letter} relative mx-auto mt-12 w-full max-w-[920px]`}
                  initial={{ opacity: 0, y: 10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.99 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/images/old_paper.webp"
                    alt="Old Paper"
                    width={900}
                    height={1000}
                    className="h-auto min-h-[640px] w-full object-fill sm:min-h-0"
                  />

                  <div
                    className={`${styles.paperText} absolute left-1/2 top-[8.5%] max-h-[82%] w-[86%] -translate-x-1/2 overflow-y-auto px-1 text-center text-[0.9rem] leading-6 text-[#2c1d0e] sm:top-[10%] sm:w-[82%] sm:text-base sm:leading-7 lg:top-[12%] lg:w-[78%] lg:text-lg lg:leading-8`}
                  >
                    <p>
                      <b
                        className={`${styles.letterHeading} mt-3 block text-[1.7rem] font-normal leading-none sm:mt-5 sm:text-[2.15rem] lg:mt-7 lg:text-[2.65rem]`}
                      >
                        A Love Letter to My Beloved
                      </b>
                    </p>

                    <p
                      className={`${styles.letterIntro} mt-3 text-[1.35rem] leading-none sm:text-[1.65rem] lg:text-[1.95rem]`}
                    >
                      To you, my Beloved,
                    </p>

                    <p className="mt-2">
                      Welcome to Blissfully Healing, a sanctuary crafted for
                      those ready to reconnect with themselves. Step in as you
                      are—there’s no need to fix or manage anything; this is the
                      beginning of your restoration.
                    </p>

                    <p className="mt-2">
                      Here, your search for safety ends. You&apos;ve spent too
                      long striving to `fix` a life that was never broken.
                      Healing isn&apos;t a task—it&apos;s a frequency. Like rare
                      stones, you shift from effort into the natural power of
                      simply being.
                    </p>

                    <p className="mt-2">
                      Your sovereignty is innate, like the geometry of the
                      heart. Growth and expansion happen when conditions are
                      right, not through forced effort. Blissfully Healing
                      honors your past shadows as grounding forces that allow
                      your spirit to rise, embracing the ease of true
                      self-sovereignty.
                    </p>
                    <p className="mt-2">
                      To guide this journey, six unique Sanctuary have been
                      curated—each a sacred container supporting your evolution
                      at every stage:
                    </p>

                    <p className="mt-5">
                      <b
                        className={`${styles.sanctuaryHeading} text-[1.45rem] font-normal sm:text-[1.8rem] lg:text-[2.15rem]`}
                      >
                        Our Sanctuaries
                      </b>
                    </p>

                    {/* <ol className="mx-auto mt-3 max-w-[760px] list-disc space-y-2 pl-6 text-left font-sans text-[0.78rem] leading-5 tracking-normal sm:text-sm sm:leading-6 lg:text-base">
                      <li>
                        <b>Sanctuary of Stillness:</b> A space of transcendent
                        holding and silence.
                      </li>
                      <li>
                        <b>Sanctuary of Belonging:</b> Sovereign Circles limited
                        to five individuals.
                      </li>
                      <li>
                        <b>Sanctuary of Purification:</b> A rhythmic space
                        aligned with lunar cycles.
                      </li>
                      <li>
                        <b>Sanctuary of Voyage:</b> Rare international retreats
                        from Bali to Egypt.
                      </li>
                      <li>
                        <b>Sanctuary of the Return:</b> Private intensive
                        sessions and restoration.
                      </li>
                      <li>
                        <b>Sanctuary of Remembrance:</b> Sacred learning and
                        rediscovery.
                      </li>
                    </ol> */}
                    <ol className="mx-auto mt-3 max-w-[760px] list-disc space-y-2 pl-6 text-left text-[0.78rem] leading-5 tracking-normal sm:text-sm sm:leading-6 lg:text-base">
                      <li>
                        <p>
                          <b>Sanctuary of Stillness:</b> A space of transcendent
                          holding and silence. Through breath and guided
                          stillness, we clear your field to reveal your center.
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>Sanctuary of Belonging:</b> A sacred container for
                          shared power. Sovereign Circles—exclusive cohorts
                          limited to five individuals.
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>Sanctuary of Purification:</b> A rhythmic space
                          aligned with lunar cycles with bath and oil anointment
                          rituals.
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>Sanctuary of Voyage:</b> Rare international
                          retreats from Bali to Egypt designed for somatic
                          expansion.
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>Sanctuary of the Return:</b> The inner sanctum for
                          private intensive sessions and personal restoration.
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>Sanctuary of Remembrance:</b> A space dedicated to
                          sacred learning and rediscovery of forgotten truths.
                        </p>
                      </li>
                    </ol>
                  </div>
                </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          <div className="flex min-h-[28vh] items-center justify-center pb-10 pt-12">
            <button
              onClick={handleEnterSanctuary}
              className="flex h-[148px] w-[148px] items-center justify-center rounded-full border-4 border-[#d4af37] bg-[#09220e]/95 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#d4af37] shadow-[0_22px_52px_rgba(0,0,0,0.36)] transition hover:scale-105 hover:bg-[#d4af37] hover:text-[#09220e] hover:shadow-[0_0_25px_rgba(210,180,80,0.5)]"
            >
              Enter
              <br />
              Sanctuary
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
