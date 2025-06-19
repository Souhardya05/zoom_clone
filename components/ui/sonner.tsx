"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "#1c1f2e",
          "--normal-text": "#fff",
          "--normal-border": "none",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
