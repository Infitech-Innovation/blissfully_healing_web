"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArchiveSection } from "./ArchiveSection";
import { ArrivalSection } from "./ArrivalSection";
import { FinalPassageSection } from "./FinalPassageSection";
import { MeditationBellSection } from "./MeditationBellSection";
import { ReflectionPoolSection } from "./ReflectionPoolSection";
import { SilenceSection } from "./SilenceSection";
import { TempleHeader } from "./TempleHeader";
import { WisdomSection } from "./WisdomSection";
import { quotes, reflections } from "./data";
import { noiseBackground } from "./styles";
import { useStillnessTempleEffects } from "./useStillnessTemple";

export default function StillnessTemplePage() {
  const [quiet, setQuiet] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeReflection =
    activeVideo !== null ? reflections[activeVideo] : null;

  useStillnessTempleEffects({ quiet, soundOn, audioRef });

  useEffect(() => {
    const timer = setInterval(
      () => setQuoteIndex((i) => (i + 1) % quotes.length),
      15000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#050505] text-[#f1eadf]">
      <audio ref={audioRef} src="/audio/temple-ambience.mp3" loop />
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.035] mix-blend-screen"
        style={{ backgroundImage: noiseBackground }}
      />

      <TempleHeader
        quiet={quiet}
        soundOn={soundOn}
        onToggleSound={() => setSoundOn((value) => !value)}
      />

      <div
        className={cn(
          "transition-[filter] duration-[1200ms] ease-in-out",
          quiet && "brightness-[0.84] saturate-[0.72]"
        )}
      >
        <ArrivalSection />
        <SilenceSection />
        <ReflectionPoolSection
          activeReflection={activeReflection}
          activeVideo={activeVideo}
          onSelect={setActiveVideo}
          onClose={() => setActiveVideo(null)}
        />
        <ArchiveSection />
        <WisdomSection quoteIndex={quoteIndex} />
        <MeditationBellSection
          quiet={quiet}
          onToggleQuiet={() => setQuiet((value) => !value)}
        />
        <FinalPassageSection />
      </div>
    </main>
  );
}
