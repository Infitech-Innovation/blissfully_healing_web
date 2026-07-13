import Link from "next/link";
import { ArrowRight, Calendar, Clock, HeartHandshake, Users } from "lucide-react";
import { SupportGrouplist } from "@/types/groups.definations";
import { StatusBadge } from "./statusBadge";

export function GroupCard({
  group,
}: {
  group: SupportGrouplist;
}) {

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(63,52,44,0.14)]">
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border"
          >
            {group.icon_image || <HeartHandshake className="text-rose-500" size={30}/>} 
          </div>
          <StatusBadge status={group.status_label} />
        </div>

        <Link
          href={`/support-groups/${group.slug}`}
          className="mb-5 block focus:outline-none"
        >
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6249]">
            {group.category.name}
          </p>
          <h3 className="text-xl font-semibold leading-snug text-[#2f251f] transition group-hover:text-[#744d39]">
            {group.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6f5c4f]">
            {group.short_description}
          </p>
        </Link>

        <div className="mb-5 grid gap-2 rounded-[6px] bg-[#fffaf6] p-4 text-sm text-[#6f5c4f]">
          <div className="flex items-center gap-2">
            <Calendar size={15} className="text-[#8f6249]" />
            <span>{group.schedule.frequency}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-[#8f6249]" />
            <span>{group.schedule_time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={15} className="text-[#8f6249]" />
            <span>{group.current_members_count} of {group.max_members} seats filled</span>
          </div>
        </div>

        <div className="mb-5 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-[#6f5c4f]">
            <span>Group Capacity</span>
            <span className="text-[#2f251f]">
              {Math.round((group.current_members_count / group.max_members) * 100)}%
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#eadfd4]">
            <div
              className="h-full rounded-full bg-[#8f6249] transition-all duration-500"
              style={{
                width: `${Math.round((group.current_members_count / group.max_members) * 100)}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[#eadfd4] pt-5">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6f5c4f]">
              Next Session
            </span>
            <span className="text-sm font-semibold text-[#2f251f]">
              {group.next_session_date}
            </span>
          </div>

          <Link
            href={`/support-groups/${group.slug}`}
            className="inline-flex items-center gap-2 rounded-sm bg-[#8f6249] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#744d39]"
          >
            Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
