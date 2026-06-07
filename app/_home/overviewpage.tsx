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
    // const hasEntered = localStorage.getItem("hasEnteredSanctuary");

    // if (hasEntered === "true") {
    //   router.replace("/homepage");
    //   return;
    // }

    const timer = setTimeout(() => setLoading(false), 700);
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

    const openTimer = setTimeout(() => openLetter(), 350);
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
    // localStorage.setItem("hasEnteredSanctuary", "true");
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
            />

            <h1 className="mt-4 font-[family-name:var(--font-great-vibes)] text-4xl text-[#d4af37]">
              Blissfully Healing
            </h1>
          </div>
        </div>
      )}

      <main className={`${styles.page} relative overflow-hidden`}>
        <section className={styles.stage}>
          <div className={styles.hero}>
            <div className="w-full">
              <p className={styles.eyebrow}>Blissfully Healing</p>

              <h1 className={styles.title}>
                A Love Letter to My Beloved
                <br />
                To you, my Beloved,
              </h1>

              <motion.div
                layout
                className={styles.letterMotionWrap}
                transition={{
                  layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {!showLetter ? (
                    <motion.div
                      key="closed-scroll"
                      className={styles.closedScroll}
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
                          className={styles.scrollImage}
                          priority
                        />
                      </motion.div>

                      <AnimatePresence>
                        {!isOpening && (
                          <motion.button
                            onClick={openLetter}
                            className={styles.openButton}
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
                      className={styles.letter}
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.99 }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src="/images/old_paper.webp"
                        alt="Old Paper"
                        loading="eager"
                        width={900}
                        height={1000}
                        className={styles.paperImage}
                      />

                      <div className={styles.paperText}>
                        <p>
                          <b className={styles.letterHeading}>
                            A Love Letter to My Beloved
                          </b>
                        </p>

                        <p className={styles.letterIntro}>
                          To you, my Beloved,
                        </p>

                        <p className="mt-2">
                          Welcome to Blissfully Healing, a sanctuary crafted for
                          those ready to reconnect with themselves. Step in as
                          you are - there&apos;s no need to fix or manage
                          anything; this is the beginning of your restoration.
                        </p>

                        <p className="mt-2">
                          Here, your search for safety ends. You&apos;ve spent
                          too long striving to &quot;fix&quot; a life that was
                          never broken. Healing isn&apos;t a task - it&apos;s a
                          frequency. Like rare stones, you shift from effort
                          into the natural power of simply being.
                        </p>

                        <p className="mt-2">
                          Your sovereignty is innate, like the geometry of the
                          heart. Growth and expansion happen when conditions are
                          right, not through forced effort. Blissfully Healing
                          honors your past shadows as grounding forces that
                          allow your spirit to rise, embracing the ease of true
                          self-sovereignty.
                        </p>
                        <p className="mt-2">
                          To guide this journey, six unique Sanctuaries have
                          been curated - each a sacred container supporting your
                          evolution at every stage:
                        </p>

                        <p className="mt-5">
                          <b className={styles.sanctuaryHeading}>
                            Our Sanctuaries
                          </b>
                        </p>

                        <ol className={styles.sanctuaryList}>
                          <li>
                            <p>
                              <b>Sanctuary of Stillness:</b> A space of
                              transcendent holding and silence. Through breath
                              and guided stillness, we clear your field to
                              reveal your center.
                            </p>
                          </li>

                          <li>
                            <p>
                              <b>Sanctuary of Belonging:</b> A sacred container
                              for shared power. Sovereign Circles - exclusive
                              cohorts limited to five individuals.
                            </p>
                          </li>

                          <li>
                            <p>
                              <b>Sanctuary of Purification:</b> A rhythmic space
                              aligned with lunar cycles with bath and oil
                              anointment rituals.
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
                              <b>Sanctuary of the Return:</b> The inner sanctum
                              for private intensive sessions and personal
                              restoration.
                            </p>
                          </li>

                          <li>
                            <p>
                              <b>Sanctuary of Remembrance:</b> A space dedicated
                              to sacred learning and rediscovery of forgotten
                              truths.
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

          <div className={styles.enterWrap}>
            <button
              onClick={handleEnterSanctuary}
              className={styles.enterButton}
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
