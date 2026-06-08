import { Button } from "@/components/ui/button";
import { formatDate, getTimeUntil } from "../utils";
import { Group } from "../definations";
import { ProgressRing } from "./ProgressRing";
import {
  Calendar,
  Download,
  GraduationCap,
  Network,
  Users,
} from "lucide-react";

interface GroupCardProp {
  group: Group;
  isExpanded: boolean;
  onToggle: () => void;
}

export function GroupCard({ group, isExpanded, onToggle }: GroupCardProp) {
  const timeUntil = getTimeUntil(group.nextSession);
  const nextDate = formatDate(group.nextSession);

  return (
    <div
      className={`mb-4 overflow-hidden rounded-md border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.08)] transition duration-300 ${
        isExpanded
          ? "shadow-[0_18px_45px_rgba(63,52,44,0.08)]"
          : "hover:shadow-[0_28px_70px_rgba(63,52,44,0.14)]"
      }`}
    >
      {/* HEADER */}
      <div
        className="flex cursor-pointer items-center gap-4 p-5 sm:p-6"
        onClick={onToggle}
      >
        <div
          className="flex h-12 w-12 items-center justify-center"
          style={{ backgroundColor: group.color + "15" }}
        >
          {group.icon}
        </div>

        <div className="min-w-0 flex-1">
          <span
            className="mb-2 block text-[12px] uppercase tracking-[0.25em]"
            style={{ color: group.color }}
          >
            {group.category}
          </span>

          <h2 className="truncate text-2xl font-semibold text-slate-900">
            {group.name}
          </h2>

          <p className="mt-1 text-sm text-slate-600">
            with {group.facilitator}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Next session
            </p>
            <p className="text-sm font-semibold text-slate-900">{timeUntil}</p>
          </div>

          <div
            className={`h-2.5 w-2.5 rounded-full ${
              group.status === "active"
                ? "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.35)] animate-pulse"
                : "bg-slate-200"
            }`}
          />

          <div
            className={`text-4xl text-slate-400 transition-transform duration-300 ${
              isExpanded ? "rotate-90" : ""
            }`}
          >
            ›
          </div>
        </div>
      </div>

      {/* COLLAPSED SUMMARY */}
      {!isExpanded && (
        <div className="grid gap-3 border-t border-[#eadfd4] bg-[#faf7f2] px-5 py-4 sm:grid-cols-4">
          <div className="flex flex-col gap-1 border-r border-[#eadfd4] pr-3 last:border-r-0 last:pr-0">
            <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              Schedule
            </span>
            <span className="text-sm text-slate-800">{group.schedule}</span>
          </div>

          <div className="flex flex-col gap-1 border-r border-[#eadfd4] pr-3 last:border-r-0 last:pr-0">
            <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              Format
            </span>
            <span className="text-sm text-slate-800">{group.format}</span>
          </div>

          <div className="flex flex-col gap-1 border-r border-[#eadfd4] pr-3 last:border-r-0 last:pr-0">
            <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              Attendance
            </span>
            <span className="text-sm text-slate-800">
              {group.sessionsAttended}/{group.totalSessions}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              Members
            </span>
            <span className="text-sm text-slate-800">
              {group.members}/{group.maxMembers}
            </span>
          </div>
        </div>
      )}

      {/* EXPANDED */}
      {isExpanded && (
        <div className="space-y-6 border-t border-[#eadfd4] bg-[#faf7f2] px-5 pb-6 pt-5">
          <p className="text-lg leading-7 italic text-slate-700">
            {group.description}
          </p>

          {/* TOP GRID */}
          <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
            {/* PROGRESS */}
            <div className="flex items-center gap-4 rounded-md border border-[#eadfd4] bg-white p-4">
              <ProgressRing
                attended={group.sessionsAttended}
                total={group.totalSessions}
                color={group.color}
              />

              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                  Attendance
                </div>
                <div className="text-sm text-slate-700">
                  {group.sessionsAttended} of {group.totalSessions} sessions
                </div>
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-md border border-[#eadfd4] bg-white p-4">
                <Calendar size={20} style={{ color: group.color }} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                    Next Session
                  </p>
                  <p className="text-sm text-slate-800">{nextDate}</p>
                  <p className="text-xs text-slate-500">{group.time}</p>
                </div>
              </div>

              <div className="flex gap-3 rounded-md border border-[#eadfd4] bg-white p-4">
                <Users size={20} style={{ color: group.color }} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                    Circle Size
                  </p>
                  <p className="text-sm text-slate-800">
                    {group.members} / {group.maxMembers}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-md border border-[#eadfd4] bg-white p-4">
                <GraduationCap size={20} style={{ color: group.color }} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                    Facilitator
                  </p>
                  <p className="text-sm text-slate-800">{group.facilitator}</p>
                  <p className="text-xs text-slate-500">
                    {group.facilitatorTitle}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-md border border-[#eadfd4] bg-white p-4">
                <Network size={20} style={{ color: group.color }} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                    Format
                  </p>
                  <p className="text-sm text-slate-800">{group.format}</p>
                </div>
              </div>
            </div>
          </div>

          {/* TOPICS */}
          <div className="space-y-3">
            <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-slate-500">
              Upcoming Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {group.upcomingTopics.map((topic, index) => (
                <span key={index} className="px-3 py-1 text-md text-black-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* RESOURCES */}
          <div className="space-y-3">
            <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-slate-500">
              Session Resources
            </p>
            <div className="flex flex-wrap gap-2">
              {group.resources.map((resource, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 rounded-sm border-[#eadfd4] bg-white text-slate-700 hover:border-[#C8A882] hover:text-[#C8A882]"
                >
                  {resource}
                  <Download size={14} />
                </Button>
              ))}
            </div>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {group.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm uppercase tracking-[0.2em] text-black-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              size="lg"
              className="w-full rounded-full p-5 font-bold text-white sm:w-auto"
              style={{ backgroundColor: group.color }}
            >
              Join Session Room
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="w-full rounded-full p-5 font-bold sm:w-auto"
            >
              View Full Schedule
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
