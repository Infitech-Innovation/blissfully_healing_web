import { Button } from "@/components/ui/button";
import { ProgressRing } from "./ProgressRing";
import {
  Calendar,
  Download,
  GraduationCap,
  Network,
  Users,
} from "lucide-react";
import { SupportGroup } from "../definations";

interface GroupCardProp {
  group: SupportGroup;
  isExpanded: boolean;
  onToggle: () => void;
}

export function GroupCard({ group, isExpanded, onToggle }: GroupCardProp) {
  const timeUntil = group.nextSession;
  const nextDate = group.nextSession;

  return (
    <div
      className={`mb-4 overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.06)] transition duration-300 ${isExpanded
        ? "shadow-[0_18px_45px_rgba(63,52,44,0.06)]"
        : "hover:shadow-[0_28px_70px_rgba(63,52,44,0.12)]"
        }`}
    >
      {/* HEADER */}
      <div
        className="flex cursor-pointer items-center lg:flex-row sm:flex-col gap-4 p-5 sm:p-6"
        onClick={onToggle}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-[6px]"
          style={{ backgroundColor: group.color + "15" }}
        >
          {group.icon}
        </div>

        <div className="min-w-0 flex-1">
          <span
            className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.25em]"
            style={{ color: group.color }}
          >
            {group.category}
          </span>

          <h2 className="truncate font-serif text-2xl font-semibold text-[#2f251f]">
            {group.name}
          </h2>

          <p className="mt-0.5 text-xs text-[#6f5c4f]">
            with {group.facilitator}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#b39c8c]">
              Next session
            </p>
            <p className="text-sm font-semibold text-[#2f251f]">{timeUntil}</p>
          </div>

          <div
            className={`h-2.5 w-2.5 rounded-full ${group.status === "active"
              ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.35)] animate-pulse"
              : "bg-[#eadfd4]"
              }`}
          />

          <div
            className={`text-3xl text-[#b39c8c] transition-transform duration-300 ${isExpanded ? "rotate-90 text-[#8f6249]" : ""
              }`}
          >
            ›
          </div>
        </div>
      </div>

      {/* COLLAPSED SUMMARY */}
      {!isExpanded && (
        <div className="grid gap-3 border-t border-[#eadfd4] bg-[#fffaf6] px-5 py-4 sm:grid-cols-4">
          <div className="flex flex-col gap-1 border-r border-[#eadfd4]/60 pr-3 last:border-r-0 last:pr-0">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#6f5c4f]/70 font-semibold">
              Schedule
            </span>
            <span className="text-xs text-[#2f251f] font-medium">{group.schedule}</span>
          </div>

          <div className="flex flex-col gap-1 border-r border-[#eadfd4]/60 pr-3 last:border-r-0 last:pr-0">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#6f5c4f]/70 font-semibold">
              Format
            </span>
            <span className="text-xs text-[#2f251f] font-medium">{group.format}</span>
          </div>

          <div className="flex flex-col gap-1 border-r border-[#eadfd4]/60 pr-3 last:border-r-0 last:pr-0">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#6f5c4f]/70 font-semibold">
              Attendance
            </span>
            <span className="text-xs text-[#2f251f] font-medium">
              {group.sessionsAttended} / {group.totalSessions}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#6f5c4f]/70 font-semibold">
              Members
            </span>
            <span className="text-xs text-[#2f251f] font-medium">
              {group.members} / {group.maxMembers}
            </span>
          </div>
        </div>
      )}

      {/* EXPANDED CONTAINER */}
      {isExpanded && (
        <div className="space-y-6 border-t border-[#eadfd4] bg-[#fffaf6] px-5 pb-6 pt-5">
          <p className="text-base leading-7 italic text-[#6f5c4f]">
            {group.description}
          </p>

          {/* TOP GRID */}
          <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
            {/* PROGRESS CHART WRAPPER */}
            <div className="flex flex-col items-center justify-center text-center gap-4 rounded-[6px] border border-[#eadfd4] bg-white p-4 min-w-[160px]">
              <ProgressRing
                attended={group.sessionsAttended}
                total={group.totalSessions}
                color={group.color}
              />

              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#6f5c4f]">
                  Attendance
                </div>
                <div className="text-xs font-medium text-[#2f251f] mt-1">
                  {group.sessionsAttended} of {group.totalSessions} sessions
                </div>
              </div>
            </div>

            {/* INFO BLOCKS */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-[6px] border border-[#eadfd4] bg-white p-4">
                <Calendar size={18} style={{ color: group.color }} className="shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6f5c4f]">
                    Next Session
                  </p>
                  <p className="text-xs font-semibold text-[#2f251f] mt-0.5">{nextDate}</p>
                  <p className="text-[11px] text-[#6f5c4f] mt-0.5">{group.time}</p>
                </div>
              </div>

              <div className="flex gap-3 rounded-[6px] border border-[#eadfd4] bg-white p-4">
                <Users size={18} style={{ color: group.color }} className="shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6f5c4f]">
                    Circle Size
                  </p>
                  <p className="text-xs font-semibold text-[#2f251f] mt-0.5">
                    {group.members} / {group.maxMembers} Guests
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-[6px] border border-[#eadfd4] bg-white p-4">
                <GraduationCap size={18} style={{ color: group.color }} className="shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6f5c4f]">
                    Facilitator
                  </p>
                  <p className="text-xs font-semibold text-[#2f251f] mt-0.5">{group.facilitator}</p>
                  <p className="text-[11px] text-[#6f5c4f] mt-0.5">
                    {group.facilitatorTitle}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-[6px] border border-[#eadfd4] bg-white p-4">
                <Network size={18} style={{ color: group.color }} className="shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6f5c4f]">
                    Format
                  </p>
                  <p className="text-xs font-semibold text-[#2f251f] mt-0.5">{group.format}</p>
                </div>
              </div>
            </div>
          </div>

          {/* TOPICS */}
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#2f251f]">
              Upcoming Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {group.upcomingTopics.map((topic, index) => (
                <span key={index} className="rounded bg-white border border-[#eadfd4] px-3 py-1.5 text-xs text-[#6f5c4f] font-medium">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* RESOURCES */}
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#2f251f]">
              Session Resources
            </p>
            <div className="flex flex-wrap gap-2">
              {group.resources.map((resource, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 rounded-[6px] border-[#eadfd4] bg-white text-xs font-bold text-[#6f5c4f] hover:border-[#8f6249] hover:text-[#8f6249] tracking-wider transition"
                >
                  {resource}
                  <Download size={13} />
                </Button>
              ))}
            </div>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
            {group.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f6249]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <Button
              size="lg"
              className="w-full rounded-[8px] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white sm:w-auto transition-opacity hover:opacity-90"
              style={{ backgroundColor: group.color }}
            >
              Join Session Room
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-[8px] border border-[#eadfd4] bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#6f5c4f] hover:border-[#8f6249] hover:text-[#8f6249] sm:w-auto transition"
            >
              View Full Schedule
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}