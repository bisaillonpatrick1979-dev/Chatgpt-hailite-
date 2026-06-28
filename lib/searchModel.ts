export type SearchResult = {
  id: string;
  type: "client" | "project" | "worker" | "document" | "tool";
  title: string;
  subtitle?: string;
};

export function filterResults(results: SearchResult[], query: string) {
  const q = query.toLowerCase();
  return results.filter((item) => item.title.toLowerCase().includes(q) || item.subtitle?.toLowerCase().includes(q));
}
