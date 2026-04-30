"use client";

import { useEffect } from "react";
import { INTERCOM_APP_ID } from "@/lib/constants";

type IntercomCommand = [string, ...unknown[]];

interface IntercomFn {
  (...args: IntercomCommand): void;
  q?: IntercomCommand[];
  c?: (args: IntercomCommand) => void;
}

declare global {
  interface Window {
    Intercom?: IntercomFn;
    intercomSettings?: Record<string, unknown>;
  }
}

/**
 * IntercomMessenger — boots the Intercom Messenger site-wide.
 * Mount once in app/layout.tsx. The standard Intercom queue/shim is set
 * up so calls like window.Intercom('show') from anywhere in the app
 * queue and replay once the widget script has loaded.
 */
export function IntercomMessenger() {
  useEffect(() => {
    if (typeof window === "undefined" || !INTERCOM_APP_ID) return;

    const w = window;

    w.intercomSettings = {
      app_id: INTERCOM_APP_ID,
    };

    const existing = w.Intercom;
    if (typeof existing === "function") {
      existing("reattach_activator");
      existing("update", w.intercomSettings);
      return;
    }

    const i = function (...args: IntercomCommand) {
      i.c?.(args);
    } as IntercomFn;
    i.q = [];
    i.c = function (args: IntercomCommand) {
      i.q?.push(args);
    };
    w.Intercom = i;

    const load = () => {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = `https://widget.intercom.io/widget/${INTERCOM_APP_ID}`;
      document.head.appendChild(s);
    };

    if (document.readyState === "complete") {
      load();
    } else {
      window.addEventListener("load", load, { once: true });
    }

    return () => {
      w.Intercom?.("shutdown");
    };
  }, []);

  return null;
}

/** Open the Intercom messenger from anywhere. Safe to call on SSR. */
export function showIntercom() {
  if (typeof window === "undefined") return;
  window.Intercom?.("show");
}
