export const reflections = [
  {
    title: "The Practice of Returning",
    duration: "Guided meditation",
    youtubeId: "vC5QX85IjD8",
    poster: "/images/hero-lotus-real.png",
  },
  {
    title: "When Silence Feels Uncomfortable",
    duration: "1 minute",
    youtubeId: "gctFXL1ndrI",
    poster: "/images/bg.webp",
  },
  {
    title: "Meeting the Inner Shadow",
    duration: "Shadow work",
    youtubeId: "Dz2n_9CnPc0",
    poster: "/images/story-img3.webp",
  },
];

export const reflectionStyles = [
  {
    accent: "#c6a15b",
    number: "rgba(198,161,91,0.62)",
    glow: "rgba(198,161,91,0.32)",
  },
  {
    accent: "#8c7f62",
    number: "rgba(140,127,98,0.7)",
    glow: "rgba(140,127,98,0.34)",
  },
  {
    accent: "#b58f54",
    number: "rgba(181,143,84,0.68)",
    glow: "rgba(181,143,84,0.34)",
  },
];

export const writings = [
  {
    category: "Inner Work",
    title: "The Silence Beneath the Noise",
    excerpt:
      "There is a part of you that has never been hurried, frightened or lost. Stillness is how you begin to hear it again.",
  },
  {
    category: "Shadow Work",
    title: "What the Darkness Is Asking You to See",
    excerpt:
      "The inner shadow is not an enemy. It is a messenger carrying the parts of you waiting to be met with compassion.",
  },
  {
    category: "Reflection",
    title: "Rest Is Not a Reward",
    excerpt:
      "You do not have to earn the right to pause. Rest is part of the rhythm that allows your spirit to remain whole.",
  },
];

export const quotes = [
  "Silence is where truth speaks.",
  "Stillness is not withdrawal. It is a return.",
  "The quiet within you has never left.",
];

export type Reflection = (typeof reflections)[number];
