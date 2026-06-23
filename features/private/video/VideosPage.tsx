"use client";

import { useState } from "react";
import {
    Play,
    ThumbsUp,
    Share2,
    FolderHeart,
    ChevronDown,
    ChevronUp,
    Radio,
    UserCheck,
    CalendarDays,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { healingPlaylist, HealingVideo } from "@/types/videos.definations";

export function HealingVideoSanctuary() {
    const [currentVideo, setCurrentVideo] = useState<HealingVideo>(
        healingPlaylist[0],
    );
    const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    return (
        <section className=" space-y-10 px-4 py-8 sm:px-6 lg:px-8 bg-[#fffaf6] min-h-screen text-[#2f251f]">
            <div className="max-w-7xl mx-auto">
                {/* Section Segment Label */}
                <div className="mb-6 flex items-center gap-2">
                    <Radio className="h-4 w-4 text-[#8f6249] animate-pulse" />
                    <h3 className="font-serif text-xl font-semibold tracking-tight text-[#2f251f]">
                        Somatic Video Sanctuary
                    </h3>
                </div>

                {/* Authentic YouTube Watch Page Layout Grid split */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {/* LEFT PORTION: Main Primary Player Structure*/}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Cinematic Native Aspect Ratio Viewport Canvas */}
                        <div className="relative aspect-video w-full overflow-hidden rounded-[8px] border border-[#eadfd4] bg-black shadow-[0_12px_35px_rgba(63,52,44,0.06)]">
                            <iframe
                                src={currentVideo.embedUrl}
                                title={currentVideo.title}
                                className="absolute inset-0 h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Video Meta Title Block */}
                        <h1 className="font-serif text-xl font-semibold leading-snug text-[#2f251f] sm:text-2xl pt-1">
                            {currentVideo.title}
                        </h1>

                        {/* Primary Channel & Interaction Toolbar Row */}
                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eadfd4]/60 pb-4">
                            {/* Channel Meta Anchor */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f8f0e8] border border-[#eadfd4] text-[#8f6249] font-serif font-bold text-md">
                                    {currentVideo.channelName.charAt(0)}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <p className="text-md font-bold text-[#2f251f]">
                                            {currentVideo.channelName}
                                        </p>
                                        <UserCheck className="h-3.5 w-3.5 text-[#b28b67]" />
                                    </div>
                                    <p className="text-[13px] uppercase font-bold tracking-wider text-[#b28b67]">
                                        Verified Guide
                                    </p>
                                </div>
                            </div>

                            {/* Utility Reaction Toolbar Buttons */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={cn(
                                        "flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all",
                                        isLiked
                                            ? "bg-[#8f6249] border-[#8f6249] text-white"
                                            : "bg-white border-[#eadfd4] text-[#6f5c4f] hover:border-[#8f6249] hover:bg-[#fffaf6]",
                                    )}
                                >
                                    <ThumbsUp className="h-3.5 w-3.5" />
                                    <span>{isLiked ? "Saved" : "Helpful"}</span>
                                </button>

                                <button className="flex items-center gap-2 rounded-full border border-[#eadfd4] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#6f5c4f] transition hover:border-[#8f6249] hover:bg-[#fffaf6]">
                                    <Share2 className="h-3.5 w-3.5 text-[#8f6249]" />
                                    <span>Share</span>
                                </button>

                                <button className="flex items-center justify-center h-9 w-9 rounded-full border border-[#eadfd4] bg-white text-[#6f5c4f] transition hover:border-[#8f6249] hover:bg-[#fffaf6]">
                                    <FolderHeart className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Modern Expandable Description Metadata Plate */}
                        <div
                            onClick={() => setIsDescExpanded(!isDescExpanded)}
                            className="group rounded-[8px] border border-[#eadfd4] bg-white p-4 text-xs shadow-[0_4px_15px_rgba(63,52,44,0.01)] cursor-pointer transition hover:bg-[#fffaf6]/40"
                        >
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-bold text-[#2f251f] mb-2">
                                {/* <span className="flex items-center gap-1 text-[#8f6249]">
                                    <Eye className="h-3.5 w-3.5" /> {currentVideo.views}
                                </span> */}
                                <span className="flex items-center gap-1 text-[#b28b67]">
                                    <CalendarDays className="h-3.5 w-3.5" />{" "}
                                    {currentVideo.publishedDate}
                                </span>
                            </div>

                            <p
                                className={cn(
                                    "text-[#6f5c4f] leading-relaxed text-xl transition-all",
                                    !isDescExpanded && "line-clamp-2 text-xl",
                                )}
                            >
                                {currentVideo.description}
                            </p>

                            <div className="mt-3 flex items-center gap-1 font-bold uppercase tracking-wider text-[#8f6249] text-[13px] pt-1 border-t border-[#f8f0e8]/80">
                                <span>
                                    {isDescExpanded ? "Show less" : "Expand Description"}
                                </span>
                                {isDescExpanded ? (
                                    <ChevronUp className="h-3 w-3" />
                                ) : (
                                    <ChevronDown className="h-3 w-3" />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PORTION: "Up Next / Recommendations" Side Column Panel (1/3 Width) */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between px-1 pb-1">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8f6249]">
                                Recommended Practices
                            </h4>
                            <span className="text-[10px] font-medium text-[#b28b67] italic">
                                Autoplay Queue
                            </span>
                        </div>

                        <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
                            {healingPlaylist.map((video) => {
                                const isActive = video.id === currentVideo.id;

                                return (
                                    <button
                                        key={video.id}
                                        onClick={() => {
                                            setCurrentVideo(video);
                                            setIsDescExpanded(false);
                                            setIsLiked(false);
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }}
                                        className={cn(
                                            "w-full flex gap-3 text-left p-2 rounded-[6px] border transition-all duration-200 group",
                                            isActive
                                                ? "bg-[#fffaf6] border-[#8f6249] shadow-sm pointer-events-none"
                                                : "bg-white border-[#eadfd4] hover:border-[#8f6249] hover:shadow-[0_6px_20px_rgba(63,52,44,0.03)]",
                                        )}
                                    >
                                        {/* Lateral Mini Thumbnail with Duration Overlay */}
                                        <div className="relative w-32 sm:w-36 md:w-40 lg:w-28 xl:w-32 aspect-video shrink-0 overflow-hidden rounded-[4px] border border-[#eadfd4]/60 bg-stone-100">
                                            <Image
                                                src={video.thumbnail}
                                                alt={video.title}
                                                width={300}
                                                height={300}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                            />

                                            {/* Active State Play Overlay vs Text Overlay */}
                                            {isActive ? (
                                                <div className="absolute inset-0 bg-[#2f251f]/40 flex items-center justify-center">
                                                    <Radio className="h-4 w-4 text-white animate-pulse" />
                                                </div>
                                            ) : (
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition">
                                                    <Play className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition transform scale-75 group-hover:scale-100" />
                                                </div>
                                            )}

                                            <span className="absolute bottom-1 right-1 bg-black/75 px-1 rounded-[2px] text-[9px] font-bold text-white tracking-wide">
                                                {video.duration}
                                            </span>
                                        </div>

                                        {/* Metadata summary copy details */}
                                        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                                            <div>
                                                <h5
                                                    className={cn(
                                                        "text-md font-semibold leading-tight line-clamp-2 transition-colors",
                                                        isActive
                                                            ? "text-[#8f6249]"
                                                            : "text-[#2f251f] group-hover:text-[#8f6249]",
                                                    )}
                                                >
                                                    {video.title}
                                                </h5>
                                                <p className="text-[13px] font-medium text-[#6f5c4f] mt-1 truncate">
                                                    {video.channelName}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-2 text-[12px] font-medium text-[#b28b67] mt-1">
                                                <span>{video.publishedDate}</span>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
