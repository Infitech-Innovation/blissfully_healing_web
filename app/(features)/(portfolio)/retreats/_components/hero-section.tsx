import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-96px)] items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=75"
        alt="Calm outdoor retreat setting"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2f251f]/60 via-[#2f251f]/50 to-[#fffaf6]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b06a]">
          Retreats & Sacred Escapes
        </p>
        <h1 className="mb-6 font-serif text-5xl font-semibold leading-[1.08] text-white md:text-7xl">
          Return To The Quiet
          <br />
          Within You
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-base leading-8 text-white/78 md:text-lg">
          Step away from noise and into a healing container shaped by nature,
          ritual, comfort, and careful emotional restoration.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-[8px] bg-[#8f6249] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_34px_rgba(47,37,31,0.24)] transition hover:bg-[#744d39]">
            Reserve A Space
          </button>
          <button className="rounded-[8px] border border-white/65 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/12">
            Explore Retreats
          </button>
        </div>
      </div>
    </section>
  );
}
