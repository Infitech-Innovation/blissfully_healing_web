import { BellOff, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fontDisplay } from "./styles";

export function TempleHeader({
  quiet,
  soundOn,
  onToggleMeditation,
  onToggleSound,
}: {
  quiet: boolean;
  soundOn: boolean;
  onToggleMeditation: () => void;
  onToggleSound: () => void;
}) {
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center border-b border-[#c6a15b1f] bg-[#05050573] px-[clamp(20px,4vw,64px)] py-[18px] backdrop-blur-[18px] transition duration-500 max-[900px]:grid-cols-[1fr_auto]",
        quiet
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      )}
    >
      <Link
        href="/homepage#top"
        aria-label="Go to Blissfully Healing home page"
        className="flex w-max items-center gap-2 text-[#f1d79b] transition hover:text-white"
      >
        <Image
          src="/images/bh_logo.webp"
          alt="Blissfully Healing"
          width={44}
          height={44}
          className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          priority
        />
        <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#c9bdac] sm:inline">
          Blissfully Healing
        </span>
      </Link>
      <p
        className={`${fontDisplay} text-center text-[1.1rem] tracking-[0.08em] max-[900px]:hidden`}
      >
        Temple of Stillness
        <small className="mt-[5px] block font-sans text-[0.48rem] uppercase tracking-[0.2em] text-[#82786a]">
          The Primordial Void
        </small>
      </p>
      <div className="col-start-3 flex items-center justify-self-end gap-2 max-[900px]:col-start-2 max-[520px]:gap-1">
        <Button
          size="sm"
          variant="ghost"
          className="h-9 shrink-0 gap-2 rounded-full border border-[#c6a15b38] bg-[#c6a15b0d] px-3 text-[0.58rem] uppercase tracking-[0.14em] text-[#d8c9b3] transition-colors hover:bg-[#c6a15b1f] hover:text-[#f1d79b] sm:px-4 sm:text-[0.62rem]"
          onClick={onToggleMeditation}
        >
          <BellOff className="size-3.5" />
          <span className="max-[520px]:hidden">End Meditation</span>
        </Button>
        <Button
          aria-pressed={soundOn}
          size="sm"
          variant="ghost"
          className="h-9 shrink-0 gap-2 rounded-full border border-[#c6a15b38] bg-[#c6a15b0d] px-3 text-[0.58rem] uppercase tracking-[0.14em] text-[#d8c9b3] transition-colors hover:bg-[#c6a15b1f] hover:text-[#f1d79b] sm:px-4 sm:text-[0.62rem]"
          onClick={onToggleSound}
        >
          {soundOn ? (
            <Volume2 className="size-3.5" />
          ) : (
            <VolumeX className="size-3.5" />
          )}
          <span className="max-[520px]:hidden">
            {soundOn ? "Sound On" : "Sound Off"}
          </span>
        </Button>
      </div>
    </header>
  );
}
