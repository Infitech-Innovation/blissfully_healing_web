import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#2f251f]">
      <Image
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=75"
        alt="A peaceful healing space with soft natural light"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2f251f]/95 via-[#2f251f]/68 to-[#2f251f]/24" />
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl font-semibold leading-[1.06] text-white md:text-7xl">
            Begin With A
            <br />
            Gentle Conversation
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
            Reach out for retreat enquiries, course support, healing pathways,
            or a quiet first step toward the kind of care that fits your season.
          </p>
        </div>
      </div>
    </section>
  );
}
