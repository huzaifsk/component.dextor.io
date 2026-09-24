import * as React from "react";
import { Heart } from "lucide-react";
import { cn } from "../../lib/utils";

export interface LikeButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  liked?: boolean;
  defaultLiked?: boolean;
  onLikedChange?: (liked: boolean) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Optional count shown next to the heart. The caller owns the number. */
  count?: number;
}

const PARTICLE_COLORS = ["#fb7185", "#f43f5e", "#fda4af"];

function burst(originEl: HTMLElement | null) {
  if (!originEl) return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

  const rect = originEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  for (let i = 0; i < 8; i++) {
    const particle = document.createElement("span");
    const size = 3 + Math.random() * 3;
    Object.assign(particle.style, {
      position: "fixed",
      left: `${originX}px`,
      top: `${originY}px`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "9999px",
      backgroundColor: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      pointerEvents: "none",
      zIndex: "100",
    });
    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.4;
    const distance = 18 + Math.random() * 20;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    const animation = particle.animate(
      [
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 },
      ],
      { duration: 500 + Math.random() * 200, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
    );
    animation.onfinish = () => particle.remove();
  }
}

const LikeButton = React.forwardRef<HTMLButtonElement, LikeButtonProps>(
  ({ className, liked, defaultLiked = false, onLikedChange, onClick, count, ...props }, forwardedRef) => {
    const [internalLiked, setInternalLiked] = React.useState(defaultLiked);
    const isControlled = liked !== undefined;
    const isLiked = isControlled ? liked : internalLiked;
    const innerRef = React.useRef<HTMLButtonElement | null>(null);

    const setRefs = React.useCallback(
      (node: HTMLButtonElement | null) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef)
          (forwardedRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
      },
      [forwardedRef],
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const next = !isLiked;
      if (!isControlled) setInternalLiked(next);
      onLikedChange?.(next);
      if (next) burst(innerRef.current);
      onClick?.(event);
    };

    return (
      <button
        ref={setRefs}
        type="button"
        aria-pressed={isLiked}
        aria-label={isLiked ? "Unlike" : "Like"}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md p-1.5 text-muted-foreground transition-colors duration-150 hover:text-rose-500 active:scale-90",
          isLiked && "text-rose-500",
          className,
        )}
        {...props}
      >
        <Heart
          className={cn(
            "h-5 w-5 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]",
            isLiked ? "scale-110 fill-current" : "scale-100",
          )}
        />
        {count !== undefined && <span className="text-sm tabular-nums">{count}</span>}
      </button>
    );
  },
);
LikeButton.displayName = "LikeButton";

export { LikeButton };
