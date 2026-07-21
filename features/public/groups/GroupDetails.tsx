import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock,
  Download,
  HeartHandshake,
  KeyRound,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SupportGroup } from "@/types/groups.definations";
import { StatusBadge } from "./statusBadge";
import { formatDate } from "@/utils/utils";
import CheckOutButton from "@/components/common/checkoutBtn";

interface SupportProps {
  group: SupportGroup;
}


export default function SupportGroupsDetails({ group }: SupportProps) {

  if (!group) {
    return (
      <main className="min-h-screen bg-[#fffaf6] px-5 py-20 text-[#2f251f] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[8px] border border-[#eadfd4] bg-white p-8 text-center shadow-[0_18px_45px_rgba(63,52,44,0.06)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
            Support Groups
          </p>
          <h1 className="font-serif text-3xl font-semibold text-[#2f251f]">
            This group could not be found.
          </h1>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-[#6f5c4f]">
            The group may have moved, closed, or the link may be outdated.
          </p>
          <Link
            href="/support-groups"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-[#8f6249] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#744d39]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Groups
          </Link>
        </div>
      </main>
    );
  }

  const capacity = Math.round(
    (group.current_members_count / group.max_members) * 100
  );
  const facilitatorInitials =
    group.facilitator_initials?.trim().toUpperCase() ||
    group.facilitator_name
      .split(" ")
      .filter(Boolean)
      .map((name) => name[0])
      .join("")
      .toUpperCase();

  const price = Number(group.price ?? 0);

  const formattedPrice = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(isNaN(price) ? 0 : price);



  return (
    <main className="min-h-screen bg-[#fffaf6] pb-16 text-[#2f251f]">
      <section className="border-b border-[#eadfd4] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
          <Link
            href="/support-groups"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8f6249] transition hover:text-[#744d39]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Support Groups
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#eadfd4] bg-[#fffaf6] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8f6249]">
                  {group.category.name}
                </span>
                <StatusBadge status={group.status_label} />
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-[8px] border sm:flex"
                // style={{
                //   backgroundColor: `${accentColor}14`,
                //   borderColor: `${accentColor}33`,
                // }}
                >
                  {group.icon_image || <HeartHandshake className="text-rose-500" size={30} />}
                </div>
                <div>
                  <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#2f251f] sm:text-5xl lg:text-6xl">
                    {group.title}
                  </h1>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-[#6f5c4f] sm:text-lg">
                    {group.short_description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6f5c4f]">
                  Next Session
                </span>
                <span className="text-sm font-semibold text-[#2f251f]">
                  {formatDate(group.next_session_date)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6f5c4f]">
                  Price
                </span>
                <span className="text-sm font-semibold text-[#2f251f]">
                  {formattedPrice}
                </span>
              </div>
              <CheckOutButton
                id={group.id}
                type="support_group"
                btnName={"Register Now"}
              />
              {/* <Link
                href={`/support-groups/${group.slug}/register`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-[#8f6249] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#744d39]"
              >
                Register Now
                <ArrowRight className="h-4 w-4" />
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-16">
        <section className="space-y-6">
          <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-[#2f251f]">
              What We Will Explore
            </h2>
            <div className="mt-6 grid gap-3">
              {group.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-start gap-3 rounded-[6px] bg-[#fffaf6] p-4 text-[#6f5c4f]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8f6249]" />
                  <span className="leading-6">{topic.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-[#2f251f]">
                Group Guidelines
              </h2>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8f6249]" />
                  <div>
                    <h3 className="font-semibold text-[#2f251f]">
                      Share at your pace
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#6f5c4f]">
                      You are welcome to listen, reflect, or speak when you feel
                      ready.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <KeyRound className="mt-0.5 h-5 w-5 shrink-0 text-[#8f6249]" />
                  <div>
                    <h3 className="font-semibold text-[#2f251f]">
                      Confidential space
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#6f5c4f]">
                      Group conversations are treated with respect, care, and
                      privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {group.resources && group.resources.length > 0 && (
              <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] sm:p-8">
                <h2 className="font-serif text-2xl font-semibold text-[#2f251f]">
                  Shared Resources
                </h2>

                <div className="mt-5 space-y-3">
                  {group.resources.map((resource) => (
                    <a
                      key={resource.id}
                      href={resource.fileUrl}
                      download
                      className="flex items-center gap-3 rounded-[6px] border border-[#eadfd4] bg-[#fffaf6] p-3 text-sm font-semibold text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#2f251f]"
                      title={resource.name}
                    >
                      <span className="shrink-0 text-[#8f6249]">
                        {resource.icon}
                      </span>

                      <span className="min-w-0 flex-1 truncate">
                        {resource.name}
                      </span>

                      <Download className="h-4 w-4 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.06)] sm:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
              Facilitator
            </p>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#8f6249] text-base font-semibold tracking-wider text-white"
              >
                {facilitatorInitials}
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#2f251f]">
                  {group.facilitator_name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[#8f6249]">
                  {group.facilitator_title}
                </p>
                <p className="mt-4 max-w-2xl leading-7 text-[#6f5c4f]">
                  {group.facilitator_bio}
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          <div className="overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.08)]">
            <div className="border-b border-[#eadfd4] bg-[#fffaf6] p-6">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f6249]">
                  Group Capacity
                </p>
                <StatusBadge status={group.status_label} />
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-semibold text-[#2f251f]">
                  {group.current_members_count}/{group.max_members}
                </p>
                <p className="text-sm font-semibold text-[#6f5c4f]">
                  {capacity}% filled
                </p>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#eadfd4]">
                <div
                  className="h-full rounded-full bg-[#8f6249]"
                  style={{ width: `${capacity}%` }}
                />
              </div>
            </div>

            <div className="space-y-4 p-6">
              <InfoRow
                icon={<MapPin className="h-4 w-4" />}
                label="Format"
                value={group.format}
              />
              <InfoRow
                icon={<CalendarDays className="h-4 w-4" />}
                label="Frequency"
                value={group.schedule.frequency}
              />
              <InfoRow
                icon={<Clock className="h-4 w-4" />}
                label="Duration"
                value={`${group.schedule.durationMinutes} mins`}
              />
              <InfoRow
                icon={<Users className="h-4 w-4" />}
                label="Level"
                value={group.levels}
              />

              <div className="border-t border-[#eadfd4] pt-5">
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-[#6f5c4f]">
                    Cost
                  </span>
                  <span className="font-serif text-2xl font-semibold text-[#2f251f]">
                    {formattedPrice}
                  </span>
                </div>
                <CheckOutButton
                  id={group.id}
                  type="support_group"
                  btnName={"Register Now"}
                />
                {/* <Link
                  href={`/support-groups/${group.slug}/register`}
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#8f6249] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#744d39]"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </Link> */}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[#8f6249]">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6f5c4f]">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-semibold capitalize text-[#2f251f]">
          {value}
        </p>
      </div>
    </div>
  );
}
