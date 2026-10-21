"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  className?: string;
}

// The <html data-theme> attribute is the single source of truth. It is set before
// first paint by the inline script in the locale layout.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

// Matches the server-rendered attribute, so hydration never mismatches.
function getServerSnapshot(): Theme {
  return "dark";
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Storage unavailable or disabled
    }
  };

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-muted hover:border-border-strong transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-warning" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-brand-blue" aria-hidden="true" />
      )}
    </button>
  );
}
