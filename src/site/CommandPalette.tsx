import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Component, Moon, Sun } from "lucide-react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "../components/ui/command";
import { registry, CATEGORY_ORDER } from "./registry";
import { useTheme } from "./theme-provider";

export interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange: setOpen }: CommandPaletteProps) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, setOpen]);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search components, guide, actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => go("/guide")}>
            <BookOpen />
            Open guide
          </CommandItem>
          <CommandItem
            onSelect={() => {
              toggleTheme();
              setOpen(false);
            }}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            Toggle {theme === "dark" ? "light" : "dark"} mode
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.open("https://github.com/dextor-io/component.dextor.io", "_blank");
              setOpen(false);
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.29-1.24-1.64-1.24-1.64-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.12 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.76.54A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
            </svg>
            View on GitHub
          </CommandItem>
        </CommandGroup>
        {CATEGORY_ORDER.map((category) => {
          const items = registry.filter((entry) => entry.category === category);
          if (items.length === 0) return null;
          return (
            <React.Fragment key={category}>
              <CommandSeparator />
              <CommandGroup heading={category}>
                {items.map((entry) => (
                  <CommandItem
                    key={entry.slug}
                    value={entry.title}
                    onSelect={() => go(`/components/${entry.slug}`)}
                  >
                    <Component />
                    {entry.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
}
