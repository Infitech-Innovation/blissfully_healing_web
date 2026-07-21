"use client";

import {
    Calendar,
    Download,
    GraduationCap,
    Network,
    Users,
    ChevronRight,
} from "lucide-react";// Adjusted typo path from "definations"
import { Resources, SupportGroup } from "@/types/groups.definations";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { formatDate } from "@/utils/utils";

// Get the dynamic icon component


interface GroupCardProp {
    group: SupportGroup;
    isExpanded: boolean;
    onToggle: () => void;
}

function ResourceCard({ resource }: { resource: Resources; }) {
    const typeColors: Record<string, string> = {
        PDF: "#e74c3c",
        MP3: "#9b59b6",
        MP4: "#3498db",
        Excel: "#27ae60", // Added to support your .xlsx file mapping nicely
    };

    const typeColor = typeColors[resource.type] || "#8f6249";

    return (
        <div className="group/resource relative flex items-center gap-4 rounded-[10px] border border-[#eadfd4]/70 bg-white p-4 shadow-sm hover:shadow-lg hover:border-[#d4c4b5] transition-all duration-300 cursor-pointer overflow-hidden">
            {/* Left accent bar */}
            <div
                className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover/resource:w-1.5"
                style={{ backgroundColor: typeColor }}
            />

            {/* Decorative gradient on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover/resource:opacity-100 transition-opacity duration-300"
            // style={{
            //   background: `linear-gradient(135deg, ${color}05, ${color}02)`,
            // }}
            />

            {/* Icon container */}
            <div
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover/resource:scale-105"
                style={{
                    background: `linear-gradient(135deg, ${typeColor}15, ${typeColor}08)`,
                }}
            >
                <div style={{ color: typeColor }}>
                    {resource.icon}
                </div>
            </div>

            {/* Content */}
            <div className="relative flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-[#2f251f] truncate group-hover/resource:text-[#8f6249] transition-colors duration-200">
                    {resource.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                    <span
                        className="text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded"
                        style={{
                            backgroundColor: typeColor + "15",
                            color: typeColor,
                        }}
                    >
                        {resource.type}
                    </span>
                    <span className="text-[11px] text-[#b39c8c]">{resource.size}</span>
                </div>
            </div>

            {/* Download button */}
            <div className="relative shrink-0">
                <div
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f0eb] text-[#8f6249] transition-all duration-300 group-hover/resource:bg-gradient-to-br group-hover/resource:text-white group-hover/resource:shadow-lg"
                // style={{
                //   background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                // }}
                >
                    <Download size={14} className="transition-transform duration-200 group-hover/resource:translate-y-0.5" />
                </div>
            </div>
        </div>
    );
}

export function GroupCard({ group, isExpanded, onToggle }: GroupCardProp) {
    // Programmatic Adjustments for utilities using real Dates
    // const timeUntil = getTimeUntil(group.ne);
    // const nextDate = formatDate(group.nextSession);

    const isHybridOrInPerson =
        group.format.toLowerCase().includes("hybrid") ||
        group.format.toLowerCase().includes("in-person");

    const hasMeetingLink = Boolean(group.meeting_link);

    const CategoryIcon =
        (Icons[group.category.icon as keyof typeof Icons] as LucideIcon | undefined) ??
        Icons.Circle;

    return (
        <div
            className={`group relative mb-4 overflow-hidden rounded-[12px] border bg-white transition-all duration-500 ease-out ${isExpanded
                ? "border-[#d4c4b5] shadow-[0_24px_60px_rgba(63,52,44,0.1),0_8px_20px_rgba(63,52,44,0.06)]"
                : "border-[#eadfd4] shadow-[0_4px_20px_rgba(63,52,44,0.04)] hover:shadow-[0_16px_48px_rgba(63,52,44,0.08)] hover:border-[#d4c4b5]"
                }`}
        >
            {/* Decorative accent line */}
            <div
                className="absolute top-0 left-0 h-[3px] w-full transition-all duration-300"
                style={{
                    // background: `linear-gradient(90deg, ${group.color}, ${group.color}88, transparent)`,
                    opacity: isExpanded ? 1 : 0.6,
                }}
            />

            {/* HEADER */}
            <div
                className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-5 sm:p-6 relative cursor-pointer"
                onClick={onToggle}
            >


                {/* Icon with enhanced styling */}
                <div className="flex gap-6">
                    <div
                        className="flex h-14 w-14 items-center justify-center rounded-[10px] transition-all duration-300 relative"
                    >
                        <div
                            className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <div
                            className="transition-transform duration-300"
                            style={{
                                transform: isExpanded ? "scale(1.05)" : "scale(1)",
                            }}
                        >
                            {group.icon_image ? (
                                <Image
                                    src={group.icon_image}
                                    alt={group.category.name}
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 object-contain"
                                />
                            ) : (
                                <CategoryIcon className="h-12 w-12 text-primary" strokeWidth={2} />
                            )}
                        </div>
                    </div>

                    {/* Content area */}
                    <div className="min-w-0 flex-1">
                        <span
                            className="mb-1.5 inline-block text-[11px] font-bold uppercase tracking-[0.25em]"
                        // style={{ color: group.color }}
                        >
                            {group.category.name}
                        </span>

                        <h2 className="truncate font-serif text-2xl font-semibold text-[#2f251f] transition-colors duration-200">
                            {group.title}
                        </h2>

                        <p className="mt-1 text-xs text-[#8f6249] font-medium">
                            with {group.facilitator_name}
                        </p>
                    </div>
                </div>

                {/* Status indicators */}
                <div className="flex items-center gap-5 right-0">
                    <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[#b39c8c] font-semibold">
                            Next session
                        </p>
                        <p className="text-sm font-semibold text-[#2f251f] mt-0.5">
                            {formatDate(group.next_session_date)}
                        </p>
                    </div>

                    {/* Animated status dot */}
                    <div className="relative">
                        <div
                            className={`h-3 w-3 rounded-full transition-all duration-300 ${group.status_label === "ACTIVE_GROUP"
                                ? "bg-emerald-500"
                                : "bg-[#d4c4b5]"
                                }`}
                            style={
                                group.status_label === "ACTIVE_GROUP"
                                    ? {
                                        boxShadow:
                                            "0 0 12px rgba(16,185,129,0.5), 0 0 24px rgba(16,185,129,0.25)",
                                    }
                                    : {}
                            }
                        />
                        {group.status_label === "ACTIVE_GROUP" && (
                            <div className="absolute inset-0 h-3 w-3 rounded-full bg-emerald-500 animate-ping opacity-40" />
                        )}
                    </div>

                    {/* Chevron */}
                    <ChevronRight
                        size={20}
                        className={`text-[#b39c8c] transition-all duration-500 ${isExpanded
                            ? "rotate-90 text-[#8f6249]"
                            : "group-hover:text-[#8f6249] group-hover:translate-x-0.5"
                            }`}
                        strokeWidth={2.5}
                    />
                </div>
            </div>

            {/* COLLAPSED SUMMARY */}
            {!isExpanded && (
                <div className="grid gap-4 border-t border-[#eadfd4]/60 bg-gradient-to-b from-[#fffaf6] to-white px-6 py-5 sm:grid-cols-4 relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" />
                    <div
                        className="absolute -right-12 -top-12 h-24 w-24 rounded-full blur-2xl"
                    // style={{ backgroundColor: group.color + "10" }}
                    />

                    <div className="relative flex flex-col gap-1.5 border-r border-[#eadfd4]/50 pr-4 last:border-r-0 last:pr-0">
                        <span className="text-[10px] uppercase tracking-[0.28em] text-[#8f6249] font-bold">
                            Schedule
                        </span>
                        <span className="text-[13px] text-[#2f251f] font-medium capitalize">
                            {group.schedule.frequency}
                        </span>
                    </div>

                    <div className="relative flex flex-col gap-1.5 border-r border-[#eadfd4]/50 pr-4 last:border-r-0 last:pr-0">
                        <span className="text-[10px] uppercase tracking-[0.28em] text-[#8f6249] font-bold">
                            Format
                        </span>
                        <span className="text-[13px] text-[#2f251f] font-medium">
                            {group.format}
                        </span>
                    </div>

                    <div className="relative flex flex-col gap-1.5 border-r border-[#eadfd4]/50 pr-4 last:border-r-0 last:pr-0">
                        <span className="text-[10px] uppercase tracking-[0.28em] text-[#8f6249] font-bold">
                            Attendance
                        </span>
                        {/* <span className="text-[13px] text-[#2f251f] font-medium">
              {group.sessionsAttended} / {group.totalSessions}
            </span> */}
                    </div>

                    <div className="relative flex flex-col gap-1.5">
                        <span className="text-[10px] uppercase tracking-[0.28em] text-[#8f6249] font-bold">
                            Resources
                        </span>
                        <span className="text-[13px] text-[#2f251f] font-medium flex items-center gap-1.5">
                            {group.resources?.length}
                            <span className="text-[#b39c8c]">files available</span>
                        </span>
                    </div>
                </div>
            )}

            {/* EXPANDED CONTAINER */}
            {isExpanded && (
                <div className="space-y-8 border-t border-[#eadfd4]/50 bg-gradient-to-b from-[#fffaf6] via-white to-[#fffaf6] px-6 pb-7 pt-6 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div
                        className="absolute -left-24 top-24 h-48 w-48 rounded-full blur-3xl opacity-30"
                    // style={{ backgroundColor: group.color + "08" }}
                    />
                    <div
                        className="absolute -right-24 bottom-12 h-32 w-32 rounded-full blur-3xl opacity-30"
                    // style={{ backgroundColor: group.color + "08" }}
                    />

                    {/* Description with enhanced typography */}
                    <p className="relative text-[15px] leading-[1.8] italic text-[#6f5c4f] font-serif">
                        {group.short_description}
                    </p>

                    {/* TOP GRID */}
                    <div className="relative grid gap-6 lg:grid-cols-[auto_1fr]">
                        {/* PROGRESS CHART WRAPPER */}
                        <div className="flex flex-col items-center justify-center text-center gap-4 rounded-[12px] border border-[#eadfd4]/60 bg-white p-6 min-w-[170px] shadow-[0_4px_16px_rgba(63,52,44,0.04)] relative">
                            {/* Corner accents */}
                            <div
                                className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl-xl"
                            // style={{ borderColor: group.color + "30" }}
                            />
                            <div
                                className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr-xl"
                            // style={{ borderColor: group.color + "30" }}
                            />

                            {/* <ProgressRing
                attended={group.sessionsAttended}
                total={group.totalSessions}
                color={group.color}
              /> */}

                            <div>
                                <div className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#8f6249]">
                                    Attendance
                                </div>
                                {/* <div className="text-[13px] font-medium text-[#2f251f] mt-1">
                  {group.sessionsAttended} of {group.totalSessions} sessions
                </div> */}
                            </div>
                        </div>

                        {/* INFO BLOCKS */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex gap-4 rounded-[10px] border border-[#eadfd4]/60 bg-white p-5 shadow-[0_2px_12px_rgba(63,52,44,0.03)] hover:shadow-[0_8px_24px_rgba(63,52,44,0.06)] hover:border-[#d4c4b5] transition-all duration-300 relative group/info">
                                <div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                                    style={{
                                        // background: `linear-gradient(135deg, ${group.color}12, ${group.color}06)`,
                                    }}
                                >
                                    <Calendar
                                        size={18}
                                        // style={{ color: group.color }}
                                        className="transition-transform duration-200 group-hover/info:-translate-y-0.5"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#6f5c4f]">
                                        Next Session
                                    </p>
                                    <p className="text-[13px] font-semibold text-[#2f251f] mt-1">
                                         {formatDate(group.next_session_date)}
                                    </p>
                                    <p className="text-[12px] text-[#8f6249] mt-0.5">
                                        {group.schedule.durationMinutes} Minutes
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 rounded-[10px] border border-[#eadfd4]/60 bg-white p-5 shadow-[0_2px_12px_rgba(63,52,44,0.03)] hover:shadow-[0_8px_24px_rgba(63,52,44,0.06)] hover:border-[#d4c4b5] transition-all duration-300 relative group/info">
                                <div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                                    style={{
                                        // background: `linear-gradient(135deg, ${group.color}12, ${group.color}06)`,
                                    }}
                                >
                                    <Users
                                        size={18}
                                        // style={{ color: group.color }}
                                        className="transition-transform duration-200 group-hover/info:-translate-y-0.5"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#6f5c4f]">
                                        Circle Size
                                    </p>
                                    <p className="text-[13px] font-semibold text-[#2f251f] mt-1">
                                        {group.current_members_count} / {group.max_members} Guests
                                    </p>
                                    <div className="mt-1.5 h-1.5 w-full max-w-[80px] rounded-full bg-[#eadfd4] overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-1000"
                                            style={{
                                                width: `${(group.current_members_count / group.max_members) * 100}%`,
                                                // background: `linear-gradient(90deg, ${group.color}, ${group.color}aa)`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 rounded-[10px] border border-[#eadfd4]/60 bg-white p-5 shadow-[0_2px_12px_rgba(63,52,44,0.03)] hover:shadow-[0_8px_24px_rgba(63,52,44,0.06)] hover:border-[#d4c4b5] transition-all duration-300 relative group/info">
                                <div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                                    style={{
                                        // background: `linear-gradient(135deg, ${group.color}12, ${group.color}06)`,
                                    }}
                                >
                                    <GraduationCap
                                        size={18}
                                        // style={{ color: group.color }}
                                        className="transition-transform duration-200 group-hover/info:-translate-y-0.5"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#6f5c4f]">
                                        Facilitator
                                    </p>
                                    <p className="text-[13px] font-semibold text-[#2f251f] mt-1">
                                        {group.facilitator_name}
                                    </p>
                                    <p className="text-[12px] text-[#8f6249] mt-0.5">
                                        {group.facilitator_title}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 rounded-[10px] border border-[#eadfd4]/60 bg-white p-5 shadow-[0_2px_12px_rgba(63,52,44,0.03)] hover:shadow-[0_8px_24px_rgba(63,52,44,0.06)] hover:border-[#d4c4b5] transition-all duration-300 relative group/info">
                                <div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                                    style={{
                                        // background: `linear-gradient(135deg, ${group.color}12, ${group.color}06)`,
                                    }}
                                >
                                    <Network
                                        size={18}
                                        // style={{ color: group.color }}
                                        className="transition-transform duration-200 group-hover/info:-translate-y-0.5"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#6f5c4f]">
                                        Format
                                    </p>
                                    <p className="text-[13px] font-semibold text-[#2f251f] mt-1">
                                        {group.format}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* TOPICS */}
                    {
                        group.topics && (
                            <div className="relative space-y-4">
                                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2f251f]">
                                    Upcoming Topics
                                </p>
                                <div className="flex flex-wrap gap-2.5">
                                    {group.topics?.map((topic, index) => (
                                        <span
                                            key={index}
                                            className="group/topic inline-flex items-center gap-1.5 rounded-full border border-[#eadfd4]/60 bg-white px-4 py-2 text-[12px] text-[#6f5c4f] font-medium shadow-sm hover:shadow-md hover:border-[#d4c4b5] transition-all duration-200 cursor-default"
                                        >
                                            <span
                                                className="w-1.5 h-1.5 rounded-full"
                                            // style={{ backgroundColor: group.color }}
                                            />
                                            {topic.text}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    }

                    {/* DOWNLOADABLE RESOURCES - Enhanced Section */}
                    {group.resources && (


                        <div className="relative space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2f251f]">
                                        Session Resources
                                    </p>
                                    <span
                                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                                    // style={{
                                    //   backgroundColor: group.color + "15",
                                    //   color: group.color,
                                    // }}
                                    >
                                        {/* {group.resources.length} files */}
                                    </span>
                                </div>
                            </div>

                            {/* Resources Grid */}
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {group.resources.map((resource: Resources) => (
                                    <ResourceCard key={resource.id} resource={resource} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* TAGS */}
                    <div className="relative flex flex-wrap gap-x-5 gap-y-2 pt-3 border-t border-[#eadfd4]/40">
                        {group.tags && group.tags.map((tag) => (
                            <span
                                key={tag.id}
                                className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8f6249] hover:text-[#6f4a36] transition-colors duration-200 cursor-pointer"
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>

                    {/* ACTIONS */}
                    <div className="relative flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                        {isHybridOrInPerson ? (
                            <Button
                                size="lg"
                                className="group/btn relative w-full overflow-hidden rounded-[10px] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] sm:w-auto"
                            // style={{
                            //   background: `linear-gradient(135deg, ${group.color}, ${group.color}dd)`,
                            //   boxShadow: `0 4px 20px ${group.color}30`,
                            // }}
                            >
                                <span className="relative z-10">View Full Schedule</span>

                                <div
                                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
                                // style={{
                                //   background: `linear-gradient(135deg, ${group.color}ee, ${group.color}cc)`,
                                // }}
                                />
                            </Button>
                        ) : (
                            <Button
                                asChild={hasMeetingLink}
                                disabled={!hasMeetingLink}
                                size="lg"
                                className="group/btn relative w-full overflow-hidden rounded-[10px] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            // style={{
                            //   background: `linear-gradient(135deg, ${group.color}, ${group.color}dd)`,
                            //   boxShadow: `0 4px 20px ${group.color}30`,
                            // }}
                            >
                                {hasMeetingLink ? (
                                    <a
                                        href={group.meeting_link!}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative z-10"
                                    >
                                        Join Session Room
                                    </a>
                                ) : (
                                    <span className="relative z-10">
                                        Meeting Link Unavailable
                                    </span>
                                )}
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}