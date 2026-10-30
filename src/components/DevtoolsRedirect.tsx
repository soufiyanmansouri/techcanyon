"use client";

import { useEffect } from "react";

const REDIRECT = "https://www.google.com/";

function isLocalHost(): boolean {
  if (typeof window === "undefined") return true;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host === "::1";
}

/** Soft DevTools deterrent — redirect to Google. Off on localhost. */
export function DevtoolsRedirect() {
  useEffect(() => {
    if (isLocalHost()) return;

    let fired = false;
    const bail = () => {
      if (fired) return;
      fired = true;
      window.location.replace(REDIRECT);
    };

    const threshold = 160;
    const checkDocked = () => {
      const widthGap = Math.abs(window.outerWidth - window.innerWidth);
      const heightGap = Math.abs(window.outerHeight - window.innerHeight);
      if (widthGap > threshold || heightGap > threshold) bail();
    };

    const checkDebugger = () => {
      const start = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      if (performance.now() - start > 100) bail();
    };

    checkDocked();
    const dockId = window.setInterval(checkDocked, 700);
    const dbgId = window.setInterval(checkDebugger, 2000);
    window.addEventListener("resize", checkDocked);

    return () => {
      window.clearInterval(dockId);
      window.clearInterval(dbgId);
      window.removeEventListener("resize", checkDocked);
    };
  }, []);

  return null;
}
