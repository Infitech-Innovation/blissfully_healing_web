import { useEffect, type RefObject } from "react";
import Lenis from "lenis";

export function useStillnessTempleEffects({
  quiet,
  soundOn,
  audioRef,
}: {
  quiet: boolean;
  soundOn: boolean;
  audioRef: RefObject<HTMLAudioElement | null>;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: quiet ? 2.15 : 1.25,
      smoothWheel: true,
      wheelMultiplier: quiet ? 0.55 : 0.9,
    });
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
  }, [quiet]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (soundOn) {
      audioRef.current.volume = 0.18;
      audioRef.current.play().catch(() => undefined);
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, soundOn]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("stillness-meditation-mode", {
        detail: { active: quiet },
      })
    );

    return () => {
      window.dispatchEvent(
        new CustomEvent("stillness-meditation-mode", {
          detail: { active: false },
        })
      );
    };
  }, [quiet]);
}
