export function getTimeUntil(dateStr: string) {
  const now = new Date();
  const target = new Date(dateStr);
  const diff = target.getTime() - now.getTime();
  if (diff < 0) return "Session passed";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  if (days > 0) return `In ${days}d ${hours}h`;
  if (hours > 0) return `In ${hours}h ${mins}m`;
  return `In ${mins}m`;
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
