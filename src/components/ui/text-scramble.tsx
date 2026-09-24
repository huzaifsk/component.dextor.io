import * as React from "react";
import { cn } from "../../lib/utils";

const DEFAULT_CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export interface TextScrambleProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  text: string;
  /** Scramble on mount, or wait for a hover to start the effect. */
  trigger?: "mount" | "hover";
  duration?: number;
  characters?: string;
}

const TextScramble = React.forwardRef<HTMLSpanElement, TextScrambleProps>(
  (
    { text, trigger = "mount", duration = 900, characters = DEFAULT_CHARACTERS, className, ...props },
    ref,
  ) => {
    const [display, setDisplay] = React.useState(trigger === "mount" ? "" : text);
    const frameRef = React.useRef<number>();

    const scramble = React.useCallback(() => {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(text);
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const revealCount = Math.floor(progress * text.length);
        let out = "";
        for (let i = 0; i < text.length; i++) {
          if (i < revealCount || text[i] === " ") out += text[i];
          else out += characters[Math.floor(Math.random() * characters.length)];
        }
        setDisplay(out);
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(step);
        } else {
          setDisplay(text);
        }
      };
      cancelAnimationFrame(frameRef.current ?? 0);
      frameRef.current = requestAnimationFrame(step);
    }, [text, duration, characters]);

    React.useEffect(() => {
      if (trigger === "mount") scramble();
      return () => cancelAnimationFrame(frameRef.current ?? 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger, text]);

    const handlers = trigger === "hover" ? { onMouseEnter: scramble } : {};

    return (
      <span
        ref={ref}
        className={cn("inline-block font-mono tabular-nums", className)}
        {...handlers}
        {...props}
      >
        {display}
      </span>
    );
  },
);
TextScramble.displayName = "TextScramble";

export { TextScramble };
