import { Course } from "./definations";
export const courses: Course[] = [
  {
    id: 1,
    slug: "foundations-of-emotional-healing",
    title: "Foundations of Emotional Healing",
    shortDescription:
      "A gentle introduction to understanding emotions, self-compassion, and nervous-system care.",
    fullDescription:
      "This beginner-friendly course introduces emotional healing through self-awareness, compassion, grounding practices, and nervous-system care techniques.",
    category: "Healing",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    difficulty: "Beginner",
    duration: "4 weeks",
    lessons: 18,
    price: "KES 4,500",
    features: [
      "Self-compassion practices",
      "Grounding techniques",
      "Emotional awareness",
      "Reflection exercises",
    ],
    chapters: [
      {
        id: "c1-ch1",
        number: 1,
        title: "Understanding Emotional Healing",
        lessons: [
          {
            id: "c1-l1",
            title: "Introduction to Healing",
            subtitle: "Starting your emotional wellness journey",
            duration: "12 mins",
          },
          {
            id: "c1-l2",
            title: "Recognizing Emotional Patterns",
            subtitle: "Understanding your emotional responses",
            duration: "15 mins",
          },
        ],
      },
      {
        id: "c1-ch2",
        number: 2,
        title: "Practicing Self-Compassion",
        lessons: [
          {
            id: "c1-l3",
            title: "Building Self-Kindness",
            subtitle: "Learning to care for yourself gently",
            duration: "14 mins",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "mindful-grief-support",
    title: "Mindful Grief Support",
    shortDescription:
      "Supportive practices for processing loss, honoring memory, and rebuilding inner steadiness.",
    fullDescription:
      "This course provides gentle support for navigating grief using mindfulness, reflection, and emotional grounding tools.",
    category: "Grief Care",
    imageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80",
    difficulty: "All Levels",
    duration: "5 weeks",
    lessons: 22,
    price: "KES 5,500",
    features: [
      "Mindfulness practices",
      "Guided reflection",
      "Emotional grounding",
      "Supportive journaling",
    ],
    chapters: [
      {
        id: "c2-ch1",
        number: 1,
        title: "Understanding Grief",
        lessons: [
          {
            id: "c2-l1",
            title: "The Nature of Loss",
            subtitle: "Exploring the emotional impact of grief",
            duration: "13 mins",
          },
          {
            id: "c2-l2",
            title: "Making Space for Emotions",
            subtitle: "Allowing yourself to feel safely",
            duration: "16 mins",
          },
        ],
      },
      {
        id: "c2-ch2",
        number: 2,
        title: "Healing Through Reflection",
        lessons: [
          {
            id: "c2-l3",
            title: "Honoring Memories",
            subtitle: "Reflective practices for remembrance",
            duration: "15 mins",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "somatic-breathwork-for-calm",
    title: "Somatic Breathwork for Calm",
    shortDescription:
      "Breath, body awareness, and grounding tools for stress relief and emotional regulation.",
    fullDescription:
      "Learn calming breathwork and somatic techniques designed to regulate stress and reconnect you with your body.",
    category: "Somatics",
    imageUrl:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80",
    difficulty: "Beginner",
    duration: "3 weeks",
    lessons: 14,
    price: "KES 3,800",
    features: [
      "Breathwork exercises",
      "Body awareness",
      "Stress regulation",
      "Grounding routines",
    ],
    chapters: [
      {
        id: "c3-ch1",
        number: 1,
        title: "Breath as a Tool",
        lessons: [
          {
            id: "c3-l1",
            title: "Foundations of Breathwork",
            subtitle: "Using breath for calm and focus",
            duration: "10 mins",
          },
          {
            id: "c3-l2",
            title: "Body Awareness Practice",
            subtitle: "Connecting with physical sensations",
            duration: "12 mins",
          },
        ],
      },
      {
        id: "c3-ch2",
        number: 2,
        title: "Regulating Stress",
        lessons: [
          {
            id: "c3-l3",
            title: "Grounding Techniques",
            subtitle: "Simple methods for emotional balance",
            duration: "14 mins",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    slug: "inner-child-restoration",
    title: "Inner Child Restoration",
    shortDescription:
      "Reflective lessons and guided practices for reconnecting with younger parts of yourself.",
    fullDescription:
      "Explore emotional healing through reflective exercises that help you reconnect with younger parts of yourself compassionately.",
    category: "Self Discovery",
    imageUrl:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=80",
    difficulty: "Intermediate",
    duration: "6 weeks",
    lessons: 26,
    price: "KES 6,500",
    features: [
      "Reflective healing exercises",
      "Guided visualization",
      "Emotional awareness",
      "Self-reconnection practices",
    ],
    chapters: [
      {
        id: "c4-ch1",
        number: 1,
        title: "Meeting Your Inner Child",
        lessons: [
          {
            id: "c4-l1",
            title: "Understanding the Inner Child",
            subtitle: "Learning the foundations of inner child work",
            duration: "15 mins",
          },
          {
            id: "c4-l2",
            title: "Creating Emotional Safety",
            subtitle: "Building trust within yourself",
            duration: "18 mins",
          },
        ],
      },
      {
        id: "c4-ch2",
        number: 2,
        title: "Healing and Reconnection",
        lessons: [
          {
            id: "c4-l3",
            title: "Compassionate Reflection",
            subtitle: "Releasing shame and reconnecting gently",
            duration: "17 mins",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    slug: "journaling-for-clarity",
    title: "Journaling for Clarity",
    shortDescription:
      "Structured prompts and rituals to help you process thoughts, patterns, and decisions.",
    fullDescription:
      "Develop a mindful journaling practice that supports emotional clarity, self-reflection, and intentional decision-making.",
    category: "Reflection",
    imageUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    difficulty: "All Levels",
    duration: "2 weeks",
    lessons: 10,
    price: "KES 2,500",
    features: [
      "Guided prompts",
      "Reflection exercises",
      "Mindful writing",
      "Daily journaling rituals",
    ],
    chapters: [
      {
        id: "c5-ch1",
        number: 1,
        title: "Starting a Journaling Practice",
        lessons: [
          {
            id: "c5-l1",
            title: "Why Journaling Helps",
            subtitle: "Understanding reflective writing",
            duration: "9 mins",
          },
          {
            id: "c5-l2",
            title: "Creating a Safe Writing Space",
            subtitle: "Building a consistent journaling habit",
            duration: "11 mins",
          },
        ],
      },
      {
        id: "c5-ch2",
        number: 2,
        title: "Writing for Clarity",
        lessons: [
          {
            id: "c5-l3",
            title: "Exploring Thought Patterns",
            subtitle: "Recognizing emotions and beliefs",
            duration: "12 mins",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    slug: "sacred-boundaries",
    title: "Sacred Boundaries",
    shortDescription:
      "Learn how to name your needs, communicate clearly, and protect your peace with care.",
    fullDescription:
      "A supportive course focused on creating healthy boundaries, improving communication, and protecting emotional well-being.",
    category: "Relationships",
    imageUrl:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=900&q=80",
    difficulty: "Intermediate",
    duration: "4 weeks",
    lessons: 16,
    price: "KES 4,800",
    features: [
      "Healthy communication",
      "Boundary-setting tools",
      "Relationship awareness",
      "Conflict navigation",
    ],
    chapters: [
      {
        id: "c6-ch1",
        number: 1,
        title: "Understanding Boundaries",
        lessons: [
          {
            id: "c6-l1",
            title: "What Healthy Boundaries Look Like",
            subtitle: "Learning the basics of emotional boundaries",
            duration: "13 mins",
          },
          {
            id: "c6-l2",
            title: "Recognizing Overextension",
            subtitle: "Understanding burnout and people-pleasing",
            duration: "15 mins",
          },
        ],
      },
      {
        id: "c6-ch2",
        number: 2,
        title: "Communicating Needs Clearly",
        lessons: [
          {
            id: "c6-l3",
            title: "Speaking with Confidence",
            subtitle: "Expressing your needs respectfully",
            duration: "14 mins",
          },
        ],
      },
    ],
  },
];