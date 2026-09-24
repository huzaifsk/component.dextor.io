export type ComponentCategory = "Form" | "Overlay" | "Feedback" | "Layout" | "Interaction";

export interface RegistryEntry {
  slug: string;
  title: string;
  description: string;
  sourceFile: string;
  category: ComponentCategory;
}

export const registry: RegistryEntry[] = [
  { slug: "accordion", title: "Accordion", description: "Expandable/collapsible content sections with correct single- or multi-open semantics and full keyboard/ARIA support.", sourceFile: "accordion.tsx", category: "Layout" },
  { slug: "alert", title: "Alert", description: "A static banner for surfacing default, destructive, or success messages.", sourceFile: "alert.tsx", category: "Feedback" },
  { slug: "alert-dialog", title: "Alert Dialog", description: "A modal confirmation dialog that expects an explicit choice — doesn't dismiss on outside click or Escape.", sourceFile: "alert-dialog.tsx", category: "Overlay" },
  { slug: "aspect-ratio", title: "Aspect Ratio", description: "Constrains content to a fixed width/height ratio, e.g. for images and embeds.", sourceFile: "aspect-ratio.tsx", category: "Layout" },
  { slug: "avatar", title: "Avatar", description: "User avatar image with automatic fallback to initials on load failure or during loading.", sourceFile: "avatar.tsx", category: "Layout" },
  { slug: "badge", title: "Badge", description: "A small pill for statuses and labels, with default/secondary/destructive/outline variants.", sourceFile: "badge.tsx", category: "Feedback" },
  { slug: "breadcrumb", title: "Breadcrumb", description: "A breadcrumb trail of links with a customizable separator and current-page marker.", sourceFile: "breadcrumb.tsx", category: "Layout" },
  { slug: "button", title: "Button", description: "Triggers an action, with variants and sizes.", sourceFile: "button.tsx", category: "Form" },
  { slug: "card", title: "Card", description: "A container for grouping related content, with header, title, description, body, and footer sections.", sourceFile: "card.tsx", category: "Layout" },
  { slug: "checkbox", title: "Checkbox", description: "Accessible checkbox with indeterminate-ready state and a themed check indicator.", sourceFile: "checkbox.tsx", category: "Form" },
  { slug: "chips", title: "Chips", description: "A row of selectable filter/tag chips with toggleable selected state.", sourceFile: "chips.tsx", category: "Form" },
  { slug: "collapsible", title: "Collapsible", description: "A single trigger/content pair that expands and collapses smoothly.", sourceFile: "collapsible.tsx", category: "Layout" },
  { slug: "command", title: "Command", description: "A fast, composable command menu for searching and executing actions, usable inline or as a ⌘K dialog.", sourceFile: "command.tsx", category: "Overlay" },
  { slug: "context-menu", title: "Context Menu", description: "A right-click menu triggered by a context-menu event, structurally identical to a dropdown menu.", sourceFile: "context-menu.tsx", category: "Overlay" },
  { slug: "copy-button", title: "Copy Button", description: "Copies text to the clipboard with a morphing copy-to-checkmark icon.", sourceFile: "copy-button.tsx", category: "Interaction" },
  { slug: "date-picker", title: "Date Picker", description: "A single-date picker combining a popover trigger with a calendar grid.", sourceFile: "date-picker.tsx", category: "Form" },
  { slug: "dialog", title: "Modal", description: "Accessible modal dialog with overlay, built on Radix Dialog.", sourceFile: "dialog.tsx", category: "Overlay" },
  { slug: "drawer", title: "Drawer", description: "Slide-in panel from any edge with focus trap and portal rendering.", sourceFile: "drawer.tsx", category: "Overlay" },
  { slug: "dropdown-menu", title: "Dropdown Menu", description: "An action menu triggered by a button, with checkboxes, radio options, and nested submenus.", sourceFile: "dropdown-menu.tsx", category: "Overlay" },
  { slug: "expanding-search", title: "Expanding Search", description: "An icon-only input that expands into a full search field on focus.", sourceFile: "expanding-search.tsx", category: "Interaction" },
  { slug: "file-upload", title: "File Upload", description: "A drag-and-drop file dropzone with previews and keyboard support.", sourceFile: "file-upload.tsx", category: "Form" },
  { slug: "grid-list", title: "Grid List", description: "A responsive grid of icon/title/description cards.", sourceFile: "grid-list.tsx", category: "Layout" },
  { slug: "hover-card", title: "Hover Card", description: "Preview rich content, like a profile card, on hover without requiring a click.", sourceFile: "hover-card.tsx", category: "Overlay" },
  { slug: "input", title: "Input", description: "A styled text input with default/error variants and size options.", sourceFile: "input.tsx", category: "Form" },
  { slug: "label", title: "Label", description: "An accessible label primitive for pairing text with form controls.", sourceFile: "label.tsx", category: "Form" },
  { slug: "like-button", title: "Like Button", description: "A heart toggle that fills and bursts into particles when liked.", sourceFile: "like-button.tsx", category: "Interaction" },
  { slug: "magnetic-button", title: "Magnetic Button", description: "A button that pulls toward the cursor within its bounds and springs back on leave.", sourceFile: "magnetic-button.tsx", category: "Interaction" },
  { slug: "marquee", title: "Marquee", description: "An infinitely scrolling strip of content, pausable on hover.", sourceFile: "marquee.tsx", category: "Interaction" },
  { slug: "number-ticker", title: "Number Ticker", description: "Animates a number smoothly from its previous value to a new one whenever it changes.", sourceFile: "number-ticker.tsx", category: "Interaction" },
  { slug: "pagination", title: "Pagination", description: "Navigate between pages of content.", sourceFile: "pagination.tsx", category: "Layout" },
  { slug: "ping-badge", title: "Ping Badge", description: "A status dot with a radiating pulse ring, for notifications and live indicators.", sourceFile: "ping-badge.tsx", category: "Interaction" },
  { slug: "popover", title: "Popover", description: "A rich content bubble anchored to a trigger, with origin-aware entrance animation.", sourceFile: "popover.tsx", category: "Overlay" },
  { slug: "progress", title: "Progress", description: "A horizontal bar that visualizes task or loading completion.", sourceFile: "progress.tsx", category: "Feedback" },
  { slug: "radio-button", title: "Radio Group", description: "Grouped radio inputs with a filled-dot indicator and roving keyboard focus.", sourceFile: "radio-button.tsx", category: "Form" },
  { slug: "range-input", title: "Range Slider", description: "Single or dual-thumb slider with correct ARIA value attributes and keyboard support.", sourceFile: "range-input.tsx", category: "Form" },
  { slug: "rating", title: "Rating", description: "A star rating control, controlled or uncontrolled, with keyboard support.", sourceFile: "rating.tsx", category: "Form" },
  { slug: "scroll-area", title: "Scroll Area", description: "A themed, cross-browser-consistent scrollbar replacing the native one.", sourceFile: "scroll-area.tsx", category: "Layout" },
  { slug: "select", title: "Dropdown", description: "Single-value select with full keyboard navigation, built on Radix Select.", sourceFile: "select.tsx", category: "Form" },
  { slug: "separator", title: "Separator", description: "A thin horizontal or vertical divider line.", sourceFile: "separator.tsx", category: "Layout" },
  { slug: "sidebar", title: "Sidebar", description: "Composable nav primitive with collapsible sections, built on Radix Collapsible.", sourceFile: "sidebar.tsx", category: "Layout" },
  { slug: "skeleton", title: "Skeleton", description: "A pulsing placeholder shown while content is loading.", sourceFile: "skeleton.tsx", category: "Feedback" },
  { slug: "shimmer-button", title: "Shimmer Button", description: "A button with a continuous light sweep across its surface, for premium CTAs.", sourceFile: "shimmer-button.tsx", category: "Interaction" },
  { slug: "sonner", title: "Toast", description: "Themed toast notifications powered by Sonner.", sourceFile: "sonner.tsx", category: "Feedback" },
  { slug: "stepper", title: "Stepper", description: "A horizontal step progress indicator with completed/active/upcoming states.", sourceFile: "stepper.tsx", category: "Layout" },
  { slug: "switch", title: "Switch", description: "A toggle control with a smooth thumb transition.", sourceFile: "switch.tsx", category: "Form" },
  { slug: "tabs", title: "Tabs", description: "Switch between related views inside a pill-shaped tab list.", sourceFile: "tabs.tsx", category: "Layout" },
  { slug: "text-scramble", title: "Text Scramble", description: "Text that decodes into its final value through randomized characters.", sourceFile: "text-scramble.tsx", category: "Interaction" },
  { slug: "textarea", title: "Textarea", description: "A styled multi-line text input matching Input's visual language.", sourceFile: "textarea.tsx", category: "Form" },
  { slug: "tilt-card", title: "Tilt Card", description: "A card with a 3D perspective tilt and glare that follows the cursor.", sourceFile: "tilt-card.tsx", category: "Interaction" },
  { slug: "time-picker", title: "Time Picker", description: "A popover time picker with scrollable hour/minute listboxes and 12/24-hour formatting.", sourceFile: "time-picker.tsx", category: "Form" },
  { slug: "toggle-button", title: "Toggle / Toggle Group", description: "Single pressed-state toggle and a multi-select toggle group, both with cva variants.", sourceFile: "toggle-button.tsx", category: "Form" },
  { slug: "tooltip", title: "Tooltip", description: "A small popover bubble that reveals contextual info on hover or focus.", sourceFile: "tooltip.tsx", category: "Overlay" },
];

export const CATEGORY_ORDER: ComponentCategory[] = ["Form", "Overlay", "Feedback", "Layout", "Interaction"];

export function getEntry(slug: string) {
  return registry.find((entry) => entry.slug === slug);
}

export function groupByCategory(entries: RegistryEntry[]) {
  return CATEGORY_ORDER.map((category) => ({
    category,
    entries: entries.filter((entry) => entry.category === category),
  })).filter((group) => group.entries.length > 0);
}
