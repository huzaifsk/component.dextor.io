import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export interface Step {
  label: string;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  activeStep: number;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ steps, activeStep, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="list"
        className={cn("flex w-full items-center", className)}
        {...props}
      >
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;
          return (
            <div
              key={index}
              role="listitem"
              aria-current={isActive ? "step" : undefined}
              className="flex flex-1 items-center last:flex-none"
            >
              <div className="flex items-center">
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors duration-200",
                    isCompleted || isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground",
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={cn(
                    "ml-2 whitespace-nowrap text-sm font-medium",
                    isCompleted || isActive
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "mx-4 h-0.5 flex-1",
                    isCompleted ? "bg-primary" : "bg-border",
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  },
);
Stepper.displayName = "Stepper";

export { Stepper };
