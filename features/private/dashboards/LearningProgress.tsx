import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookCheck, ChevronRight } from "lucide-react";
import { DashboardAnalytics } from "@/types/dashboard.definations";
import Link from "next/link";

interface PageProps {
  progress: DashboardAnalytics
}
export function LearningProgress({ progress }: PageProps) {


  return (
    <Card className="bg-white border border-[#eadfd4] rounded-[8px] shadow-[0_12px_30px_rgba(63,52,44,0.02)]">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="font-serif text-lg font-semibold text-[#2f251f]">
              Learning Progress
            </CardTitle>
            <CardDescription className="mt-0.5 text-xs text-[#744d39]">
              Your course completion overview
            </CardDescription>
          </div>
          <Badge className="bg-[#fffaf6] border border-[#eadfd4] hover:bg-[#fffaf6] text-[#8f6249] text-[11px] font-bold uppercase tracking-wider rounded-[4px] px-2.5 py-1">
            {progress.overall_completion}% overall
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">

        {/* Overall Progress Block — Muted Bronze / Warm Brown styling */}
        <div className="flex items-center gap-4 rounded-[6px] border border-[#eadfd4] bg-[#fffaf6] p-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f8f0e8] border border-[#eadfd4]">
            <BookCheck className="h-6 w-6 text-[#8f6249]" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8f6249] text-[10px] font-bold text-white">
              {progress.active_courses.length || 0}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-2 mb-2">
              <span className="text-sm font-semibold text-[#2f251f]">Overall Completion</span>
              <span className="text-sm font-bold text-[#8f6249] font-serif">{progress.overall_completion}%</span>
            </div>
            <Progress
              value={progress.overall_completion}
              className="h-2 bg-[#eadfd4] [&>div]:bg-[#8f6249]"
            />
            {/* <p className="mt-2 text-[11px] font-medium text-[#744d39]">
              {coursesCompleted} of {coursesTotal} courses completed
            </p> */}
          </div>
        </div>

        {/* Weekly Goal Block — Warm Muted Gold style */}
        {/* <div className="flex items-center gap-4 rounded-[6px] border border-[#eadfd4] bg-[#fffaf6] p-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f8f0e8] border border-[#eadfd4]">
            <Flame className="h-6 w-6 text-[#d8b06a]" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-2 mb-2">
              <span className="text-sm font-semibold text-[#2f251f]">Weekly Goal</span>
              <span className="text-sm font-bold text-[#d8b06a] font-serif">{weeklyGoalPercent}%</span>
            </div>
            <Progress
              value={weeklyGoalPercent}
              className="h-2 bg-[#eadfd4] [&>div]:bg-[#d8b06a]"
            />
            <p className="mt-2 text-[11px] font-medium text-[#744d39]">
              {weeklyDoneMinutes} / {weeklyGoalMinutes} min this week
            </p>
          </div>
        </div> */}

        {/* Individual Active Course Breakdown Track */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2f251f]">Active Courses</h4>
            <Link href={`/user/courses`} className="flex items-center gap-0.5 text-xs font-bold uppercase tracking-wider text-[#8f6249] transition-colors hover:text-[#744d39]">
              View all <ChevronRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-4">
            {progress.active_courses.slice(0, 5).map((course) => {
              // Calculate progress safely: (completed / total) * 100
              const progressPercentage = course.total_lessons > 0
                ? Math.round((course.completed_lessons / course.total_lessons) * 100)
                : 0;

              return (
                <div key={course.title} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-md font-semibold text-[#3f342c] truncate pr-2 max-w-[65%]">
                      {course.title}
                    </span>
                    <span className="text-[14px] font-medium text-[#744d39] shrink-0">
                      {course.completed_lessons}/{course.total_lessons} lessons
                      <span className="ml-1 text-[#8f6249]">({progressPercentage}%)</span>
                    </span>
                  </div>

                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f8f0e8] border border-[#eadfd4]/60">
                    <div
                      className="h-full rounded-full bg-[#b28b67] transition-all duration-700"
                      // Swap out course.progress for your calculated value
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </CardContent>
    </Card>
  );
}