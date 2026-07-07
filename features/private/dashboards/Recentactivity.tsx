import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, BookCheck, Download, CalendarHeart } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/utils";
import { RecentActivityItem } from "@/types/dashboard.definations";

const typeConfig = {
  group: {
    icon: Users,
    bg: "bg-rose-100 dark:bg-rose-900/40",
    text: "text-rose-600 dark:text-rose-400",
    dot: "bg-rose-500",
  },
  lesson: {
    icon: BookCheck,
    bg: "bg-blue-100 dark:bg-blue-900/40",
    text: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500",
  },
  ebook: {
    icon: Download,
    bg: "bg-emerald-100 dark:bg-emerald-900/40",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  retreat: {
    icon: CalendarHeart,
    bg: "bg-amber-100 dark:bg-amber-900/40",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
  },
};

interface PageProps {
  activity: RecentActivityItem[]
}

export function RecentActivity({ activity }: PageProps) {
  return (
    <Card className="border shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
            <CardDescription className="mt-0.5 text-xs">Your latest platform interactions</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-0">
          {activity.slice(0, 5).map((item, i) => {
            const cfg = typeConfig[item.type as keyof typeof typeConfig];
            const Icon = cfg.icon;
            const isLast = i === activity.length - 1;

            return (
              <div key={item.title} className="group relative flex gap-3 pb-5">
                {/* Timeline line */}
                {!isLast && (
                  <div className="absolute left-5 top-10 bottom-0 w-px bg-border" />
                )}

                {/* Icon */}
                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110",
                    cfg.bg
                  )}
                >
                  <Icon className={cn("h-4 w-4", cfg.text)} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-1.5">
                  <p className="text-sm font-medium text-foreground leading-tight truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</p>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className={cn("h-1.5 w-1.5 rounded-full", cfg.dot)} />
                    <span className="text-xs text-muted-foreground">{formatDate(item.date)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
