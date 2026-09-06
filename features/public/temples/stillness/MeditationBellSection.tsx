import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { eyebrowClass, fontDisplay } from "./styles";

export function MeditationBellButton({
  quiet,
  onToggleQuiet,
}: {
  quiet: boolean;
  onToggleQuiet: () => void;
}) {
  return (
    <motion.button
      aria-label={
        quiet ? "Deactivate meditation mode" : "Activate meditation mode"
      }
      aria-pressed={quiet}
      className={cn(
        "relative grid aspect-square w-40 cursor-pointer place-items-center rounded-full border border-[#c6a15b59] bg-transparent text-[#f1d79b]",
        quiet && "[&>i]:scale-[1.6] [&>i]:opacity-0"
      )}
      onClick={onToggleQuiet}
      animate={{ scale: quiet ? 1.06 : 1 }}
    >
      <Bell className="size-16" />
      <i className="absolute inset-[15%] rounded-full border border-[#c6a15b2e] transition duration-[1200ms]" />
    </motion.button>
  );
}

export function MeditationBellSection({
  quiet,
  onToggleQuiet,
}: {
  quiet: boolean;
  onToggleQuiet: () => void;
}) {
  return (
    <section className="grid min-h-[90svh] place-content-center justify-items-center bg-[radial-gradient(circle_at_50%_48%,rgba(198,161,91,0.08),transparent_21rem),#080808] px-[7vw] py-32 text-center">
      <div className="mb-8">
        <MeditationBellButton
          quiet={quiet}
          onToggleQuiet={onToggleQuiet}
        />
      </div>
      <p className={eyebrowClass}>
        {quiet ? "Meditation mode is active" : "The Meditation Bell"}
      </p>
      <h2
        className={`${fontDisplay} my-4 text-[clamp(3rem,5.5vw,5.7rem)] font-normal leading-[0.94]`}
      >
        {quiet
          ? "Stay here for as long as you need."
          : "Touch the bell and let the temple slow with you."}
      </h2>
      <p className="leading-[1.8] text-[#918678]">
        {quiet
          ? "Movement, light and sound have softened."
          : "This interaction softens movement, particles and light across the page."}
      </p>
    </section>
  );
}
