import * as React from "react";
import { cn } from "../../lib/utils";

export interface ChipItem {
  label: string;
  value: string;
}

export interface ChipsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: ChipItem[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
}

const Chips = React.forwardRef<HTMLDivElement, ChipsProps>(
  (
    {
      items,
      value,
      defaultValue = [],
      onValueChange,
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] =
      React.useState<string[]>(defaultValue);
    const isControlled = value !== undefined;
    const selected = isControlled ? value : internalValue;

    const toggleChip = (chipValue: string) => {
      if (disabled) return;
      const next = selected.includes(chipValue)
        ? selected.filter((v) => v !== chipValue)
        : [...selected, chipValue];

      if (!isControlled) {
        setInternalValue(next);
      }
      onValueChange?.(next);
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap gap-2", className)}
        {...props}
      >
        {items.map((item) => {
          const isSelected = selected.includes(item.value);
          return (
            <button
              key={item.value}
              type="button"
              disabled={disabled}
              aria-pressed={isSelected}
              onClick={() => toggleChip(item.value)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                isSelected
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    );
  },
);
Chips.displayName = "Chips";

export { Chips };
