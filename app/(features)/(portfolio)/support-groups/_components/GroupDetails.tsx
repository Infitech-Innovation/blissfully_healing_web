import Link from "next/link";
import { ArrowLeft, Clock, Key} from "lucide-react";
import { mockSupportGroups } from "@/app/(features)/(dashboard)/user/support-groups/data";
import { StatusBadge } from "./statusBadge";

interface SupportProps {
  selectedSlug?: string;
}

function getColorFromBgClass(bgClass: string): string {
  const colorMap: { [key: string]: string } = {
    'bg-indigo-50': '#4F46E5',
    'bg-amber-50': '#D97706',
    'bg-rose-50': '#E11D48',
    'bg-purple-50': '#A855F7',
    'bg-emerald-50': '#059669',
  };
  return colorMap[bgClass] || '#64748B';
}

export default function SupportGroupsDetails({ selectedSlug }: SupportProps) {
  const selectedGroup = selectedSlug
    ? mockSupportGroups.find((g) => g.slug === selectedSlug)
    : null;
  if (selectedGroup) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50 text-stone-800 antialiased selection:bg-stone-200/60 pb-24">
        {/* Navigation Breadcrumb Line */}
        <div className="mx-auto max-w-6xl px-6 pt-12">
          <Link
            href="/support-groups"
            className="inline-flex items-center gap-2 text-md font-medium tracking-wide text-stone-400 hover:text-stone-700 transition-colors focus:outline-none"
          >
            <span><ArrowLeft/></span> Back to Active Circles
          </Link>
        </div>

        {/* Main Columns Structural Grid */}
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 px-6 items-start lg:grid-cols-3">
          {/* Main Left Columns Content Hub */}
          <section className="lg:col-span-2 space-y-6">
            {/* Header Identity Card Panel */}
            <header className="rounded-md border border-stone-200/70 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-start gap-3 mb-4">
                <div className="text-3xl flex-shrink-0">
                  {selectedGroup.icon}
                </div>
                <div className="flex-1">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-[0.24em] text-stone-500">
                    {selectedGroup.category}
                  </span>
                  <h1 className="font-serif mb-2 text-4xl font-light leading-tight text-stone-900 sm:text-5xl">
                    {selectedGroup.name}
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedGroup.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-200/50 bg-stone-50 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Comprehensive Information Content Block */}
            <div className="space-y-6 rounded-md border border-stone-200/70 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-serif text-2xl font-medium text-stone-900 sm:text-3xl">
                About this Circle
              </h2>
              <p className="whitespace-pre-line text-base font-light leading-8 text-stone-600 sm:text-lg">
                {selectedGroup.description}
              </p>

              {/* Dynamic Curated Array Mapping from custom parameters */}
              <div className="grid grid-cols-1 gap-6 border-t border-stone-100 pt-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.22em] text-stone-400">
                    Upcoming Iterative Topics
                  </h3>
                  <ul className="space-y-2">
                    {selectedGroup.upcomingTopics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm font-light text-stone-600 sm:text-base"
                      >
                        <span className="text-[#8B6A44]">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.22em] text-stone-400">
                    Shared Circle Resources
                  </h3>
                  <ul className="space-y-2">
                    {selectedGroup.resources.map((res) => (
                      <li
                        key={res.id}
                        className="flex items-start gap-2 text-sm font-light text-stone-600 sm:text-base"
                      >
                        <span className="flex-shrink-0 mt-0.5">{res.icon}</span>
                        <a 
                          href={res.fileUrl} 
                          download
                          className="cursor-pointer underline decoration-stone-200 transition-colors hover:text-stone-900 truncate"
                          title={res.name}
                        >
                          {res.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Intentional Core Safe Space Values Footer */}
              <div className="border-t border-stone-100 pt-6">
                <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.22em] text-stone-400">
                  Intentional Group Guidelines
                </h3>
                <div className="grid grid-cols-1 gap-4 text-sm font-light text-stone-600 sm:grid-cols-2 sm:text-base">
                  <div className="flex items-start gap-2.5">
                    <span><Clock size={20} /></span>
                    <p>
                      <span className="block font-medium text-stone-800">
                        Optional Dialogues
                      </span>
                      Speak out only when your heart feels ready to deliver.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span><Key size={20} /></span>
                    <p>
                      <span className="font-medium text-stone-800 block">
                        Protected Confidentiality
                      </span>
                      What is processed in this screen module stays safe within.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practitioner Bio Information Layout Row */}
            <div className="rounded-md border border-stone-200/70 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="mb-6 text-[13px] font-bold uppercase tracking-[0.22em] text-stone-400">
                Expert Practitioner
              </h2>
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border text-base font-medium tracking-wider text-white ${selectedGroup.color}`}
                  style={{
                    backgroundColor: getColorFromBgClass(selectedGroup.color),
                  }}
                >
                  {selectedGroup.facilitator
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="space-y-2">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-stone-900">
                      {selectedGroup.facilitator}
                    </h3>
                    <p className="text-sm font-medium text-stone-400">
                      {selectedGroup.facilitatorTitle}
                    </p>
                  </div>
                  <p className="text-sm font-light leading-7 text-stone-500 sm:text-base">
                    Qualified tracking specialist regulating safe emotional
                    containment workflows. Managing equity elements, balancing
                    individual pacing timelines, and provisioning specialized
                    therapeutic frameworks across every 90-minute gathering
                    block.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Right Sidebar Element Registry */}
          <aside className="space-y-6 lg:sticky lg:top-8">
            <div className="bg-white border border-stone-200/70 rounded-md shadow-sm overflow-hidden">
              <div className="p-6 border-b border-stone-100 bg-stone-50/50 flex justify-between items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
                    Seat Occupancy
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-600">
                    {selectedGroup.members} / {selectedGroup.maxMembers}{" "}
                    Registered
                  </p>
                </div>
                <StatusBadge status={selectedGroup.status} />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-md border-b border-stone-50 pb-2">
                    <span className="text-stone-400">Format:</span>
                    <span className="font-medium text-stone-700">
                      {selectedGroup.format}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-md border-b border-stone-50 pb-2">
                    <span className="text-stone-400">Frequency:</span>
                    <span className="font-medium text-stone-700 capitalize">
                      {selectedGroup.schedule.frequency}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-md border-b border-stone-50 pb-2">
                    <span className="text-stone-400">Duration:</span>
                    <span className="text-sm font-medium text-stone-700">
                      {selectedGroup.schedule.durationMinutes} mins
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-md border-b border-stone-50 pb-2">
                    <span className="text-stone-400">Time:</span>
                    <span className="text-sm font-medium text-stone-700">
                      {selectedGroup.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-md border-b border-stone-50 pb-2">
                    <span className="text-stone-400">
                      Next Session:
                    </span>
                    <span className="text-md font-semibold text-stone-800">
                      {selectedGroup.nextSession.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: '2-digit' 
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-md">
                    <span className="text-stone-400">Level:</span>
                    <span className="rounded-md border border-stone-100 bg-stone-50 px-2.5 py-0.5 text-[13px] font-medium text-stone-600">
                      {selectedGroup.level}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-stone-100 my-2" />

                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-stone-400">
                    Cost:
                  </span>
                  <span className="text-xl font-serif font-medium text-stone-800 capitalize">
                    {selectedGroup.price === "Free"
                      ? "Free"
                      : selectedGroup.price}
                  </span>
                </div>

                <Link
                  href={`/support-groups/${selectedGroup.slug}/register`}
                  className="w-full block rounded-md py-3 text-center text-sm font-medium tracking-wider text-white transition-all shadow-sm hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
                  style={{ backgroundColor: getColorFromBgClass(selectedGroup.color) }}
                >
                  Register Now →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    );
  }
}
