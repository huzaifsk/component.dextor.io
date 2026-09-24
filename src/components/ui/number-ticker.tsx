import * as React from "react";
import { cn } from "../../lib/utils";

export interface NumberTickerProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

const NumberTicker = React.forwardRef<HTMLSpanElement, NumberTickerProps>(
  ({ value, duration = 800, decimals = 0, prefix = "", suffix = "", className, ...props }, ref) => {
    const [display, setDisplay] = React.useState(value);
    const fromRef = React.useRef(value);
    const frameRef = React.useRef<number>();

    React.useEffect(() => {
      const from = fromRef.current;
      const to = value;
      if (from === to) return;

      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(to);
        fromRef.current = to;
        return;
      }

      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = easeOutQuart(progress);
        setDisplay(from + (to - from) * eased);
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(step);
        } else {
          fromRef.current = to;
        }
      };
      cancelAnimationFrame(frameRef.current ?? 0);
      frameRef.current = requestAnimationFrame(step);
      return () => cancelAnimationFrame(frameRef.current ?? 0);
    }, [value, duration]);

    return (
      <span ref={ref} className={cn("tabular-nums", className)} {...props}>
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </span>
    );
  },
);
NumberTicker.displayName = "NumberTicker";

export { NumberTicker };
