import * as React from "react";
import { cn } from "../../lib/utils";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Seconds for one full loop. */
  speed?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, children, speed = 28, pauseOnHover = true, reverse = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("overflow-hidden mask-fade-x", pauseOnHover && "group/marquee", className)}
        {...props}
      >
        <div
          className={cn("flex w-max animate-marquee gap-10", reverse && "[animation-direction:reverse]")}
          style={{ animationDuration: `${speed}s` }}
        >
          {children}
          {children}
        </div>
      </div>
    );
  },
);
Marquee.displayName = "Marquee";

export { Marquee };
