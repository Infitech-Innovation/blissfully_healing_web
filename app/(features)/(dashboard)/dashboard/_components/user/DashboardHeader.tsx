import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Sparkles } from "lucide-react";
import { mockUser } from "../../definations";

const motivationalMessages = [
  "Every day is a new opportunity to grow and learn.",
  "Small steps forward lead to extraordinary journeys.",
  "Your commitment to growth is your greatest strength.",
];

function getCurrentDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function DashboardHeader() {
  const message = motivationalMessages[0];
  const date = getCurrentDate();

  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white p-6 sm:p-8 text-[#2f251f] shadow-[0_18px_45px_rgba(63,52,44,0.04)]">
      
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left: Greeting & Context */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <Badge
              className="border-[#eadfd4] bg-[#fffaf6] text-[#8f6249] hover:bg-[#fffaf6] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px]"
            >
              <Sparkles className="mr-1.5 h-3 w-3 text-[#8f6249]" />
              Your Healing journey
            </Badge>
          </div>
          
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#2f251f] sm:text-4xl">
            Welcome back, {mockUser.name} 👋
          </h1>
          
          <p className="max-w-md text-sm leading-relaxed text-[#6f5c4f]">
            {message}
          </p>
          
          <div className="flex items-center gap-2 text-xs font-medium text-[#b39c8c] pt-1">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-[#8f6249]" />
            <span>{date}</span>
          </div>
        </div>

        {/* Right: Profile Anchor */}
        <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2.5">
          <div className="relative">
            <Avatar className="h-16 w-16 border border-[#eadfd4] bg-[#fffaf6] sm:h-20 sm:w-20 rounded-full">
              <AvatarImage src="" alt={mockUser.name} />
              <AvatarFallback className="bg-[#fffaf6] font-serif text-[#8f6249] text-xl font-semibold sm:text-2xl">
                {mockUser.initials}
              </AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-1 block h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          
          <div className="text-left sm:text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#b39c8c]">Status</p>
            <p className="text-xs font-semibold text-[#6f5c4f] mt-0.5">Active Learner</p>
          </div>
        </div>

      </div>
    </div>
  );
}