export function formatDate(dateInput: string | Date): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  
  return date.toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

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