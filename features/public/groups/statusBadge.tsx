import { GroupStatus } from "@/types/groups.definations";

type StatusBadgeProps = {
  status: GroupStatus;
};

const badgeMap: Record<
  GroupStatus,
  {
    label: string;
    cls: string;
  }
> = {
  ACTIVE_GROUP: {
    label: "Active",
    cls: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  UPCOMING_GROUP: {
    label: "Upcoming",
    cls: "bg-blue-50 text-blue-700 border-blue-200",
  },
  FULL_GROUP: {
    label: "Full",
    cls: "bg-amber-50 text-amber-700 border-amber-200",
  },
  COMPLETED_GROUP: {
    label: "Completed",
    cls: "bg-gray-100 text-gray-700 border-gray-300",
  },
  FILLING_FAST: {
    label: "Filling Fast",
    cls: "bg-amber-50 text-amber-700 border-amber-200",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const current = badgeMap[status];

  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${current.cls}`}
    >
      {current.label}
    </span>
  );
}