import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      items,
      separator = <ChevronRight className="h-4 w-4 text-muted-foreground" />,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn(className)}
        {...props}
      >
        <ol className="inline-flex items-center gap-1.5 md:gap-2.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={`${item.label}-${index}`}
                className="inline-flex items-center gap-1.5 md:gap-2.5"
              >
                {index > 0 && <span aria-hidden="true">{separator}</span>}
                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={cn(
                      "text-sm font-medium",
                      isLast ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  },
);
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };
