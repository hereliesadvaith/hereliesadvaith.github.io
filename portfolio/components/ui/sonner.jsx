"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-primary)",
          "--normal-text": "var(--color-white)",
          "--normal-border": "var(--color-accent-default)"
        }
      }
      {...props} />
  );
}

export { Toaster }
