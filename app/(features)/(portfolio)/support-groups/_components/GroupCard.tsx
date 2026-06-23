import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { SupportGroup } from "@/app/(features)/(dashboard)/user/support-groups/definations";
import { StatusBadge } from "./statusBadge";

export function GroupCard({
  group,
}: {
  group: SupportGroup;
}) {
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  const getColorFromBgClass = (bgClass: string): string => {
    const colorMap: { [key: string]: string } = {
      'bg-indigo-50': '#4F46E5',
      'bg-amber-50': '#D97706',
      'bg-rose-50': '#E11D48',
      'bg-purple-50': '#A855F7',
      'bg-emerald-50': '#059669',
    };
    return colorMap[bgClass] || '#64748B';
  };

  return (
    <article className={`flex flex-col bg-white ${group.color} rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group`}>
      {/* Dynamic Colored Accent Line */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: getColorFromBgClass(group.color) }}
      />

      <div className="p-6 flex flex-col flex-1 bg-white">
        {/* Card Header metadata */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[12px] tracking-widest uppercase font-semibold text-stone-600">
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
            <div className="flex-shrink-0">
              {group.icon}
            </div>
            <h3 className="text-lg font-medium text-stone-900 leading-snug group-hover/title:text-stone-950 transition-colors">
              {group.name}
            </h3>
          </div>
          <p className="text-sm text-stone-600 font-normal line-clamp-2 leading-relaxed">
            {group.description.substring(0, 100)}...
          </p>
        </Link>

        {/* Schedule Info */}
        <div className="pt-3.5 border-t border-stone-200 space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-stone-700">
            <Calendar size={14} className="text-stone-500" />
            <span>{group.schedule.frequency === 'weekly' ? 'Weekly' : 'Monthly'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-stone-700">
            <Clock size={14} className="text-stone-500" />
            <span>{group.time}</span>
          </div>
        </div>

        {/* Circle Size Progress */}
        <div className="space-y-1.5 mb-5">
          <div className="flex justify-between items-center text-[12px] tracking-wide text-stone-500 uppercase font-semibold">
            <span>Members</span>
            <span className="font-sans font-bold text-stone-700">
              {group.members}/{group.maxMembers}
            </span>
          </div>
          <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.round((group.members / group.maxMembers) * 100)}%`,
                backgroundColor: getColorFromBgClass(group.color),
              }}
            />
          </div>
        </div>

        {/* Footer actions row */}
        <div className="pt-3.5 border-t border-stone-200 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[11px] tracking-wider uppercase text-stone-500 font-semibold">
              Next Session
            </span>
            <span className="text-sm text-stone-700 font-semibold">
              {formatDate(group.nextSession)}
            </span>
          </div>

          <Link
            href={`/support-groups/${group.slug}`}
            className="text-sm font-medium tracking-wide px-3 py-2 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
