import Link from "next/link";
import { SupportGroup } from "@/app/(features)/(dashboard)/user/support-groups/definations";
import { StatusBadge } from "./statusBadge";
import { Calendar, Clock } from "lucide-react";

export function GroupCard({
  group,
}: {
  group: SupportGroup;
}) {
  return (
    <article className="flex flex-col bg-white border border-stone-200/70 rounded-md overflow-hidden shadow-sm hover:shadow-md hover:border-stone-300/90 transition-all duration-300 group">
      {/* Dynamic Colored Accent Line */}
      <div className="h-1 w-full" style={{ background: group.color }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Card Header metadata */}
        <div className="flex justify-between items-center mb-3">
          <span
            className="text-[14px] tracking-widest uppercase font-bold"
            style={{ color: group.secondaryColor }}
          >
            {group.category}
          </span>
          <StatusBadge status={group.status} />
        </div>

        {/* Clickable Heading Structure */}
        <Link
          href={`/support-groups/${group.slug}`}
          className="flex-1 block text-left space-y-1.5 focus:outline-none group/title w-full mb-4"
        >
          <div className="flex items-start gap-2">
            <span className="text-2xl select-none" role="img" aria-label="icon">
              {group.icon}
            </span>
            <h3 className="font-serif text-lg font-medium text-stone-800 leading-snug group-hover/title:text-stone-900 transition-colors">
              {group.name}
            </h3>
          </div>
          <p className="text-md text-stone-500 font-light line-clamp-2 leading-relaxed">
            {group.description}
          </p>
        </Link>

        {/* Schedule Ribbon Context */}
        <div className="pt-3.5 border-t border-stone-100 grid grid-cols-2 gap-2 text-stone-600 mb-4">
          <div className="flex items-center gap-1.5 text-md font-light truncate">
            <span className="opacity-60 text-stone-400">
              <Calendar />
            </span>
            <span className="truncate">{group.schedule}</span>
          </div>
          <div className="flex items-center gap-1.5 text-md font-light truncate">
            <span className="opacity-60 text-stone-400">
              <Clock />
            </span>
            <span className="truncate">{group.time.split("–")[0]} EAT</span>
          </div>
        </div>

        {/* Custom Progress / Seats Visual Indicator */}
        <div className="space-y-1.5 mb-5">
          <div className="flex justify-between items-center text-[12px] tracking-wide text-stone-400 uppercase font-semibold">
            <span>Circle Attendance</span>
            <span className="font-sans font-bold text-stone-600">
              {group.members}/{group.maxMembers}
            </span>
          </div>
          <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.round((group.members / group.maxMembers) * 100)}%`,
                backgroundColor: group.color,
              }}
            />
          </div>
        </div>

        {/* Footer actions row */}
        <div className="pt-3.5 border-t border-stone-100 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[12px] tracking-wider uppercase text-stone-400 font-semibold">
              Next Session
            </span>
            <span className="text-md text-stone-600 font-semibold">
              {group.nextSession.split(",")[1] || group.nextSession}
            </span>
          </div>

          <Link
            href={`/support-groups/${group.slug}`}
            className="text-md font-medium tracking-wide px-4 py-2 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
