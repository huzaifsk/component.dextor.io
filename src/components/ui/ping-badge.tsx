import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const dotColorVariants = cva("rounded-full", {
  variants: {
    variant: {
      default: "bg-primary",
      destructive: "bg-destructive",
      success: "bg-success",
    },
  },
  defaultVariants: { variant: "destructive" },
});

const positionVariants = cva("absolute flex h-2.5 w-2.5", {
  variants: {
    position: {
      "top-right": "-top-0.5 -right-0.5",
      "top-left": "-top-0.5 -left-0.5",
      "bottom-right": "-bottom-0.5 -right-0.5",
      "bottom-left": "-bottom-0.5 -left-0.5",
    },
  },
  defaultVariants: { position: "top-right" },
});

export interface PingBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dotColorVariants>,
    VariantProps<typeof positionVariants> {
  /** Whether the badge is shown at all. */
  show?: boolean;
}

const PingBadge = React.forwardRef<HTMLDivElement, PingBadgeProps>(
  ({ className, show = true, position, variant, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative inline-flex", className)} {...props}>
        {children}
        {show && (
          <span className={cn(positionVariants({ position }))}>
            <span
              className={cn(
                "absolute inset-0 inline-flex animate-ping rounded-full opacity-75",
                dotColorVariants({ variant }),
              )}
            />
            <span
              className={cn(
                "relative inline-flex h-2.5 w-2.5 rounded-full",
                dotColorVariants({ variant }),
              )}
            />
          </span>
        )}
      </div>
    );
  },
);
PingBadge.displayName = "PingBadge";

export { PingBadge };
