import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "../../lib/utils";

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
} as const;

export interface RatingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  max?: number;
  size?: keyof typeof sizeClasses;
  disabled?: boolean;
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value,
      defaultValue = 0,
      onValueChange,
      max = 5,
      size = "md",
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);
    const isControlled = value !== undefined;
    const rating = isControlled ? value : internalValue;

    const setRating = (next: number) => {
      if (disabled) return;
      if (!isControlled) {
        setInternalValue(next);
      }
      onValueChange?.(next);
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLButtonElement>,
      index: number,
    ) => {
      if (disabled) return;
      let nextIndex: number | null = null;
      if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        nextIndex = Math.min(max - 1, index + 1);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
        nextIndex = Math.max(0, index - 1);
      }
      if (nextIndex !== null) {
        event.preventDefault();
        setRating(nextIndex + 1);
        const buttons =
          event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
            "[role='radio']",
          );
        buttons?.[nextIndex]?.focus();
      }
    };

    const displayValue = hoverValue ?? rating;

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label="Rating"
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        {Array.from({ length: max }, (_, index) => {
          const starValue = index + 1;
          const isChecked = starValue === rating;
          const isFilled = starValue <= displayValue;
          return (
            <button
              key={index}
              type="button"
              role="radio"
              aria-checked={isChecked}
              aria-label={`Rate ${starValue} star${starValue === 1 ? "" : "s"}`}
              tabIndex={starValue === Math.max(rating, 1) ? 0 : -1}
              disabled={disabled}
              onClick={() => setRating(starValue)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onMouseEnter={() => !disabled && setHoverValue(starValue)}
              onMouseLeave={() => !disabled && setHoverValue(null)}
              className={cn(
                "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
                disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
              )}
            >
              <Star
                className={cn(
                  sizeClasses[size],
                  isFilled
                    ? "fill-primary text-primary"
                    : "fill-transparent text-muted-foreground",
                )}
              />
            </button>
          );
        })}
      </div>
    );
  },
);
Rating.displayName = "Rating";

export { Rating };
