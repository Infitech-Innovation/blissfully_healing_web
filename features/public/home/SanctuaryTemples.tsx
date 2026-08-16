// import Image from "next/image";
// import Link from "next/link";
// import { temples } from "./section-data";

// // Wave centered on 50%, 5% total width (2.5% carved from each side)
// const CURVE_PATH_LEFT =
//   "M0.95,0 C0.9,0.18 1.0,0.32 0.95,0.5 C0.9,0.68 1.0,0.82 0.95,1";
// const CURVE_PATH_RIGHT =
//   "M0.05,0 C0,0.18   0.1,0.32  0.05,0.5 C0,0.68   0.1,0.82  0.05,1";

// function CurveDefs() {
//   return (
//     <svg width="0" height="0" className="absolute">
//       <defs>
//         <clipPath id="sCurveLeft" clipPathUnits="objectBoundingBox">
//           <path
//             d={`M0,0 L0.95,0 ${CURVE_PATH_LEFT.slice(CURVE_PATH_LEFT.indexOf("C"))} L0,1 Z`}
//           />
//         </clipPath>
//         <clipPath id="sCurveRight" clipPathUnits="objectBoundingBox">
//           <path
//             d={`M1,0 L0.05,0 ${CURVE_PATH_RIGHT.slice(CURVE_PATH_RIGHT.indexOf("C"))} L1,1 Z`}
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

// function CurveLine() {
//   return (
//     <svg
//       className="pointer-events-none absolute inset-0 hidden h-full w-full text-[#1f1f1f]/25 md:block"
//       viewBox="0 0 1 1"
//       preserveAspectRatio="none"
//       fill="none"
//     >
//       {/* Single guideline drawn at x=0.5 with same wave shape */}
//       <path
//         d="M0.5,0 C0.475,0.18 0.525,0.32 0.5,0.5 C0.475,0.68 0.525,0.82 0.5,1"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         vectorEffect="non-scaling-stroke"
//       />
//     </svg>
//   );
// }

// export default function SanctuaryTempleSection() {
//   return (
//     <section className="overflow-hidden bg-[#b38728] py-[70px] md:py-[100px]">
//       <CurveDefs />

//       <div className="mx-auto w-[min(1200px,92%)]">
//         <div className="text-center">
//           <h2 className="mb-[60px] text-[clamp(38px,6vw,82px)] font-medium leading-[1.05] text-[#1f1f1f]">
//             Visit The Different{" "}
//             <span className="italic text-[#fff]">Temples</span>
//           </h2>
//         </div>
//       </div>

//       <div className="flex flex-col">
//         {temples.map((temple, index) => {
//           const imageBlock = (
//             <Link
//               href={temple.href}
//               className="group relative block h-[280px] w-full overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.12)] md:h-[420px] md:flex-1"
//               style={{ clipPath: undefined }}
//             >
//               <Image
//                 src={temple.image}
//                 alt={temple.title}
//                 width={1280}
//                 height={900}
//                 className="h-full w-full object-cover transition-transform duration-[350ms] ease group-hover:scale-[1.03]"
//                 unoptimized={temple.image.startsWith("http")}
//               />
//             </Link>
//           );

//           const contentBlock = (
//             <div className="relative flex flex-1 items-start overflow-hidden px-6 pb-8 pt-10 md:px-[8vw] md:pb-20 md:pt-5">
//               <div className="max-w-[520px]">
//                 <Link
//                   href={temple.href}
//                   className="mb-[30px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white"
//                 >
//                   <Image
//                     src={temple.icon}
//                     alt="Sanctuary icon"
//                     width={54}
//                     height={54}
//                     className="h-full w-full object-contain"
//                   />
//                 </Link>

//                 <Link
//                   href={temple.href}
//                   className="mb-5 block text-[clamp(28px,4vw,56px)] leading-[1.05] no-underline"
//                   style={{ color: temple.textColor }}
//                 >
//                   {temple.title}
//                 </Link>

//                 <p
//                   className="m-0 text-[17px] leading-[1.7] text-[#666]"
//                   style={{ color: temple.textColor }}
//                 >
//                   {temple.content ||
//                     "Explore the sanctuary temple with immersive rituals, guided offerings, and sacred space for return."}
//                 </p>

//                 <Link
//                   href={temple.href}
//                   className="mt-[30px] inline-flex rounded-full px-[30px] py-[14px] font-semibold tracking-[0.02em] no-underline"
//                   style={{
//                     backgroundColor: temple.textColor,
//                     color: temple.Bgcolor,
//                   }}
//                 >
//                   Visit Temple
//                 </Link>
//               </div>
//             </div>
//           );

//           // index even -> image on left, content on right
//           // index odd  -> content on left, image on right
//           const leftEl = index % 2 === 0 ? imageBlock : contentBlock;
//           const rightEl = index % 2 === 0 ? contentBlock : imageBlock;

//           return (
//             <div
//               className="last:border-b last:border-[rgba(31,31,31,0.15)]"
//               key={temple.title}
//             >
//               <div
//                 className="relative flex flex-col overflow-hidden md:flex-row"
//                 style={{ backgroundColor: temple.Bgcolor }}
//               >
//                 <CurveLine />

//                 <div className="md:w-1/2 md:[clip-path:url(#sCurveLeft)] md:overflow-hidden">
//                   {leftEl}
//                 </div>
//                 <div className="md:w-1/2 md:[clip-path:url(#sCurveRight)] md:overflow-hidden">
//                   {rightEl}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
