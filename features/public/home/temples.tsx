import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { CSSProperties } from "react";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const temples = [
  {
    number: "I",
    name: "Temple of Stillness",
    href: "/temples/stillness",
    romanColor: "#111111",
    accent: "#b99a60",
    image:
      "https://images.pexels.com/photos/7676886/pexels-photo-7676886.jpeg",
    description:
      "The Primordial Void: depth and the inner shadow. A sacred pause from the noise of the world, inviting breath, stillness, and the quiet awareness needed to begin healing.",
    meta: "Black & Gold • YouTube • Written Work",
  },
  {
    number: "II",
    name: "Temple of Purification",
    href: "/temples/purification",
    romanColor: "#8a6a4d",
    accent: "#c9b98f",
    image:
      "https://images.pexels.com/photos/6195987/pexels-photo-6195987.jpeg",
    description:
      "Purity: fluid release and the ritual of water. A place of cleansing and renewal, created to support the release of emotional weight and old patterns.",
    meta: "White Silk Bubu • Moon Rituals • Cleansing",
  },
  {
    number: "III",
    name: "Temple of Return",
    href: "/temples/return",
    romanColor: "#d4af37",
    accent: "#b8872c",
    image:
      "https://images.pexels.com/photos/6559901/pexels-photo-6559901.jpeg",
    description:
      "Alchemical Love: radiance and golden intimacy. A return to the self beneath expectation, fear, and performance.",
    meta: "Gold Pleated Dress • 1:1 Intensive Sessions • Radiance",
  },
  {
    number: "IV",
    name: "Temple of Voyage",
    href: "/temples/voyage",
    romanColor: "#047857",
    accent: "#0f766e",
    image:
      "https://images.pexels.com/photos/37180114/pexels-photo-37180114.jpeg",
    description:
      "Vital Growth: lush horizons and new frontiers. A journey through growth, discovery, courage, and the unfolding path toward a new way of being.",
    meta: "Emerald Green Velvet • Retreats • Transformation",
  },
  {
    number: "V",
    name: "Temple of Remembrance",
    href: "/temples/remembrance",
    romanColor: "#6d28d9",
    accent: "#8b5cf6",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1300&q=80",
    description:
      "Sovereign Lineage: ancestry and spiritual memory. A space to remember the wisdom already held within and the forgotten strengths that guide the soul home.",
    meta: "Purple & Gold Cape • Courses • Spiritual Memory",
  },
  {
    number: "VI",
    name: "Temple of Belonging",
    href: "/temples/belonging",
    romanColor: "#1d4ed8",
    accent: "#2563eb",
    image:
      "https://images.pexels.com/photos/31433821/pexels-photo-31433821.jpeg",
    description:
      "Cosmic Depth: connection through the vastness of the shared soul. A sanctuary of acceptance, community, and shared humanity.",
    meta: "Royal Blue & Gold Bubu • Connection • Community",
  },
];

export default function Temples() {
  return (
    <div className={`${manrope.className} bg-[#fbf7ef] text-[#2a211c]`}>
      <section
        className="mx-auto max-w-[1100px] px-[6vw] pb-16 pt-28 text-center md:pb-20 md:pt-32"
        id="journey"
      >
        <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#b99a60]">
          The path inward
        </div>
        <h2
          className={`${cormorantGaramond.className} mx-auto mt-4 max-w-[950px] text-[3rem] font-semibold leading-[0.98] md:text-[5.8rem]`}
        >
          Six temples. One transformative return to self.
        </h2>
        <p className="mx-auto mt-5 max-w-[710px] text-base leading-8 text-[#6e5e54] md:text-lg">
          Each temple is a chapter in the healing journey, designed to guide
          visitors from stillness and reflection toward wisdom, transformation
          and renewal.
        </p>
      </section>

      <section
        className="mx-auto w-[min(1220px,90vw)] pb-8 md:pb-16"
        id="temples"
      >
        {temples.map((temple, index) => {
          const reverse = index % 2 === 1;

          return (
            <article
              className={`grid min-h-[80vh] items-center gap-8 border-t border-[#b99a60]/25 py-8 md:h-[80vh] md:min-h-0 md:gap-[4vw] md:py-10 ${reverse
                  ? "md:grid-cols-[1.15fr_0.85fr]"
                  : "md:grid-cols-[0.85fr_1.15fr]"
                }`}
              key={temple.name}
            >
              <div className={reverse ? "md:order-2" : ""}>
                <div
                  className={`${cormorantGaramond.className} text-[4rem] font-semibold leading-none opacity-20 md:text-[4.5rem]`}
                  style={{ color: temple.romanColor }}
                >
                  {temple.number}
                </div>
                <h3
                  className={`${cormorantGaramond.className} -mt-4 max-w-[660px] text-[3rem] font-semibold leading-[0.95] md:text-[4.8rem]`}
                >
                  {temple.name}
                </h3>
                <p className="mt-4 max-w-[560px] text-base leading-7 text-[#6b5a50] md:text-[1.05rem]">
                  {temple.description}
                </p>
                <div
                  className="mt-6 text-[0.72rem] font-bold uppercase tracking-[0.28em]"
                  style={{ color: temple.accent }}
                >
                  {temple.meta}
                </div>
                <Link
                  href={temple.href}
                  className="mt-6 inline-flex w-full max-w-[560px] justify-center rounded-full border border-[var(--temple-roman)] bg-[var(--temple-roman)] px-8 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_42px_color-mix(in_srgb,var(--temple-roman)_22%,transparent)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--temple-roman)_88%,black)] hover:shadow-[0_24px_56px_color-mix(in_srgb,var(--temple-roman)_34%,transparent)]"
                  style={{
                    "--temple-roman": temple.romanColor,
                  } as CSSProperties}
                >
                  Visit Temple
                </Link>
              </div>

              <Link
                href={temple.href}
                className={`group relative block min-h-[420px] overflow-hidden rounded-t-[220px] rounded-b-[28px] border border-[#b99a60]/35 bg-[#171a16] md:h-full md:min-h-0 md:rounded-t-[220px] ${reverse ? "md:order-1" : ""
                  }`}
                style={{
                  boxShadow: `0 30px 80px color-mix(in srgb, ${temple.romanColor} 22%, transparent)`,
                }}
                aria-label={`Visit ${temple.name}`}
              >
                <Image
                  src={temple.image}
                  alt={temple.name}
                  fill
                  sizes="(min-width: 768px) 46vw, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,26,22,0.08),rgba(23,26,22,0.42))]" />
                <div className="absolute inset-x-[15%] bottom-0 h-[74%] rounded-t-[180px] border border-b-0 border-[#dac69c]/45" />
                <div className="absolute left-1/2 top-[8%] h-[85%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#dac69c] to-transparent opacity-70" />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}




// import Image from "next/image";
// import Link from "next/link";
// import { Cormorant_Garamond, Manrope } from "next/font/google";
// import type { CSSProperties } from "react";

// const cormorantGaramond = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
// });

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const temples = [
//   {
//     number: "I",
//     name: "Temple of Stillness",
//     href: "/temples/stillness",
//     romanColor: "#111111",
//     accent: "#b99a60",
//     image:
//       "https://images.pexels.com/photos/7676886/pexels-photo-7676886.jpeg",
//     description:
//       "The Primordial Void: depth and the inner shadow. A sacred pause from the noise of the world, inviting breath, stillness, and the quiet awareness needed to begin healing.",
//     meta: "Black & Gold • YouTube • Written Work",
//   },
//   {
//     number: "II",
//     name: "Temple of Purification",
//     href: "/temples/purification",
//     romanColor: "#8a6a4d",
//     accent: "#c9b98f",
//     image:
//       "https://images.pexels.com/photos/6195987/pexels-photo-6195987.jpeg",
//     description:
//       "Purity: fluid release and the ritual of water. A place of cleansing and renewal, created to support the release of emotional weight and old patterns.",
//     meta: "White Silk Bubu • Moon Rituals • Cleansing",
//   },
//   {
//     number: "III",
//     name: "Temple of Return",
//     href: "/temples/return",
//     romanColor: "#d4af37",
//     accent: "#b8872c",
//     image:
//       "https://images.pexels.com/photos/6559901/pexels-photo-6559901.jpeg",
//     description:
//       "Alchemical Love: radiance and golden intimacy. A return to the self beneath expectation, fear, and performance.",
//     meta: "Gold Pleated Dress • 1:1 Intensive Sessions • Radiance",
//   },
//   {
//     number: "IV",
//     name: "Temple of Voyage",
//     href: "/temples/voyage",
//     romanColor: "#047857",
//     accent: "#0f766e",
//     image:
//       "https://images.pexels.com/photos/37180114/pexels-photo-37180114.jpeg",
//     description:
//       "Vital Growth: lush horizons and new frontiers. A journey through growth, discovery, courage, and the unfolding path toward a new way of being.",
//     meta: "Emerald Green Velvet • Retreats • Transformation",
//   },
//   {
//     number: "V",
//     name: "Temple of Remembrance",
//     href: "/temples/remembrance",
//     romanColor: "#6d28d9",
//     accent: "#8b5cf6",
//     image:
//       "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1300&q=80",
//     description:
//       "Sovereign Lineage: ancestry and spiritual memory. A space to remember the wisdom already held within and the forgotten strengths that guide the soul home.",
//     meta: "Purple & Gold Cape • Courses • Spiritual Memory",
//   },
//   {
//     number: "VI",
//     name: "Temple of Belonging",
//     href: "/temples/belonging",
//     romanColor: "#1d4ed8",
//     accent: "#2563eb",
//     image:
//       "https://images.pexels.com/photos/31433821/pexels-photo-31433821.jpeg",
//     description:
//       "Cosmic Depth: connection through the vastness of the shared soul. A sanctuary of acceptance, community, and shared humanity.",
//     meta: "Royal Blue & Gold Bubu • Connection • Community",
//   },
// ];

// export default function Temples() {
//   return (
//     <div className={`${manrope.className} bg-[#fbf7ef] text-[#2a211c]`}>
//       <section
//         className="mx-auto max-w-[1100px] px-[6vw] pb-16 pt-28 text-center md:pb-20 md:pt-32"
//         id="journey"
//       >
//         <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#b99a60]">
//           The path inward
//         </div>
//         <h2
//           className={`${cormorantGaramond.className} mx-auto mt-4 max-w-[950px] text-[3rem] font-semibold leading-[0.98] md:text-[5.8rem]`}
//         >
//           Six temples. One transformative return to self.
//         </h2>
//         <p className="mx-auto mt-5 max-w-[710px] text-base leading-8 text-[#6e5e54] md:text-lg">
//           Each temple is a chapter in the healing journey, designed to guide
//           visitors from stillness and reflection toward wisdom, transformation
//           and renewal.
//         </p>
//       </section>

//       <section
//         className="mx-auto w-[min(1220px,90vw)] pb-8 md:pb-16"
//         id="temples"
//       >
//         {temples.map((temple, index) => {
//           const reverse = index % 2 === 1;

//           return (
//             <article
//               className={`grid min-h-[580px] items-center gap-10 border-t border-[#b99a60]/25 py-8 md:gap-[5vw] md:py-16 ${
//                 reverse
//                   ? "md:grid-cols-[1.15fr_0.85fr]"
//                   : "md:grid-cols-[0.85fr_1.15fr]"
//               }`}
//               key={temple.name}
//             >
//               <div className={reverse ? "md:order-2" : ""}>
//                 <div
//                   className={`${cormorantGaramond.className} text-[5rem] font-semibold leading-none opacity-20`}
//                   style={{ color: temple.romanColor }}
//                 >
//                   {temple.number}
//                 </div>
//                 <h3
//                   className={`${cormorantGaramond.className} -mt-5 max-w-[660px] text-[3rem] font-semibold leading-[0.95] md:text-[5.5rem]`}
//                 >
//                   {temple.name}
//                 </h3>
//                 <p className="mt-5 max-w-[560px] text-base leading-8 text-[#6b5a50] md:text-lg">
//                   {temple.description}
//                 </p>
//                 <div
//                   className="mt-8 text-[0.72rem] font-bold uppercase tracking-[0.28em]"
//                   style={{ color: temple.accent }}
//                 >
//                   {temple.meta}
//                 </div>
//                 <Link
//                   href={temple.href}
//                   className="mt-8 inline-flex w-full max-w-[560px] justify-center rounded-full border border-[var(--temple-roman)] bg-[var(--temple-roman)] px-8 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_42px_color-mix(in_srgb,var(--temple-roman)_22%,transparent)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--temple-roman)_88%,black)] hover:shadow-[0_24px_56px_color-mix(in_srgb,var(--temple-roman)_34%,transparent)]"
//                   style={{
//                     "--temple-roman": temple.romanColor,
//                   } as CSSProperties}
//                 >
//                   Visit Temple
//                 </Link>
//               </div>

//               <Link
//                 href={temple.href}
//                 className={`group relative block min-h-[460px] overflow-hidden rounded-t-[240px] rounded-b-[28px] border border-[#b99a60]/35 bg-[#171a16] md:min-h-[560px] ${
//                   reverse ? "md:order-1" : ""
//                 }`}
//                 style={{
//                   boxShadow: `0 30px 80px color-mix(in srgb, ${temple.romanColor} 22%, transparent)`,
//                 }}
//                 aria-label={`Visit ${temple.name}`}
//               >
//                 <Image
//                   src={temple.image}
//                   alt={temple.name}
//                   fill
//                   sizes="(min-width: 768px) 46vw, 90vw"
//                   className="object-cover transition duration-500 group-hover:scale-105"
//                   unoptimized
//                 />
//                 <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,26,22,0.08),rgba(23,26,22,0.42))]" />
//                 <div className="absolute inset-x-[15%] bottom-0 h-[74%] rounded-t-[180px] border border-b-0 border-[#dac69c]/45" />
//                 <div className="absolute left-1/2 top-[8%] h-[85%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#dac69c] to-transparent opacity-70" />
//               </Link>
//             </article>
//           );
//         })}
//       </section>
//     </div>
//   );
// }

