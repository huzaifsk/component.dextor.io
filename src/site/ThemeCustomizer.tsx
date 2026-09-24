import * as React from "react";
import { Check, Palette } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const ACCENTS = [
  { name: "Zinc", value: null },
  { name: "Blue", value: "221 83% 53%" },
  { name: "Violet", value: "262 83% 58%" },
  { name: "Green", value: "142 71% 45%" },
  { name: "Rose", value: "346 77% 49%" },
  { name: "Orange", value: "24 95% 53%" },
] as const;

const STORAGE_KEY = "dextor-accent";

function applyAccent(value: string | null) {
  const root = document.documentElement;
  if (value) {
    root.style.setProperty("--primary", value);
    root.style.setProperty("--primary-foreground", "0 0% 100%");
    root.style.setProperty("--ring", value);
  } else {
    root.style.removeProperty("--primary");
    root.style.removeProperty("--primary-foreground");
    root.style.removeProperty("--ring");
  }
}

export function ThemeCustomizer() {
  const [accent, setAccent] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setAccent(stored);
        applyAccent(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  const choose = (value: string | null) => {
    setAccent(value);
    applyAccent(value);
    try {
      if (value) localStorage.setItem(STORAGE_KEY, value);
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-5 right-5 z-30 h-11 w-11 rounded-full shadow-lg"
          aria-label="Customize theme color"
        >
          <Palette className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56">
        <p className="text-sm font-medium">Accent color</p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Live-updates the --primary token.
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {ACCENTS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => choose(preset.value)}
              className="flex flex-col items-center gap-1.5 rounded-md p-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full border border-border transition-transform duration-150 hover:scale-110",
                  accent === preset.value && "ring-2 ring-ring ring-offset-2 ring-offset-popover",
                )}
                style={{
                  backgroundColor: `hsl(${preset.value ?? "240 5% 50%"})`,
                }}
              >
                {accent === preset.value && (
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                )}
              </span>
              {preset.name}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
