// import Image from "next/image";
// import Link from "next/link";
// import { temples } from "./section-data";

// // One boundary S-curve, expressed in each column's LOCAL coords.
// // Columns are 55% wide and overlap by 10% (-ml-[10%]) so the seam
// // sits exactly at screen-center and the two halves interlock.
// //
// //   screen 0.50 -> left 0.9091 / right 0.0909   (top & bottom, centered)
// //   screen 0.55 -> left 1.0000 / right 0.1818   (bulge right, upper third)
// //   screen 0.45 -> left 0.8182 / right 0.0000   (bulge left, lower third)

// function CurveDefs() {
//   return (
//     <svg width="0" height="0" className="absolute">
//       <defs>
//         {/* Left card keeps everything LEFT of the wave */}
//         <clipPath id="sCurveLeft" clipPathUnits="objectBoundingBox">
//           <path d="M0,0 L0.9091,0 C1.0,0.33 0.8182,0.66 0.9091,1 L0,1 Z" />
//         </clipPath>

//         {/* Right card keeps everything RIGHT of the SAME wave */}
//         <clipPath id="sCurveRight" clipPathUnits="objectBoundingBox">
//           <path d="M1,0 L0.0909,0 C0.1818,0.33 0.0,0.66 0.0909,1 L1,1 Z" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

// export default function SanctuaryTempleSection() {
//   return (
//     <section className="overflow-hidden py-[70px] md:py-[100px]">
//       <CurveDefs />

//       <div className="mx-auto w-[min(1200px,92%)]">
//         <div className="text-center">
//           <h2 className="mb-[60px] text-[clamp(38px,6vw,82px)] font-medium leading-[1.05] text-[#1f1f1f]">
//             Visit The Different{" "}
//             <span className="italic text-[#b38728]">Temples</span>
//           </h2>
//         </div>
//       </div>

//       <div className="flex flex-col">
//         {temples.map((temple, index) => {
//           const imageBlock = (
//             <Link
//               href={temple.href}
//               className="group relative block h-[280px] w-full overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.12)] md:h-[500px]"
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

//           const isEven = index % 2 === 0;

//           const contentBlock = (
//             <div className="relative flex h-full items-center overflow-hidden px-6 pb-12 pt-12 md:px-[6vw]">
//               <div
//                 className={`max-w-[520px] mx-auto md:mx-0 ${
//                   isEven ? "md:-translate-x-[-70px]" : ""
//                 }`}
//               >
//                 <Link
//                   href={temple.href}
//                   className="mb-[30px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white shadow-sm"
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
//                   className="mb-5 block text-[clamp(28px,4vw,56px)] font-medium leading-[1.05] no-underline"
//                   style={{ color: temple.textColor }}
//                 >
//                   {temple.title}
//                 </Link>

//                 <p
//                   className="m-0 text-[17px] leading-[1.7] opacity-90"
//                   style={{ color: temple.textColor }}
//                 >
//                   {temple.content ||
//                     "Explore the sanctuary temple with immersive rituals, guided offerings, and sacred space for return."}
//                 </p>

//                 <Link
//                   href={temple.href}
//                   className="mt-[30px] inline-flex rounded-full px-[30px] py-[14px] font-semibold tracking-[0.02em] no-underline transition-opacity hover:opacity-90"
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

//           // alternating layout logic
//           const leftEl = index % 2 === 0 ? imageBlock : contentBlock;
//           const rightEl = index % 2 === 0 ? contentBlock : imageBlock;

//           return (
//             <div
//               className="last:border-b last:border-[rgba(31,31,31,0.15)]"
//               key={temple.title}
//             >
//               <div
//                 // className="relative flex flex-col overflow-hidden md:flex-row md:h-[500px]"
//                 style={{ backgroundColor: temple.Bgcolor }}
//                 className={`flex flex-col md:flex-row md:items-stretch ${
//                   isEven ? "" : "flex-col-reverse"
//                 } md:flex-row`}
//               >
//                 {/* Left half of the wave */}
//                 <div className="z-0 md:h-full md:w-[55%] md:overflow-hidden md:[clip-path:url(#sCurveLeft)]">
//                   {leftEl}
//                 </div>

//                 {/* Right half of the wave — overlaps so the seam is centered */}
//                 <div className="z-0 md:-ml-[10%] md:h-full md:w-[55%] md:overflow-hidden md:[clip-path:url(#sCurveRight)]">
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
