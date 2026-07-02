import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-[#fffaf6] px-6 pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-[8px] border border-[#eadfd4] bg-[#f8f0e8] shadow-[0_18px_45px_rgba(63,52,44,0.08)]">
          <Image
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80"
            alt="A quiet retreat tent in nature"
            className="aspect-[4/3] h-full w-full object-cover"
            width={900}
            height={600}
            unoptimized
          />
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
            About The Retreats
          </p>
          <h2 className="mb-6 font-serif text-4xl font-semibold leading-[1.1] text-[#2f251f] md:text-6xl">
            Nature,
            <br />
            Ritual,
            <br />
            Gentle Return
          </h2>

          <div className="mb-6 flex flex-wrap gap-4 border-y border-[#eadfd4] py-5">
            {["Small Groups", "Sacred Practices", "Soft Comfort"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold uppercase tracking-widest text-[#7a6658]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mb-8 text-base leading-8 text-[#6f5c4f]">
            Each retreat is designed as a restorative pause: a place to be held,
            to listen inward, and to reconnect with your own wisdom without
            pressure or performance.
          </p>

          <button className="rounded-[8px] bg-[#8f6249] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#744d39]">
            Discover The Journey
          </button>
        </div>
      </div>
    </section>
  );
}
