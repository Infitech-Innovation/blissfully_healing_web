"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

const posterImage =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=60";

export function VideoCTASection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!showVideo) {
      return;
    }

    videoRef.current
      ?.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [showVideo]);

  const handleToggleVideo = () => {
    const video = videoRef.current;

    if (!showVideo) {
      setShowVideo(true);
      return;
    }

    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative flex min-h-[64svh] items-center justify-center overflow-hidden bg-[#2f251f] md:min-h-[72svh]">
      {showVideo && (
        <video
          ref={videoRef}
          playsInline
          preload="none"
          poster={posterImage}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/retreat.mp4" type="video/mp4" />
        </video>
      )}

      {!showVideo && (
        <Image
          src={posterImage}
          alt="Mountain retreat at dusk"
          fill
          priority
          fetchPriority="low"
          sizes="(min-width: 1024px) 100vw, 100vw"
          className="object-cover"
          unoptimized
        />
      )}

      <div className="absolute inset-0 bg-[#2f251f]/62" />

      <div className="relative z-10 px-6 text-center">
        <button
          type="button"
          onClick={handleToggleVideo}
          className="group mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/45 bg-white/16 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/25"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause
              size={28}
              className="text-[#d8b06a] transition-transform duration-200 group-hover:scale-110"
            />
          ) : (
            <Play
              size={28}
              className="ml-1 fill-[#d8b06a] text-[#d8b06a] transition-transform duration-200 group-hover:scale-110"
            />
          )}
        </button>

        <p className="text-sm font-semibold uppercase tracking-widest text-white/75">
          {isPlaying ? "Pause Retreat Story" : "Watch Our Retreat Story"}
        </p>
      </div>
    </section>
  );
}
