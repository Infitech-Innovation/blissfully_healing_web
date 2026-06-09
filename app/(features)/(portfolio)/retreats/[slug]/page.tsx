import { stays } from "@/app/(features)/(dashboard)/user/retreats/definations";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock,
  HeartHandshake,
  Leaf,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return stays.map((retreat) => ({
    slug: retreat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const retreat = stays.find((item) => item.slug === slug);

  if (!retreat) {
    return {
      title: "Retreat Details | Blissfully Healing",
    };
  }

  return {
    title: `${retreat.name} | Blissfully Healing`,
    description: retreat.desc,
  };
}

export default async function RetreatDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const retreat = stays.find((item) => item.slug === slug);

  if (!retreat) {
    notFound();
  }

  const detailStats = [
    { icon: Clock, label: "Duration", value: retreat.duration },
    { icon: Users, label: "Group Size", value: retreat.groupSize },
    { icon: MapPin, label: "Location", value: retreat.location },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      <main className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <Link
          href="/retreats"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8f6249] transition hover:text-[#744d39]"
        >
          <ArrowLeft size={18} />
          Back to retreats
        </Link>

        <section className="relative overflow-hidden rounded-[8px] border border-[#eadfd4] bg-[#2f251f] shadow-[0_24px_70px_rgba(63,52,44,0.14)]">
          <div className="relative min-h-[520px]">
            <Image
              src={retreat.image}
              alt={retreat.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1200px, 100vw"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2f251f]/95 via-[#2f251f]/62 to-[#2f251f]/12" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2f251f]/70 to-transparent" />

            <div className="relative z-10 flex min-h-[520px] max-w-2xl flex-col justify-end px-6 py-10 md:px-10">
              <span className="mb-4 w-fit rounded-full bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8f6249] shadow-sm backdrop-blur">
                {retreat.tag}
              </span>
              <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
                {retreat.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
                {retreat.desc}
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="min-w-0">
            <div className="grid gap-4 sm:grid-cols-3">
              {detailStats.map(({ icon: Icon, label, value }) => (
                <article
                  key={label}
                  className="rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_14px_38px_rgba(63,52,44,0.07)]"
                >
                  <Icon size={20} className="mb-4 text-[#8f6249]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8f6249]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#2f251f]">
                    {value}
                  </p>
                </article>
              ))}
            </div>

            <section className="mt-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
                Retreat Details
              </p>
              <h2 className="font-serif text-4xl font-semibold text-[#2f251f] md:text-5xl">
                A Gentle Container For Return
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#6f5c4f]">
                {retreat.overview}
              </p>
            </section>

            <section className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_14px_38px_rgba(63,52,44,0.07)]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#f8f0e8]">
                    <Sparkles size={18} className="text-[#8f6249]" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#2f251f]">
                    What Is Included
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {retreat.includes.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-[#6f5c4f]">
                      <Check size={17} className="mt-0.5 shrink-0 text-[#8f6249]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[8px] border border-[#eadfd4] bg-[#f8f0e8] p-6 shadow-[0_14px_38px_rgba(63,52,44,0.07)]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white">
                    <Leaf size={18} className="text-[#8f6249]" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#2f251f]">
                    Daily Rhythm
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {retreat.rhythm.map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8f6249] text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="pt-0.5 text-sm leading-6 text-[#6f5c4f]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </section>
          </div>

          <aside className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.08)] lg:sticky lg:top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8f6249]">
              Reserve Your Place
            </p>
            <div className="mt-4 flex items-end justify-between gap-4 border-b border-[#eadfd4] pb-5">
              <p className="text-sm text-[#7a6658]">Starting from</p>
              <p className="text-2xl font-semibold text-[#2f251f]">
                {retreat.price}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {[
                { icon: CalendarDays, label: "Flexible retreat dates" },
                { icon: HeartHandshake, label: "Trauma-aware facilitation" },
                { icon: Leaf, label: "Restorative practices included" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-[#6f5c4f]">
                  <Icon size={17} className="shrink-0 text-[#8f6249]" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-7 flex w-full items-center justify-center rounded-[8px] bg-[#8f6249] px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#744d39]"
            >
              Enquire Now
            </Link>
            <p className="mt-4 text-center text-xs leading-5 text-[#7a6658]">
              A short discovery call helps us confirm the best retreat fit.
            </p>
          </aside>
        </section>
      </main>
    </div>
  );
}
