import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export interface SidebarItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  items?: { label: string; href?: string }[];
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  items: SidebarItem[];
  activeHref?: string;
}

const sidebarLinkClasses =
  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground";

const SidebarLink = ({
  item,
  activeHref,
}: {
  item: SidebarItem;
  activeHref?: string;
}) => (
  <a
    href={item.href ?? "#"}
    aria-current={item.href && item.href === activeHref ? "page" : undefined}
    className={sidebarLinkClasses}
  >
    {item.icon}
    {item.label}
  </a>
);

const SidebarSection = ({
  item,
  activeHref,
}: {
  item: SidebarItem;
  activeHref?: string;
}) => {
  const hasActiveChild = item.items?.some((child) => child.href === activeHref);
  const [open, setOpen] = React.useState(!!hasActiveChild);

  return (
    <CollapsiblePrimitive.Root open={open} onOpenChange={setOpen}>
      <CollapsiblePrimitive.Trigger
        className={cn(
          sidebarLinkClasses,
          "w-full justify-between [&[data-state=open]>svg]:rotate-180",
        )}
      >
        <span className="flex items-center gap-3">
          {item.icon}
          {item.label}
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-4">
          {item.items?.map((child) => (
            <a
              key={child.label}
              href={child.href ?? "#"}
              aria-current={
                child.href && child.href === activeHref ? "page" : undefined
              }
              className={cn(sidebarLinkClasses, "text-sm font-normal")}
            >
              {child.label}
            </a>
          ))}
        </div>
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
};

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ items, activeHref, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Sidebar"
        className={cn("flex w-64 flex-col gap-1 p-2", className)}
        {...props}
      >
        {items.map((item) =>
          item.items && item.items.length > 0 ? (
            <SidebarSection
              key={item.label}
              item={item}
              activeHref={activeHref}
            />
          ) : (
            <SidebarLink key={item.label} item={item} activeHref={activeHref} />
          ),
        )}
      </nav>
    );
  },
);
Sidebar.displayName = "Sidebar";

export { Sidebar };
