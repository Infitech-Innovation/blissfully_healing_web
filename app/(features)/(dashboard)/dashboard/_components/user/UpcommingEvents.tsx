import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarHeart, Users, CirclePlay as PlayCircle, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockEvents } from "../../../../../../types/dashboard.definations";

const eventTypeConfig = {
  retreat: {
    icon: CalendarHeart,
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-100 dark:border-amber-900/40",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
    iconText: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
    dot: "bg-amber-500",
  },
  group: {
    icon: Users,
    bg: "bg-rose-50 dark:bg-rose-950/20",
    border: "border-rose-100 dark:border-rose-900/40",
    iconBg: "bg-rose-100 dark:bg-rose-900/40",
    iconText: "text-rose-600 dark:text-rose-400",
    badgeBg: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
    dot: "bg-rose-500",
  },
  course: {
    icon: PlayCircle,
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-blue-100 dark:border-blue-900/40",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    iconText: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
    dot: "bg-blue-500",
  },
};

export function UpcomingEvents() {
  return (
    <Card className="border shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div>
          <CardTitle className="text-base font-semibold">Upcoming Events</CardTitle>
          <CardDescription className="mt-0.5 text-xs">Your scheduled retreats, sessions & meetings</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockEvents.map((event) => {
            const cfg = eventTypeConfig[event.type as keyof typeof eventTypeConfig];
            const Icon = cfg.icon;

            return (
              <div
                key={event.id}
                className={cn(
                  "group relative flex gap-3 rounded-xl border p-4 transition-all duration-200 cursor-default",
                  "hover:shadow-sm hover:-translate-y-0.5",
                  cfg.bg,
                  cfg.border
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110",
                    cfg.iconBg
                  )}
                >
                  <Icon className={cn("h-5 w-5", cfg.iconText)} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-semibold text-foreground leading-tight line-clamp-1">
                      {event.title}
                    </p>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                        cfg.badgeBg
                      )}
                    >
                      {event.badge}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 shrink-0" />
                      <span>{event.date} · {event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span>{event.location}</span>
                    </div>
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
