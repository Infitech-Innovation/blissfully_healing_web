import { Play } from "lucide-react";
import Image from "next/image";

export function VideoCTASection() {
  // const [playing, setPlaying] = useState(false);

  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=75"
        alt="Mountain retreat at dusk"
        fill
        sizes="100vw"
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-[#2f251f]/62" />

      <div className="relative z-10 px-6 text-center">
        <button
          type="button"
          // onClick={() => setPlaying((value) => !value)}
          className="group mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/45 bg-white/16 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/25"
          aria-label="Watch retreat story"
        >
          <Play
            size={28}
            className="ml-1 fill-[#d8b06a] text-[#d8b06a] transition-transform duration-200 group-hover:scale-110"
          />
        </button>
        <p className="text-sm font-semibold uppercase tracking-widest text-white/75">
          Watch Our Retreat Story
        </p>

        {/* {playing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f251f]/92 p-6">
            <button
              type="button"
              onClick={() => setPlaying(false)}
              className="absolute right-6 top-6 text-white transition hover:text-[#d8b06a]"
              aria-label="Close video"
            >
              <X size={28} />
            </button>
            <div className="flex aspect-video w-full max-w-4xl items-center justify-center rounded-[8px] border border-[#eadfd4]/20 bg-[#3f342c]">
              <p className="text-sm text-white/55">Video player placeholder</p>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}
