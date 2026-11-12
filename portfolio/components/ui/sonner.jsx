"use client";

import { Toaster as Sonner } from "sonner";

const Toaster = (props) => (
  <Sonner
    theme="light"
    className="toaster group"
    style={{
      "--normal-bg": "var(--color-paper)",
      "--normal-text": "var(--color-ink)",
      "--normal-border": "var(--color-line)",
    }}
    {...props}
  />
);

export { Toaster };
