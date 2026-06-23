import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Mountain, Lock, CircleCheck as CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockAchievements } from "../../../../../../types/dashboard.definations";

const iconMap = {
  graduation: GraduationCap,
  book: BookOpen,
  users: Users,
  mountain: Mountain,
};

export function Achievements() {
  const earnedCount = mockAchievements.filter((a) => a.earned).length;

  return (
    <Card className="bg-[#fffaf6] border border-[#eadfd4] rounded-[8px] shadow-[0_12px_30px_rgba(63,52,44,0.02)]">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="font-serif text-lg font-semibold text-[#2f251f]">
              Achievements
            </CardTitle>
            <CardDescription className="mt-0.5 text-xs text-[#744d39]">
              {earnedCount} of {mockAchievements.length} badges earned
            </CardDescription>
          </div>
          
          {/* Highlight Badge using Soft Ivory & Warm Gold */}
          <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#f8f0e8] border border-[#eadfd4] px-2.5 py-1 text-xs font-bold text-[#b28b67] uppercase tracking-wider">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#8f6249]" />
            {earnedCount} / {mockAchievements.length}
          </span>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {mockAchievements.map((achievement) => {
            const Icon = iconMap[achievement.icon as keyof typeof iconMap];

            return (
              <div
                key={achievement.id}
                className={cn(
                  "group relative flex gap-3 rounded-[6px] border p-4 transition-all duration-200",
                  achievement.earned
                    ? "bg-white border-[#eadfd4] hover:shadow-[0_10px_25px_rgba(63,52,44,0.04)] hover:-translate-y-0.5 cursor-default"
                    : "bg-[#f8f0e8]/50 border-[#eadfd4]/60 opacity-60"
                )}
              >
                {/* Lock indicator for unearned panels using deep coffee brown */}
                {!achievement.earned && (
                  <div className="absolute right-3 top-3">
                    <Lock className="h-3.5 w-3.5 text-[#3f342c]/40" />
                  </div>
                )}

                {/* Brand Icon Base Container */}
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border transition-transform duration-200",
                    achievement.earned
                      ? "bg-[#fffaf6] border-[#eadfd4] text-[#8f6249] group-hover:scale-105 group-hover:border-[#b28b67]"
                      : "bg-[#f8f0e8] border-[#eadfd4]/40 text-[#3f342c]/50"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Text Layout Metadata */}
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-sm font-semibold leading-tight",
                    achievement.earned ? "text-[#2f251f]" : "text-[#3f342c]"
                  )}>
                    {achievement.title}
                  </p>
                  
                  <p className="mt-1 text-xs text-[#744d39] line-clamp-2 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {achievement.earned ? (
                    <span className="mt-2.5 inline-block rounded-[4px] bg-[#fffaf6] border border-[#eadfd4] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#b28b67]">
                      Earned {achievement.earnedDate}
                    </span>
                  ) : (
                    <span className="mt-2.5 inline-block text-[10px] font-bold uppercase tracking-wider text-[#3f342c]/40">
                      Not yet unlocked
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}