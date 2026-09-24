import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "../../lib/utils";

export interface ExpandingSearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue" | "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const ExpandingSearch = React.forwardRef<HTMLInputElement, ExpandingSearchProps>(
  (
    { value, defaultValue = "", onValueChange, placeholder = "Search…", className, ...props },
    forwardedRef,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [expanded, setExpanded] = React.useState(false);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const setRefs = React.useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef)
          (forwardedRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
      },
      [forwardedRef],
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(event.target.value);
      onValueChange?.(event.target.value);
    };

    const handleIconClick = () => {
      setExpanded(true);
      requestAnimationFrame(() => inputRef.current?.focus());
    };

    const handleBlur = () => {
      if (!currentValue) setExpanded(false);
    };

    const handleClear = () => {
      if (!isControlled) setInternalValue("");
      onValueChange?.("");
      inputRef.current?.focus();
    };

    return (
      <div
        className={cn(
          "flex h-9 items-center rounded-md border border-input bg-background transition-[width] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
          expanded ? "w-56" : "w-9",
          className,
        )}
      >
        <button
          type="button"
          aria-label="Search"
          onClick={handleIconClick}
          className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <Search className="h-4 w-4" />
        </button>
        <input
          ref={setRefs}
          type="text"
          value={currentValue}
          onChange={handleChange}
          onFocus={() => setExpanded(true)}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={cn(
            "h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground transition-opacity duration-200",
            expanded ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          {...props}
        />
        {expanded && currentValue && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={handleClear}
            className="flex h-9 w-8 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  },
);
ExpandingSearch.displayName = "ExpandingSearch";

export { ExpandingSearch };
