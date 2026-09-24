import * as React from "react";
import { cn } from "../../lib/utils";

export interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum rotation in degrees at the card's edge. */
  maxTilt?: number;
  /** Show a radial glare that follows the cursor. */
  glare?: boolean;
}

const TiltCard = React.forwardRef<HTMLDivElement, TiltCardProps>(
  ({ className, children, maxTilt = 10, glare = true, onMouseMove, onMouseLeave, ...props }, forwardedRef) => {
    const innerRef = React.useRef<HTMLDivElement | null>(null);
    const reducedMotion = React.useRef(false);

    React.useEffect(() => {
      reducedMotion.current =
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    }, []);

    const setRefs = React.useCallback(
      (node: HTMLDivElement | null) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef)
          (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [forwardedRef],
    );

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const el = innerRef.current;
      if (el && !reducedMotion.current) {
        const rect = el.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 2 * maxTilt;
        const rotateX = -(py - 0.5) * 2 * maxTilt;
        el.style.transition = "none";
        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        el.style.setProperty("--glare-x", `${px * 100}%`);
        el.style.setProperty("--glare-y", `${py * 100}%`);
      }
      onMouseMove?.(event);
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
      const el = innerRef.current;
      if (el) {
        el.style.transition = "transform 400ms cubic-bezier(0.23, 1, 0.32, 1)";
        el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      }
      onMouseLeave?.(event);
    };

    return (
      <div
        ref={setRefs}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group relative rounded-xl border border-border bg-card p-6 shadow-sm [transform-style:preserve-3d] [will-change:transform]",
          className,
        )}
        {...props}
      >
        {glare && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), hsl(var(--foreground) / 0.12), transparent 60%)",
            }}
          />
        )}
        {children}
      </div>
    );
  },
);
TiltCard.displayName = "TiltCard";

export { TiltCard };
