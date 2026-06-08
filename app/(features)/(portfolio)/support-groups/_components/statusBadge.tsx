import { SupportGroup } from "@/app/(features)/(dashboard)/user/support-groups/definations";

export function StatusBadge({ status }: { status: SupportGroup["status"] }) {
  const badgeMap = {
    active: {
      label: "Active Group",
      cls: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    filling: {
      label: "Filling Fast",
      cls: "bg-amber-50 text-amber-700 border-amber-200",
    },
    upcoming: {
      label: "Upcoming Cohort",
      cls: "bg-blue-50 text-blue-700 border-blue-200",
    },
  };

  const current = badgeMap[status] || badgeMap.active;
  return (
    <span
      className={`text-[10px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full border shrink-0 ${current.cls}`}
    >
      {current.label}
    </span>
  );
}