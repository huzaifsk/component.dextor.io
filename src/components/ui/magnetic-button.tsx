import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

export interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** How strongly the button follows the cursor. 0 disables the pull. */
  strength?: number;
}

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      strength = 0.35,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    forwardedRef,
  ) => {
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

    const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
      const el = innerRef.current;
      if (el && strength > 0) {
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * strength;
        const y = (event.clientY - rect.top - rect.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      }
      onMouseMove?.(event);
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (innerRef.current) innerRef.current.style.transform = "";
      onMouseLeave?.(event);
    };

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={setRefs}
        className={cn(
          buttonVariants({ variant, size }),
          "transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
          className,
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    );
  },
);
MagneticButton.displayName = "MagneticButton";

export { MagneticButton };
