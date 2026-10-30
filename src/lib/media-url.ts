/** True when `v` looks like a browser-playable mp4 / m3u8 URL. */
export function isAllowedMediaUrl(raw: string): boolean {
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return false;
    const path = url.pathname.toLowerCase();
    const full = url.href.toLowerCase();
    return (
      path.endsWith(".mp4") ||
      path.endsWith(".webm") ||
      path.endsWith(".m3u8") ||
      path.includes(".m3u8") ||
      path.includes(".urlset") ||
      path.includes("/hls/") ||
      path.includes("/stream/") ||
      full.includes(".m3u8") ||
      full.includes("mpegurl") ||
      url.search.toLowerCase().includes("m3u8") ||
      url.search.toLowerCase().includes("mp4")
    );
  } catch {
    return false;
  }
}
