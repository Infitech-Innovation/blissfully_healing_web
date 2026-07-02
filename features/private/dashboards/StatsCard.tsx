import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  CalendarHeart,
  Users,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { mockStats } from "../../../types/dashboard.definations";

const iconMap = {
  courses: GraduationCap,
  ebooks: BookOpen,
  retreats: CalendarHeart,
  groups: Users,
};

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {mockStats.map((stat, i) => {
        const Icon = iconMap[stat.id as keyof typeof iconMap];

        return (
          <Card
            key={stat.id}
            className={cn(
              "group relative overflow-hidden bg-white border border-[#eadfd4] rounded-[8px] transition-all duration-300",
              "hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(63,52,44,0.06)] cursor-default"
            )}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <CardContent className="p-5">
              {/* Card Meta Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f6249]">
                    {stat.label}
                  </p>
                  
                  <div className="flex items-end gap-2">
                    <span className="font-serif text-4xl font-semibold tracking-tight text-[#2f251f] tabular-nums leading-none">
                      {stat.value}
                    </span>
                  </div>
                  
                  <p className="text-xs text-[#6f5c4f] leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Cohesive Brand Icon Plate */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] bg-[#fffaf6] border border-[#eadfd4] text-[#8f6249] transition-all duration-300 group-hover:border-[#8f6249]">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              {/* Lower Trend Tracker Indicator */}
              <div className="mt-4 flex items-center gap-1.5">
                <div className="flex items-center gap-1 rounded-[4px] bg-[#fffaf6] border border-[#eadfd4] px-2 py-0.5 text-[11px] font-semibold text-[#6f5c4f]">
                  <TrendingUp className="h-3 w-3 text-[#8f6249]" />
                  <span>{stat.trend}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}