"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "motion/react";
import styles from "@/styles/overview.module.css";

gsap.registerPlugin(useGSAP);

export default function HomeOverviewPage() {
  const router = useRouter();
  const autoOpenStarted = useRef(false);
  const introPlayed = useRef(false);
  const rootRef = useRef<HTMLElement | null>(null);
  const letterWrapRef = useRef<HTMLDivElement | null>(null);
  const closedScrollRef = useRef<HTMLDivElement | null>(null);
  const openButtonRef = useRef<HTMLButtonElement | null>(null);
  const letterRef = useRef<HTMLDivElement | null>(null);
  const paperTextRef = useRef<HTMLDivElement | null>(null);
  const openingTimeline = useRef<gsap.core.Timeline | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const [loading, setLoading] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useGSAP(
    () => {
      gsap.set(letterRef.current, {
        autoAlpha: 0,
        pointerEvents: "none",
        transformOrigin: "top center",
        y: 26,
        scale: 0.94,
        rotationX: -12,
      });

      gsap.set(paperTextRef.current, {
        autoAlpha: 0,
        y: 14,
      });

      gsap.set(closedScrollRef.current, {
        autoAlpha: 0,
        y: -130,
        scale: 0.86,
        rotate: -8,
      });

      if (letterWrapRef.current && closedScrollRef.current) {
        gsap.set(letterWrapRef.current, {
          height: closedScrollRef.current.offsetHeight,
        });
      }
    },
    { scope: rootRef },
  );

  useGSAP(
    () => {
      if (loading || introPlayed.current || shouldReduceMotion) {
        return;
      }

      introPlayed.current = true;

      gsap.to(closedScrollRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 0.95,
        ease: "power3.out",
      });
    },
    { dependencies: [loading, shouldReduceMotion], scope: rootRef },
  );

  const openLetter = useCallback(() => {
    if (hasOpened || isOpening) {
      return;
    }

    if (shouldReduceMotion) {
      setHasOpened(true);
      gsap.set(letterWrapRef.current, {
        height: letterRef.current?.offsetHeight ?? "auto",
      });
      gsap.set(closedScrollRef.current, { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(letterRef.current, {
        autoAlpha: 1,
        pointerEvents: "auto",
        y: 0,
        scale: 1,
        rotationX: 0,
      });
      gsap.set(paperTextRef.current, { autoAlpha: 1, y: 0 });
      return;
    }

    setIsOpening(true);
    openingTimeline.current?.kill();

    const closedHeight = closedScrollRef.current?.offsetHeight ?? 360;
    const letterHeight = letterRef.current?.offsetHeight ?? closedHeight;

    openingTimeline.current = gsap
      .timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          setHasOpened(true);
          setIsOpening(false);
          openingTimeline.current = null;
        },
      })
      .to(openButtonRef.current, {
        autoAlpha: 0,
        y: 12,
        scale: 0.96,
        duration: 0.22,
        ease: "power2.out",
      })
      .to(
        closedScrollRef.current,
        {
          autoAlpha: 0,
          y: 34,
          scale: 0.92,
          rotate: 0,
          duration: 0.5,
          ease: "power2.inOut",
          pointerEvents: "none",
        },
        "-=0.04",
      )
      .to(
        letterWrapRef.current,
        {
          height: letterHeight,
          duration: 1.05,
          ease: "expo.out",
        },
        "-=0.2",
      )
      .set(letterRef.current, { pointerEvents: "auto" }, "-=0.1")
      .to(
        letterRef.current,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.05,
          ease: "expo.out",
        },
        "-=0.18",
      )
      .to(
        paperTextRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          ease: "power2.out",
        },
        "-=0.46",
      );

    return () => {
      openingTimeline.current?.kill();
      setIsOpening(false);
    };
  }, [hasOpened, isOpening, shouldReduceMotion]);

  useEffect(() => {
    const updateWrapHeight = () => {
      const target = hasOpened ? letterRef.current : closedScrollRef.current;

      if (letterWrapRef.current && target) {
        gsap.set(letterWrapRef.current, { height: target.offsetHeight });
      }
    };

    updateWrapHeight();
    window.addEventListener("resize", updateWrapHeight);

    return () => window.removeEventListener("resize", updateWrapHeight);
  }, [hasOpened]);

  useEffect(() => {
    // const hasEntered = localStorage.getItem("hasEnteredSanctuary");

    // if (hasEntered === "true") {
    //   router.replace("/homepage");
    //   return;
    // }

    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (hasOpened || isOpening || autoOpenStarted.current) {
      return;
    }

    autoOpenStarted.current = true;

    const openTimer = setTimeout(() => openLetter(), 350);
    return () => clearTimeout(openTimer);
  }, [hasOpened, isOpening, loading, openLetter]);

  useEffect(() => {
    return () => {
      openingTimeline.current?.kill();
    };
  }, []);

  const handleEnterSanctuary = () => {
    // localStorage.setItem("hasEnteredSanctuary", "true");
    router.replace("/homepage");
  };

  return (
    <>
      {loading && (
        <div data-testid="loading-overlay" className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d0d]">
          <div className="text-center">
            <Image
              src="/images/bh_logo.webp"
              alt="Blissfully Healing"
              width={170}
              height={170}
              className="mx-auto animate-pulse"
            />

            <h1 className="mt-4 font-[family-name:var(--font-moriah-riona)] text-4xl text-[#d4af37]">
              Blissfully Healing
            </h1>
          </div>
        </div>
      )}

      <main ref={rootRef} className={`${styles.page} relative overflow-hidden`}>
        <section className={styles.stage}>
          <div className={styles.hero}>
            <div className="w-full">
              <p className={styles.eyebrow}>Blissfully Healing</p>

              <h1 className={styles.title}>
                A Love Letter to My Beloved
                <br />
                To you, my Beloved,
              </h1>

              <div ref={letterWrapRef} className={styles.letterMotionWrap}>
                <div ref={closedScrollRef} className={styles.closedScroll}>
                  <div className="relative z-10">
                    <Image
                      src="/images/newscroll.webp"
                      alt="Letter Scroll"
                      width={320}
                      height={320}
                      className={styles.scrollImage}
                      priority
                    />
                  </div>

                  {!hasOpened && (
                    <button
                      ref={openButtonRef}
                      onClick={openLetter}
                      className={styles.openButton}
                      disabled={isOpening}
                    >
                      Open Letter
                    </button>
                  )}
                </div>

                <div ref={letterRef} className={styles.letter}>
                  <Image
                    src="/images/old_paper.webp"
                    alt="Old Paper"
                    loading="eager"
                    width={900}
                    height={1000}
                    className={styles.paperImage}
                  />

                  <div ref={paperTextRef} className={styles.paperText}>
                    <p>
                      <b className={styles.letterHeading}>
                        A Love Letter to My Beloved
                      </b>
                    </p>

                    <p className={styles.letterIntro}>To you, my Beloved,</p>

                    <p className="mt-2">
                      Welcome to Blissfully Healing, a sanctuary crafted for
                      those ready to reconnect with themselves. Step in as you
                      are - there&apos;s no need to fix or manage anything; this
                      is the beginning of your restoration.
                    </p>

                    <p className="mt-2">
                      Here, your search for safety ends. You&apos;ve spent too
                      long striving to &quot;fix&quot; a life that was never
                      broken. Healing isn&apos;t a task - it&apos;s a frequency.
                      Like rare stones, you shift from effort into the natural
                      power of simply being.
                    </p>

                    <p className="mt-2">
                      Your sovereignty is innate, like the geometry of the
                      heart. Growth and expansion happen when conditions are
                      right, not through forced effort. Blissfully Healing honors
                      your past shadows as grounding forces that allow your
                      spirit to rise, embracing the ease of true
                      self-sovereignty.
                    </p>
                    <p className="mt-2">
                      To guide this journey, six unique Sanctuaries have been
                      curated - each a sacred container supporting your evolution
                      at every stage:
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
                          transcendent holding and silence. Through breath and
                          guided stillness, we clear your field to reveal your
                          center.
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>Sanctuary of Belonging:</b> A sacred container for
                          shared power. Sovereign Circles - exclusive cohorts
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
                </div>
              </div>
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
