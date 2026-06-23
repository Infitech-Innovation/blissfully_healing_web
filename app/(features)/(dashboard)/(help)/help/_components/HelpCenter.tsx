"use client";

import { useState } from "react";
import {
  Compass,
  BookOpen,
  CalendarDays,
  Search,
  ChevronDown,
  MessageSquare,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "../../../../../../types/help.definations";

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  // Filter logic based on query string search
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fffaf6] px-4 py-12 sm:px-6 lg:px-8 text-[#2f251f]">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* 1. Editorial Support Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
            Sanctuary Guidance
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#2f251f] sm:text-5xl">
            How Can We Cradle Your Journey?
          </h1>
          <p className="text-md leading-relaxed text-[#6f5c4f]">
            Whether you need assistance adjusting somatic coursework modules,
            reviewing upcoming travel details, or resolving access
            parameters—our coordination guides are here to support you.
          </p>

          {/* Clean Organic Search Input */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#b28b67]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guidance, practices, setup rules..."
              className="w-full min-h-11 rounded-full border border-[#eadfd4] bg-white pl-10 pr-4 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b28b67]/60 focus:border-[#8f6249] focus:ring-4 focus:ring-[#8f6249]/5 shadow-[0_4px_15px_rgba(63,52,44,0.01)]"
            />
          </div>
        </div>

        {/* 2. Three Pillar Focus Hub Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_8px_25px_rgba(63,52,44,0.01)] flex flex-col justify-between">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#f8f0e8] text-[#8f6249] mb-3">
                <BookOpen size={16} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2f251f]">
                Somatic Module Help
              </h3>
              <p className="text-[15px] text-[#744d39] mt-1 leading-relaxed">
                Assistance regarding lecture pacing, audio meditation player
                errors, or course milestone tracking.
              </p>
            </div>
            <button
              onClick={() => setSearchQuery("course")}
              className="mt-4 flex items-center gap-1 text-[15px] font-bold uppercase tracking-wider text-[#8f6249] hover:text-[#2f251f] text-left"
            >
              Browse tracks →
            </button>
          </div>

          <div className="rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_8px_25px_rgba(63,52,44,0.01)] flex flex-col justify-between">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#f8f0e8] text-[#8f6249] mb-3">
                <CalendarDays size={16} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2f251f]">
                Retreat Coordination
              </h3>
              <p className="text-[15px] text-[#744d39] mt-1 leading-relaxed">
                Modify pending arrival parameters, diet configurations, spatial
                housing requests, or travel logs.
              </p>
            </div>
            <button
              onClick={() => setSearchQuery("retreat")}
              className="mt-4 flex items-center gap-1 text-[15px] font-bold uppercase tracking-wider text-[#8f6249] hover:text-[#2f251f] text-left"
            >
              Review parameters →
            </button>
          </div>

          <div className="rounded-[8px] border border-[#eadfd4] bg-white p-5 shadow-[0_8px_25px_rgba(63,52,44,0.01)] flex flex-col justify-between">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#f8f0e8] text-[#8f6249] mb-3">
                <Compass size={16} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2f251f]">
                Privacy & Security
              </h3>
              <p className="text-[15px] text-[#744d39] mt-1 leading-relaxed">
                Manage private cryptographic tokens, record extractions, profile
                bio transparency, or account locks.
              </p>
            </div>
            <button
              onClick={() => setSearchQuery("deactivate")}
              className="mt-4 flex items-center gap-1 text-[15px] font-bold uppercase tracking-wider text-[#8f6249] hover:text-[#2f251f] text-left"
            >
              Inspect safety →
            </button>
          </div>
        </div>

        {/* 3. Primary Workspace Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 pt-4">
          {/* LEFT PANEL: Interactive FAQ Accordion Matrix */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-serif text-xl font-semibold text-[#2f251f] px-1 mb-2">
              Frequently Explored Guidance
            </h2>

            {filteredFaqs.length === 0 ? (
              <p className="text-md text-[#744d39] italic bg-white p-6 rounded-[8px] border border-[#eadfd4] text-center">
                No matching alignment answers found for your query. Try terms
                like &apos;somatic&apos;, &apos;retreat&apos;, or
                &apos;privacy&apos;.
              </p>
            ) : (
              <div className="space-y-3">
                {filteredFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-[6px] border border-[#eadfd4] bg-white shadow-[0_2px_8px_rgba(63,52,44,0.01)] overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="w-full flex items-center justify-between gap-4 p-4 text-left font-serif text-md font-semibold text-[#2f251f] hover:text-[#8f6249] transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-[#b28b67] shrink-0 transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-md leading-relaxed text-[#6f5c4f] border-t border-[#fffaf6] pt-2 bg-[#fffaf6]/30 animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT PANEL: Dedicated Ticket Support Intake Box */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl font-semibold text-[#2f251f] px-1 mb-2">
              Direct Attunement
            </h2>

            <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_12px_30px_rgba(63,52,44,0.02)]">
              {ticketSubmitted ? (
                <div className="text-center py-6 space-y-3 animate-in fade-in duration-300">
                  <HeartHandshake className="mx-auto h-8 w-8 text-[#8f6249]" />
                  <h3 className="font-serif text-base font-semibold text-[#2f251f]">
                    Intention Received
                  </h3>
                  <p className="text-[15px] text-[#744d39] leading-relaxed">
                    Your request has been delivered safely to our curation team.
                    A physical guide will reply to your account within 24
                    operational hours.
                  </p>
                  <button
                    onClick={() => setTicketSubmitted(false)}
                    className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#8f6249] hover:underline"
                  >
                    Submit another transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#f8f0e8] pb-3 mb-2">
                    <MessageSquare size={16} className="text-[#8f6249]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2f251f]">
                      Send Note to Guide
                    </span>
                  </div>

                  <div className="grid gap-y-1">
                    <label
                      htmlFor="topic"
                      className="text-[13px] font-bold uppercase tracking-wider text-[#3f342c]"
                    >
                      Area of Inquiry
                    </label>
                    <select
                      id="topic"
                      required
                      className="min-h-11 w-full rounded-[4px] border border-[#eadfd4] bg-[#fffaf6]/50 px-3 text-[15px] text-[#2f251f] outline-none transition focus:border-[#8f6249] focus:bg-white"
                    >
                      <option value="somatic">
                        Somatic Coursework Alignment
                      </option>
                      <option value="retreat">
                        Retreat Logistics & Travel
                      </option>
                      <option value="billing">Portal Account Management</option>
                      <option value="other">General Spatial Inquiry</option>
                    </select>
                  </div>

                  <div className="grid gap-y-1">
                    <label
                      htmlFor="message"
                      className="text-[13px] font-bold uppercase tracking-wider text-[#3f342c]"
                    >
                      Your Message Context
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Detail what feels heavy, broken, or misaligned..."
                      className="w-full rounded-[4px] border border-[#eadfd4] bg-[#fffaf6]/50 px-3 py-2 text-md text-[#2f251f] outline-none transition resize-none placeholder:text-[#b28b67]/50 focus:border-[#8f6249] focus:bg-white min-h-[100px] leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-11 rounded-[4px] bg-[#8f6249] hover:bg-[#3f342c] text-xs font-bold uppercase tracking-widest text-white transition-all shadow-sm flex items-center justify-center gap-2 pt-0.5"
                  >
                    <span>Transmit Ticket</span>
                    <ArrowRight size={12} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
