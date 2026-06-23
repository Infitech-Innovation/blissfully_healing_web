import { features } from "@/types/retreats.definations";
import Image from "next/image";
export function FeaturesSection() {
  return (
    <section className="bg-[#f8f0e8] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
            Why Retreat With Us
          </p>
          <h2 className="font-serif text-4xl font-semibold text-[#2f251f] md:text-5xl">
            Healing That Feels
            <br />
            Warm And Held
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_14px_38px_rgba(63,52,44,0.07)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] transition-colors duration-300 group-hover:border-[#8f6249]/50">
                  <Icon
                    size={18}
                    className="text-[#8f6249] transition-colors duration-300"
                  />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-[#2f251f]">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-[#6f5c4f]">{desc}</p>
              </article>
            ))}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.08)]">
            <Image
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&q=80"
              alt="Peaceful cabin in a forest"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/35 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
