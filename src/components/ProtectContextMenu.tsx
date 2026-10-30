"use client";

import { useEffect, type ReactNode } from "react";

/** Blocks right-click while mounted (soft deterrent). */
export function ProtectContextMenu({ children }: { children: ReactNode }) {
  useEffect(() => {
    const blockMenu = (event: Event) => event.preventDefault();
    const blockKeys = (event: KeyboardEvent) => {
      if (
        event.key === "F12" ||
        (event.ctrlKey &&
          event.shiftKey &&
          ["I", "J", "C"].includes(event.key.toUpperCase())) ||
        (event.metaKey &&
          event.altKey &&
          ["I", "J", "C"].includes(event.key.toUpperCase()))
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    document.addEventListener("contextmenu", blockMenu, true);
    document.addEventListener("keydown", blockKeys, true);
    return () => {
      document.removeEventListener("contextmenu", blockMenu, true);
      document.removeEventListener("keydown", blockKeys, true);
    };
  }, []);

  return <>{children}</>;
}
