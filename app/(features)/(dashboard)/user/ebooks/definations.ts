// definitions.ts
export interface EBook {
  slug: string;
  title: string;
  author: string;
  coverImage: string;
  tag: string;
  desc: string;
  purchaseDate: string;
  pricePaid: string;
  fileSize: string;
  format: "PDF" | "EPUB" | "MOBI";
  fileUrl: string;
  pages: number;
  chapters: string[];
}

export const purchasedEBooks: EBook[] = [
  {
    slug: "somatic-grounding-guide",
    tag: "Integration Guide",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    title: "Somatic Grounding: Body Practices for Integration",
    author: "Altar & Earth Press",
    desc: "A comprehensive manual containing 24 somatic movements, breath architecture charts, and sensory prompts designed to ground the nervous system post-retreat.",
    purchaseDate: "May 14, 2026",
    pricePaid: "KES 2,400",
    fileSize: "14.2 MB",
    format: "PDF",
    fileUrl: "https://pdfobject.com/pdf/sample.pdf",
    pages: 148,
    chapters: ["The Physiology of Pause", "Sensory Tracking Blueprints", "Daily Breath Rhythms", "Somatic Grounding Anchors"]
  },
  {
    slug: "emotional-spaciousness-journal",
    tag: "Guided Journal",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
    title: "The Architecture of Emotional Spaciousness",
    author: "M. Wanjiku",
    desc: "A collection of 40 profound journaling vectors and deep self-inquiry loops to map out internal transitions and build long-term emotional capacity.",
    purchaseDate: "April 02, 2026",
    pricePaid: "KES 1,850",
    fileSize: "8.7 MB",
    format: "EPUB",
    fileUrl: "",
    pages: 92,
    chapters: ["Mapping the Tension", "Constructing the Soft Margin", "The Language of Rest", "Grounded Sovereignty"]
  }
];



