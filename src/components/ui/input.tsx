import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "error";
  size?: "sm" | "default" | "lg";
}

const sizeClasses = {
  sm: "h-8 px-3 text-xs",
  default: "h-9 px-4 py-2 text-sm",
  lg: "h-10 px-4 text-base",
} as const;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant = "default",
      size = "default",
      ...props
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        aria-invalid={variant === "error" ? true : undefined}
        className={cn(
          "flex w-full rounded-md border bg-background text-foreground shadow-sm transition-colors duration-200 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          variant === "error" ? "border-destructive" : "border-input",
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
