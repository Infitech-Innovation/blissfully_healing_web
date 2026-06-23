import { stays } from "@/types/retreats.definations";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export function AccommodationsSection() {
  return (
    <section className="bg-[#fffaf6] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
              Retreat Containers
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#2f251f] md:text-5xl">
              Spaces Designed
              <br />
              For Restoration
            </h2>
          </div>
          <div className="md:max-w-xs">
            <p className="mb-4 text-sm leading-7 text-[#6f5c4f]">
              From private renewal to group sanctuary, each retreat is shaped
              for rest, emotional spaciousness, and grounded integration.
            </p>
            <Link
              href="/temples/voyage"
              className="rounded-[8px] border border-[#eadfd4] bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]"
            >
              View All Retreats
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stays.map((stay) => (
            <article
              key={stay.name}
              className="group overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white p-4 shadow-[0_18px_45px_rgba(63,52,44,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(63,52,44,0.14)]"
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[6px] bg-[#f8f0e8]">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={900}
                  height={600}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/45 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8f6249] shadow-sm backdrop-blur">
                  {stay.tag}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-[#2f251f]">
                {stay.name}
              </h3>
              <p className="mb-4 text-sm leading-6 text-[#6f5c4f]">
                {stay.desc}
              </p>
              <Link
                href={`/retreats/${stay.slug}`}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8f6249] group/btn"
              >
                View Details
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover/btn:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
