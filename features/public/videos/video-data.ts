export type PublicVideo = {
  id: number;
  title: string;
  category: "Stillness" | "Shadow Work" | "Breath" | "Rest";
  description: string;
  youtubeId: string;
  duration: string;
  date: string;
  poster: string;
};

export const publicVideos: PublicVideo[] = [
  {
    id: 1,
    title: "The Practice of Returning",
    category: "Stillness",
    description:
      "A quiet guided practice for finding your way back to breath, body, and the part of you that has not been rushed by the world.",
    youtubeId: "vC5QX85IjD8",
    duration: "Guided meditation",
    date: "Temple of Stillness",
    poster: "/images/hero-lotus-real.png",
  },
  {
    id: 2,
    title: "When Silence Feels Uncomfortable",
    category: "Stillness",
    description:
      "A short reflection on meeting silence without forcing it to become peaceful right away.",
    youtubeId: "gctFXL1ndrI",
    duration: "1 minute",
    date: "Reflection Pool",
    poster: "/images/bg.webp",
  },
  {
    id: 3,
    title: "Meeting the Inner Shadow",
    category: "Shadow Work",
    description:
      "An invitation to listen to the hidden parts of the self with gentleness instead of judgment.",
    youtubeId: "Dz2n_9CnPc0",
    duration: "Shadow work",
    date: "Inner Chamber",
    poster: "/images/story-img3.webp",
  },
  {
    id: 4,
    title: "Breath Before the Threshold",
    category: "Breath",
    description:
      "A grounding breath sequence for settling the nervous system before entering deeper inner work.",
    youtubeId: "inpok4MKVLM",
    duration: "5 minutes",
    date: "Breath Practice",
    poster: "/images/lotus.png",
  },
  {
    id: 5,
    title: "Rest Is Not a Reward",
    category: "Rest",
    description:
      "A tender reminder that rest belongs inside healing, not after everything else has been completed.",
    youtubeId: "ZToicYcHIOU",
    duration: "10 minutes",
    date: "Rest Practice",
    poster: "/images/newscroll.webp",
  },
];

export const videoCategories = ["All", "Stillness", "Shadow Work", "Breath", "Rest"] as const;

export type VideoCategory = (typeof videoCategories)[number];
