import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

export interface CopyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onCopy"> {
  /** The text copied to the clipboard when clicked. */
  value: string;
  onCopy?: () => void;
}

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ value, onCopy, className, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false);
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

    React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

    const handleClick = async () => {
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        // Clipboard API unavailable (unsupported browser, insecure context) — ignore.
      }
      setCopied(true);
      onCopy?.();
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1800);
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-label="Copy to clipboard"
        onClick={handleClick}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "relative overflow-hidden",
          className,
        )}
        {...props}
      >
        <Check
          className={cn(
            "absolute h-4 w-4 text-success transition-all duration-200",
            copied ? "scale-100 opacity-100" : "scale-50 opacity-0",
          )}
        />
        <Copy
          className={cn(
            "h-4 w-4 transition-all duration-200",
            copied ? "scale-50 opacity-0" : "scale-100 opacity-100",
          )}
        />
      </button>
    );
  },
);
CopyButton.displayName = "CopyButton";

export { CopyButton };
