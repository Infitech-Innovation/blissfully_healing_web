export interface JourneyMilestone {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  category: "retreat" | "course" | "circle" | "reflection";
  focusMarker?: string; 
}

export interface ReflectionLog {
  id: string;
  date: string;
  prompt: string;
  excerpt: string;
  integrationPractice: string;
}


export const journeyTimeline: JourneyMilestone[] = [
  {
    id: "m-4",
    date: "Jun 2026",
    title: "Embodied Presence & Boundaries",
    subtitle: "Completed Core Track Module II",
    description: "Shifted focus from analytical tracking to physical sensation anchoring. Noted consistent grounding during intentional morning transition spaces.",
    category: "course",
    focusMarker: "Somatic Grounding"
  },
  {
    id: "m-3",
    date: "May 2026",
    title: "Forest Renewal Gathering",
    subtitle: "Somatic Retreat Experience",
    description: "Three days of silent walking and relational processing. Experienced a profound shift in breath spaciousness during the final sound integration circle.",
    category: "retreat",
    focusMarker: "Nature Integration"
  },
  {
    id: "m-2",
    date: "Apr 2026",
    title: "Stepping into Shared Space",
    subtitle: "Joined Gentle Grief Circle",
    description: "Shared personal history aloud without trying to fix or alter the narrative. Felt safe and deeply witnessed by the community framework.",
    category: "circle",
    focusMarker: "Communal Witness"
  },
  {
    id: "m-1",
    date: "Mar 2026",
    title: "The Threshold Crossover",
    subtitle: "Began Sanctuary Commitments",
    description: "Set conscious boundaries on digital space and dedicated the first hour of each morning to processing, stillness, and breath tracking.",
    category: "reflection",
    focusMarker: "Intention Setting"
  }
];

export const historicalReflections: ReflectionLog[] = [
  {
    id: "ref-2",
    date: "June 04, 2026",
    prompt: "What is your body holding onto that your mind claims it has processed?",
    excerpt: "Discovered physical tension lingering around my shoulders during the breath patterns. The intellectual narrative felt resolved, but the muscle memory required active release work.",
    integrationPractice: "5-minute daily shoulder grounding drop"
  },
  {
    id: "ref-1",
    date: "May 18, 2026",
    prompt: "Identify the spaces where you routinely sacrifice structural alignment for comfort.",
    excerpt: "Realized I over-commit during evening hours out of old habits. True alignment means honoring fatigue exactly when it arises rather than working through it.",
    integrationPractice: "Evening digital power-down by 9:00 PM"
  }
];
