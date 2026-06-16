import { Course } from "./definations";

export const courses: Course[] = [
  {
    id: 1,
    slug: "foundations-of-emotional-healing",
    title: "Foundations of Emotional Healing",
    shortDescription: "A gentle introduction to understanding emotions...",
    fullDescription: "This beginner-friendly course...",
    category: "Healing", // Make sure this exact string is defined in Category!
    imageUrl: "https://images.unsplash.com/...",
    difficulty: "Beginner",
    duration: "4 weeks",
    lessons: 18,
    price: "KES 4,500",
    features: ["Self-compassion practices", "Grounding techniques"],
    chapters: [
      {
        id: 101, // Changed from "c1-ch1" to a unique number
        number: 1,
        title: "Understanding Emotional Healing",
        lessons: [
          {
            id: 1011, // Changed from "c1-l1" to a unique number
            title: "Introduction to Healing",
            subtitle: "Starting your emotional wellness journey",
            duration: "12 mins",
            contentype: "video",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            textContent: "Welcome to your somatic journey..."
          }
        ]
      }
    ]
  }
  // Repeat numeric adjustments for all other courses...
];