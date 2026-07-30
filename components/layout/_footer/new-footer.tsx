import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NewFooter() {
  return (
    <div className={manrope.className}>
      <section
        className="relative grid min-h-[80svh] place-items-center overflow-hidden bg-[#171a16] px-[7vw] py-24 text-center text-white sm:py-28"
        id="begin"
      >
        <div
          className="pointer-events-none absolute aspect-square w-[min(650px,86vw)] rounded-full border border-[#dac69c]/20 shadow-[0_0_0_90px_rgba(218,198,156,0.035),0_0_0_180px_rgba(218,198,156,0.025)]"
          aria-hidden="true"
        />

        <div className="relative max-w-[820px]">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#dac69c]">
            Your sanctuary is waiting
          </div>
          <h2 className={`${cormorantGaramond.className} my-5 text-[3.5rem] font-semibold leading-[0.9] sm:text-[5rem] lg:text-[7rem]`}>
            The journey home begins within.
          </h2>
          <p className="mx-auto mb-8 max-w-[640px] text-base leading-8 text-[#d5ccbf] sm:text-lg">
            Enter a space created to help you slow down, reconnect and move
            forward with greater clarity and intention.
          </p>
          <Link
            className="inline-flex rounded-full border border-[#dac69c] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(42,33,28,0.18)]"
            href="#"
          >
            Enter Blissfully Healing
          </Link>
        </div>
      </section>

      <footer
        className="flex flex-col justify-between gap-5 bg-[#10120f] px-[6vw] py-9 text-center text-xs text-[#c9c1b6] sm:flex-row sm:text-left"
        id="sanctuary"
      >
        <span>&copy; 2026 Blissfully Healing</span>
        <span>Healing &bull; Wisdom &bull; Transformation</span>
      </footer>
    </div>
  );
}
