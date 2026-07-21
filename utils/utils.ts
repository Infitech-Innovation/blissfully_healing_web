export const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));


export function getTimeUntil(dateInput: string | Date): string {
  const targetDate = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  const now = new Date();
  
  // Strip hours to calculate true calendar day differences accurately
  const targetMidnight = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
  const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  const diffTime = targetMidnight.getTime() - nowMidnight.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Past";
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays < 7) return `${diffDays} days`;
  if (diffDays < 14) return "1 week";

  return `${Math.floor(diffDays / 7)} weeks`;
}
