import { useUserDashboard } from "@/hooks/useDashboard";
import { DashboardSkeleton } from "@/components/skeleton/DashboardSkeleton";
import { Achievements } from "./Achievements";
import { DashboardHeader } from "./DashboardHeader";
import { LearningProgress } from "./LearningProgress";
import { RecentActivity } from "./Recentactivity";
import { StatsCards } from "./StatsCard";
import { UpcomingEvents } from "./UpcommingEvents";

export function DashboardAnalytics() {

  const { data: dashboard, isLoading } = useUserDashboard();
  console.log("analytics", dashboard)

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page background decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-emerald-100/30 dark:bg-emerald-900/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-amber-100/30 dark:bg-amber-900/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 space-y-6 sm:space-y-8">
        {/* Header */}
        <DashboardHeader />

        {/* Stats cards */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Overview
              </h2>
            </div>
          </div>
          <StatsCards stats={dashboard!.overview} />
        </section>

        {/* Analytics: Progress + Activity */}
        <section>
          <div className="mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Analytics
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <LearningProgress  progress={dashboard!.analytics}/>
            <RecentActivity activity={dashboard!.recent_activity} />
          </div>
        </section>

        {/* Upcoming Events + Achievements */}
        <section>
          <div className="mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Schedule & Milestones
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <UpcomingEvents upcomming ={dashboard!.upcoming_events} />
            <Achievements  achievements={dashboard!.achievements}/>
          </div>
        </section>
      </div>
    </div>
  );
}
