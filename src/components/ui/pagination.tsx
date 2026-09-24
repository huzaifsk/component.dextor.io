import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  showFirstLast?: boolean;
  className?: string;
  siblingCount?: number;
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      pageCount,
      onPageChange,
      disabled = false,
      showFirstLast = true,
      className,
      siblingCount = 2,
    },
    ref,
  ) => {
    const goTo = (target: number) => {
      if (!disabled && target >= 1 && target <= pageCount && target !== page) {
        onPageChange(target);
      }
    };

    let startPage = Math.max(1, page - siblingCount);
    const endPage = Math.min(pageCount, startPage + siblingCount * 2);
    if (endPage - startPage < siblingCount * 2) {
      startPage = Math.max(1, endPage - siblingCount * 2);
    }
    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );

    return (
      <nav
        ref={ref}
        aria-label="pagination"
        className={cn("flex items-center justify-center gap-1", className)}
      >
        {showFirstLast && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={disabled || page === 1}
            onClick={() => goTo(1)}
            aria-label="First page"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
        )}

        <Button
          type="button"
          variant="ghost"
          size="icon"
          disabled={disabled || page === 1}
          onClick={() => goTo(page - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {pages.map((p) => (
          <Button
            key={p}
            type="button"
            variant={p === page ? "default" : "ghost"}
            size="icon"
            disabled={disabled}
            onClick={() => goTo(p)}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </Button>
        ))}

        <Button
          type="button"
          variant="ghost"
          size="icon"
          disabled={disabled || page === pageCount}
          onClick={() => goTo(page + 1)}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {showFirstLast && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={disabled || page === pageCount}
            onClick={() => goTo(pageCount)}
            aria-label="Last page"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        )}
      </nav>
    );
  },
);
Pagination.displayName = "Pagination";

export { Pagination };
