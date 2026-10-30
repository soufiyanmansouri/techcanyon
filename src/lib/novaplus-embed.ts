/** Nova+ origin that hosts `/embed/play` for opaque handoffs. */
export function novaPlusEmbedOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_NOVAPLUS_ORIGIN?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return "https://novaplus.app";
}

export function novaPlusEmbedPlayUrl(sealedToken: string): string {
  const target = new URL("/embed/play", `${novaPlusEmbedOrigin()}/`);
  target.searchParams.set("p", sealedToken);
  return target.toString();
}
