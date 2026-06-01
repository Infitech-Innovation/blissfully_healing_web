export function HeroAltSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-96px)] items-center overflow-hidden bg-[#2f251f]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2f251f]/95 via-[#2f251f]/60 to-[#2f251f]/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b06a]">
            Retreats For Deep Restoration
          </p>
          <h1 className="mb-6 font-serif text-5xl font-semibold leading-[1.08] text-white md:text-7xl">
            Where Stillness
            <br />
            Meets Sacred
            <br />
            Renewal
          </h1>
          <p className="mb-10 max-w-md text-base leading-8 text-white/72">
            Blissfully Healing retreats are intimate sanctuaries for slowing
            down, being held, and returning to your natural rhythm with softness
            and care.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-[8px] bg-[#8f6249] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_34px_rgba(47,37,31,0.24)] transition hover:bg-[#744d39]">
              Explore Retreats
            </button>
            <button className="rounded-[8px] border border-white/55 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/12">
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
