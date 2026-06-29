
export type FAQCAT = "journey" | "retreats" | "technical";
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCAT;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "journey",
    question: "What is somatic tracking and how does it affect my progress metric?",
    answer: "Somatic tracking measures your active physical grounding hours and nervous system integration exercises. Unlike linear task managers, this metric values consistency and deep presence over fast-paced progression."
  },
  {
    id: "faq-2",
    category: "retreats",
    question: "How do I update or modify my booked retreat itineraries safely?",
    answer: "You can view booked itineraries directly inside your Sanctuary Dashboard. For alterations to arrival dates or custom meal integrations, you can submit a support ticket below or connect directly with your dedicated coordinator."
  },
  {
    id: "faq-3",
    category: "journey",
    question: "Are my integration logs and personal reflection journal data private?",
    answer: "Yes, entirely. All written reflections, somatic markers, and personal bio details are encrypted end-to-end to protect the psychological safety of your processing workspace."
  },
  {
    id: "faq-4",
    category: "technical",
    question: "Can I temporarily deactivate my profile structure without losing my history?",
    answer: "Absolutely. If you choose to temporarily pause your journey, your historical milestones, course accomplishments, and journal ledgers will be held securely until you choose to step back into the sanctuary framework."
  }
];