import * as React from "react";
import { cn } from "../../lib/utils";

export interface GridListItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

export interface GridListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: GridListItem[];
  columns?: keyof typeof columnClasses;
  gap?: "sm" | "md" | "lg";
}

const gapClasses = {
  sm: "gap-3",
  md: "gap-6",
  lg: "gap-8",
} as const;

const GridList = React.forwardRef<HTMLDivElement, GridListProps>(
  ({ items, columns = 2, gap = "md", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          columnClasses[columns],
          gapClasses[gap],
          className,
        )}
        {...props}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 40}ms` }}
            className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm transition-[transform,box-shadow,border-color] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md md:p-6"
          >
            <div className="flex items-center gap-3">
              {item.icon && (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                  {item.icon}
                </span>
              )}
              <h3 className="text-lg font-semibold md:text-xl">{item.title}</h3>
            </div>
            <p className="flex-grow text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    );
  },
);
GridList.displayName = "GridList";

export { GridList };
