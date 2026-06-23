"use client";

import { useState } from "react";
import { Heart, Feather, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { historicalReflections, journeyTimeline } from "@/types/journey.definations";

export default function MyHealingJourney() {
  const [activeCategory, setActiveCategory] = useState<"all" | "retreat" | "course" | "circle">("all");

  const filteredTimeline = journeyTimeline.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section className="min-h-screen bg-[#fffaf6] px-4 py-12 sm:px-6 lg:px-8 text-[#2f251f]">
      <div className="mx-auto max-w-7xl">
        
        {/* Editorial Intention Header Block */}
        <div className="mb-16 max-w-3xl border-b border-[#eadfd4] pb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
            Sacred Timeline
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#2f251f] sm:text-5xl">
            The Geography of
            <br />
            Your Evolution
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#6f5c4f]">
            Healing is not a linear set of points on a graph. This map honors the turning points, quiet pauses, and integration moments that define your ongoing return to self.
          </p>
        </div>

        {/* Primary Functional Grid Split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-start">
          
          {/* Main Column (Left 2/3 wide): Interactive Milestone Arc */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Timeline Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eadfd4]/60 pb-4">
              <div className="flex flex-wrap gap-2">
                {(["all", "retreat", "course", "circle"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "rounded-[4px] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors",
                      activeCategory === cat
                        ? "bg-[#8f6249] text-white"
                        : "border border-[#eadfd4] bg-white text-[#6f5c4f] hover:border-[#8f6249]"
                    )}
                  >
                    {cat === "all" ? "Full Arc" : `${cat}s`}
                  </button>
                ))}
              </div>
              <span className="text-xs text-[#b28b67] font-medium italic">Chronological Order</span>
            </div>

            {/* Custom Organic Timeline Trace */}
            <div className="relative border-l border-[#eadfd4] pl-6 ml-4 space-y-10">
              {filteredTimeline.map((milestone) => (
                <div key={milestone.id} className="relative group">
                  
                  {/* Custom Indicator Nodes */}
                  <div className="absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#eadfd4] bg-white text-[#8f6249] shadow-sm transition-colors group-hover:border-[#8f6249] group-hover:bg-[#fffaf6]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#8f6249]" />
                  </div>

                  {/* Core Content Card Box */}
                  <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_12px_30px_rgba(63,52,44,0.02)] transition-all duration-300 group-hover:shadow-[0_15px_35px_rgba(63,52,44,0.05)]">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#b28b67] tracking-wider uppercase font-mono">
                        {milestone.date}
                      </span>
                      {milestone.focusMarker && (
                        <span className="rounded-[4px] bg-[#fffaf6] border border-[#eadfd4] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#744d39]">
                          {milestone.focusMarker}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-lg font-semibold text-[#2f251f] group-hover:text-[#8f6249] transition-colors">
                      {milestone.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#6f5c4f] mt-0.5 italic">
                      {milestone.subtitle}
                    </p>
                    
                    <p className="mt-3 text-xs leading-relaxed text-[#744d39]">
                      {milestone.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Sidebar Column (Right 1/3 wide): Reflection & Integration Logs */}
          <div className="space-y-6">
            
            <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_12px_30px_rgba(63,52,44,0.02)]">
              <div className="flex items-center gap-2 mb-4 border-b border-[#f8f0e8] pb-3">
                <Feather size={16} className="text-[#8f6249]" />
                <h3 className="font-serif text-base font-semibold text-[#2f251f]">
                  Integration Journal
                </h3>
              </div>

              <div className="space-y-6">
                {historicalReflections.map((log) => (
                  <div key={log.id} className="space-y-2.5 text-xs">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#b28b67]">
                      <CalendarDays size={12} />
                      <span>{log.date}</span>
                    </div>
                    
                    <p className="font-serif font-semibold text-[#3f342c] leading-snug">
                      &ldquo;{log.prompt}&rdquo;
                    </p>
                    
                    <p className="text-[#6f5c4f] leading-relaxed bg-[#fffaf6] p-3 rounded-[4px] border border-[#eadfd4]/60 italic">
                      {log.excerpt}
                    </p>

                    <div className="pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8f6249] block mb-0.5">
                        Daily Commitment:
                      </span>
                      <span className="text-[#2f251f] font-medium">
                        {log.integrationPractice}
                      </span>
                    </div>

                    <hr className="border-[#f8f0e8] mt-4" />
                  </div>
                ))}
              </div>

              <button className="w-full mt-2 rounded-[6px] border border-[#eadfd4] bg-[#fffaf6] py-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]">
                Open Full Reflection Log
              </button>
            </div>

            {/* Aesthetic Anchor Callout */}
            <div className="rounded-[8px] bg-[#f8f0e8] border border-dashed border-[#eadfd4] p-5 text-center">
              <Heart className="mx-auto h-4 w-4 text-[#8f6249] mb-2" />
              <p className="font-serif text-xs italic text-[#3f342c] leading-relaxed">
                &ldquo;Patience is also a form of practice.&rdquo;
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}