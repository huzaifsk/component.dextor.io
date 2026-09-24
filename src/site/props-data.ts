export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface ComponentDoc {
  props: PropDef[];
  note?: string;
}

export const propsData: Record<string, ComponentDoc> = {
  button: {
    props: [
      { name: "variant", type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"', description: "Visual style of the button." },
      { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "Height and padding of the button." },
      { name: "asChild", type: "boolean", default: "false", description: "Render as the child element (via Radix Slot) instead of a <button>, merging props onto it." },
    ],
    note: "Also accepts all standard <button> attributes (onClick, disabled, type, etc.).",
  },
  textarea: {
    props: [],
    note: "A styled native <textarea> — accepts all standard <textarea> attributes (value, onChange, placeholder, disabled, rows, etc.).",
  },
  switch: {
    props: [
      { name: "checked", type: "boolean", description: "Controlled checked state." },
      { name: "defaultChecked", type: "boolean", description: "Initial checked state when uncontrolled." },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Called when the pressed state changes." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
    ],
  },
  dialog: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state, passed to Dialog (root)." },
      { name: "defaultOpen", type: "boolean", description: "Initial open state when uncontrolled." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the open state changes." },
    ],
    note: "Compound component: Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose. DialogContent renders a built-in close button and accepts all Radix Dialog.Content props.",
  },
  card: {
    props: [],
    note: "Compound component: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter. Each accepts the standard attributes of its underlying element (div, h3, p) plus className.",
  },
  select: {
    props: [
      { name: "value", type: "string", description: "Controlled selected value, passed to Select (root)." },
      { name: "defaultValue", type: "string", description: "Initial value when uncontrolled." },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when the selected value changes." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
    ],
    note: "Compound component: Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator.",
  },
  checkbox: {
    props: [
      { name: "checked", type: 'boolean | "indeterminate"', description: "Controlled checked state." },
      { name: "defaultChecked", type: "boolean", description: "Initial checked state when uncontrolled." },
      { name: "onCheckedChange", type: '(checked: boolean | "indeterminate") => void', description: "Called when the checked state changes." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
    ],
  },
  chips: {
    props: [
      { name: "items", type: "{ label: string; value: string }[]", description: "The chips to render." },
      { name: "value", type: "string[]", description: "Controlled array of selected chip values." },
      { name: "defaultValue", type: "string[]", default: "[]", description: "Initial selected values when uncontrolled." },
      { name: "onValueChange", type: "(value: string[]) => void", description: "Called when the selected values change." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction with all chips." },
    ],
  },
  "date-picker": {
    props: [
      { name: "selected", type: "Date", description: "The selected date." },
      { name: "onSelect", type: "(date: Date | undefined) => void", description: "Called when a date is picked." },
      { name: "placeholder", type: "string", default: '"Pick a date"', description: "Text shown in the trigger button when no date is selected." },
      { name: "disabled", type: "boolean", description: "Prevents interaction." },
    ],
    note: 'Combines a Popover trigger (Button) with a Calendar (mode="single") in its content — internally built on calendar.tsx, which is not separately documented.',
  },
  "file-upload": {
    props: [
      { name: "accept", type: "string", description: "Comma-separated file types accepted by the native file input." },
      { name: "multiple", type: "boolean", default: "false", description: "Allow selecting more than one file." },
      { name: "onFilesSelected", type: "(files: File[]) => void", description: "Called with the current selection whenever files are added." },
      { name: "text", type: "string", default: '"Drag and drop your file here or"', description: "Primary dropzone label." },
      { name: "subText", type: "string", default: '"Browse files"', description: "Secondary dropzone label (browse action)." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
    ],
    note: "Manages its own selected-file list and image previews internally, including remove buttons per file.",
  },
  input: {
    props: [
      { name: "variant", type: '"default" | "error"', default: '"default"', description: "Visual style; error sets aria-invalid and a destructive border." },
      { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "Height and padding of the input." },
    ],
    note: "Also accepts all standard <input> attributes (value, onChange, placeholder, disabled, etc.), except the native size attribute, which this component's size prop overrides.",
  },
  label: {
    props: [],
    note: "A styled Radix Label.Root — accepts all standard <label> attributes (htmlFor, etc.).",
  },
  pagination: {
    props: [
      { name: "page", type: "number", description: "The current active page (1-indexed)." },
      { name: "pageCount", type: "number", description: "Total number of pages." },
      { name: "onPageChange", type: "(page: number) => void", description: "Called when a page is selected." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
      { name: "showFirstLast", type: "boolean", default: "true", description: "Show buttons to jump to the first and last page." },
      { name: "siblingCount", type: "number", default: "2", description: "Number of page buttons shown on each side of the current page." },
    ],
  },
  "radio-button": {
    props: [
      { name: "value", type: "string", description: "Controlled selected value, passed to RadioGroup (root)." },
      { name: "defaultValue", type: "string", description: "Initial value when uncontrolled." },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when the selected value changes." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction with the whole group." },
    ],
    note: "Compound component: RadioGroup (root) and RadioGroupItem, built on Radix RadioGroup. RadioGroupItem takes a required value plus standard Radix RadioGroupItem props (disabled, etc.).",
  },
  "range-input": {
    props: [
      { name: "value", type: "number[]", description: "Controlled value(s) — one entry per thumb, enabling single or dual-thumb ranges." },
      { name: "defaultValue", type: "number[]", description: "Initial value(s) when uncontrolled." },
      { name: "onValueChange", type: "(value: number[]) => void", description: "Called when any thumb's value changes." },
      { name: "min", type: "number", default: "0", description: "Minimum value." },
      { name: "max", type: "number", default: "100", description: "Maximum value." },
      { name: "step", type: "number", default: "1", description: "Stepping interval." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Layout axis of the slider." },
    ],
    note: "A thin wrapper around Radix Slider.Root — the number of Thumbs rendered matches the length of value/defaultValue.",
  },
  rating: {
    props: [
      { name: "value", type: "number", description: "Controlled rating value." },
      { name: "defaultValue", type: "number", default: "0", description: "Initial rating when uncontrolled." },
      { name: "onValueChange", type: "(value: number) => void", description: "Called when the rating changes." },
      { name: "max", type: "number", default: "5", description: "Number of stars." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the stars." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
    ],
  },
  stepper: {
    props: [
      { name: "steps", type: "{ label: string }[]", description: "The steps to render, in order." },
      { name: "activeStep", type: "number", description: "Index of the current step (0-indexed); earlier steps are marked completed." },
    ],
  },
  "time-picker": {
    props: [
      { name: "value", type: "{ hour: number; minute: number }", description: "Controlled time value (hour is always 24-hour, regardless of display format)." },
      { name: "onValueChange", type: "(value: { hour: number; minute: number }) => void", description: "Called when the hour or minute changes." },
      { name: "format", type: "12 | 24", default: "24", description: "Display/input format used by the hour listbox." },
      { name: "placeholder", type: "string", default: '"Pick a time"', description: "Text shown in the trigger button when no time is selected." },
      { name: "disabled", type: "boolean", description: "Prevents interaction." },
    ],
    note: "Renders a Popover containing scrollable hour and minute listboxes.",
  },
  "toggle-button": {
    props: [
      { name: "pressed", type: "boolean", description: "Controlled pressed state, passed to ToggleButton." },
      { name: "defaultPressed", type: "boolean", description: "Initial pressed state when uncontrolled." },
      { name: "onPressedChange", type: "(pressed: boolean) => void", description: "Called when the pressed state changes." },
      { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style of the toggle." },
      { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Height and padding of the toggle." },
      { name: "label", type: "string", description: "Visually-hidden (sr-only) accessible label rendered alongside children." },
    ],
    note: 'Also exports ToggleGroup and ToggleGroupItem (built on Radix Toggle Group) for multi-toggle sets. ToggleGroup takes type ("single" | "multiple"), value/defaultValue, onValueChange and disabled; ToggleGroupItem takes a required value plus the same variant/size props as ToggleButton.',
  },
  alert: {
    props: [
      { name: "variant", type: '"default" | "destructive" | "success"', default: '"default"', description: "Visual style of the alert." },
    ],
    note: "Also accepts all standard <div> attributes. Compound component: Alert, AlertTitle, AlertDescription.",
  },
  avatar: {
    props: [
      { name: "src", type: "string", description: "Image URL. While it loads (or on error), the fallback is shown instead." },
      { name: "alt", type: "string", description: "Alt text for the avatar image." },
      { name: "fallback", type: "string", description: "Content shown when there is no src, the image is loading, or it fails to load (typically initials)." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Diameter of the avatar." },
    ],
    note: "Built on Radix Avatar; the fallback is delayed 300ms when a src is provided to avoid a flash while the image loads.",
  },
  badge: {
    props: [
      { name: "variant", type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: "Visual style of the badge." },
    ],
    note: "Renders a <div> — also accepts all standard <div> attributes.",
  },
  breadcrumb: {
    props: [
      { name: "items", type: "{ label: string; href?: string }[]", description: 'Ordered list of breadcrumb entries. The last item (or any item without an href) renders as plain text with aria-current="page".' },
      { name: "separator", type: "React.ReactNode", default: "<ChevronRight />", description: "Custom separator rendered between items." },
    ],
    note: "Renders a <nav> wrapping an <ol> — also accepts all standard <nav> attributes.",
  },
  "grid-list": {
    props: [
      { name: "items", type: "{ icon?: React.ReactNode; title: string; description: string }[]", description: "Cards to render in the grid." },
      { name: "columns", type: "1 | 2 | 3 | 4", default: "2", description: "Number of columns at the widest breakpoint (responsive down to 1 column on small screens)." },
      { name: "gap", type: '"sm" | "md" | "lg"', default: '"md"', description: "Gap between grid cells." },
    ],
    note: "Renders a <div> — also accepts all standard <div> attributes.",
  },
  progress: {
    props: [
      { name: "value", type: "number", description: "Current progress value. The indicator's width is computed as a percentage assuming a max of 100." },
    ],
    note: "Built on Radix Progress — also accepts other Radix Progress.Root props (e.g. max, getValueLabel).",
  },
  separator: {
    props: [
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direction of the divider line." },
      { name: "decorative", type: "boolean", default: "true", description: "When true, hides the separator from the accessibility tree (it's purely visual, not a semantic boundary)." },
    ],
    note: "Built on Radix Separator.",
  },
  sidebar: {
    props: [
      { name: "items", type: "{ label: string; href?: string; icon?: React.ReactNode; items?: { label: string; href?: string }[] }[]", description: "Nav entries. An item with a nested items array renders as a collapsible section instead of a link." },
      { name: "activeHref", type: "string", description: 'href of the currently active link; matching items get aria-current="page" and their parent section auto-expands.' },
    ],
    note: "Collapsible sections are built on Radix Collapsible. Renders a <nav> — also accepts all standard <nav> attributes.",
  },
  skeleton: {
    props: [],
    note: "A styled pulsing <div> placeholder — accepts only className and standard <div> attributes, no custom props.",
  },
  sonner: {
    props: [
      { name: "theme", type: '"light" | "dark" | "system"', default: '"system"', description: "Color theme applied to rendered toasts." },
    ],
    note: "Toaster forwards all other sonner ToasterProps (position, duration, closeButton, etc.). Render <Toaster /> once in the app; the toast() function itself is re-exported directly from the sonner package, not a component with a props table.",
  },
  tabs: {
    props: [
      { name: "value", type: "string", description: "Controlled active tab value, passed to Tabs (root)." },
      { name: "defaultValue", type: "string", description: "Initial active tab value when uncontrolled." },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when the active tab changes." },
    ],
    note: "Compound component: Tabs, TabsList, TabsTrigger, TabsContent. Tabs is Radix TabsPrimitive.Root used directly, so it also accepts all other Radix Tabs.Root props (e.g. orientation, dir, activationMode).",
  },
  accordion: {
    props: [
      { name: "type", type: '"single" | "multiple"', description: "Whether one item or multiple items can be open at the same time. Required." },
      { name: "value", type: "string | string[]", description: 'Controlled open item value(s) — a string when type is "single", a string array when type is "multiple".' },
      { name: "defaultValue", type: "string | string[]", description: "Initial open item value(s) when uncontrolled." },
      { name: "onValueChange", type: "(value: string | string[]) => void", description: "Called when the open item(s) change." },
      { name: "collapsible", type: "boolean", default: "false", description: 'When type is "single", allows closing the open item by triggering it again.' },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction with every item in the accordion." },
    ],
    note: "Compound component: Accordion, AccordionItem, AccordionTrigger, AccordionContent. AccordionItem requires a unique value prop. AccordionTrigger and AccordionContent accept the standard attributes of their underlying Radix Accordion primitives.",
  },
  "alert-dialog": {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state, passed to AlertDialog (root)." },
      { name: "defaultOpen", type: "boolean", description: "Initial open state when uncontrolled." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the open state changes." },
    ],
    note: "Compound component: AlertDialog, AlertDialogTrigger, AlertDialogPortal, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel. Unlike Dialog, Radix prevents it from closing on outside click or Escape — AlertDialogAction and AlertDialogCancel (themed with the default and outline button variants) are the only ways to dismiss it, and both accept all Radix AlertDialog.Action/Cancel props.",
  },
  "aspect-ratio": {
    props: [
      { name: "ratio", type: "number", default: "1", description: "Desired width/height ratio for the content, e.g. 16 / 9." },
    ],
    note: "A direct re-export of Radix AspectRatio.Root — accepts all standard <div> attributes plus ratio.",
  },
  collapsible: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state." },
      { name: "defaultOpen", type: "boolean", description: "Initial open state when uncontrolled." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the open state changes." },
      { name: "disabled", type: "boolean", default: "false", description: "Prevents the trigger from opening/closing the content." },
    ],
    note: "Compound component: Collapsible, CollapsibleTrigger, CollapsibleContent — direct re-exports of the Radix Collapsible primitives with no custom styling.",
  },
  command: {
    props: [
      { name: "value", type: "string", description: "Controlled value of the currently selected item." },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when the selected item value changes." },
      { name: "shouldFilter", type: "boolean", default: "true", description: "Set to false to turn off the built-in filtering and sorting, e.g. to filter results yourself." },
      { name: "filter", type: "(value: string, search: string, keywords?: string[]) => number", description: "Custom scoring function for how well an item matches the current search query." },
      { name: "loop", type: "boolean", default: "false", description: "Loops around when using the arrow keys to navigate items." },
    ],
    note: "Command is a themed wrapper around cmdk's Command primitive; other exports (CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut) accept the standard attributes of their underlying cmdk primitives. CommandDialog renders Command inside our Dialog/DialogContent and takes the same open/defaultOpen/onOpenChange props as Dialog (root) instead of the props above.",
  },
  "context-menu": {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state, passed to ContextMenu (root)." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the open state changes." },
      { name: "modal", type: "boolean", default: "true", description: "When true, interaction with outside elements is disabled and only menu content is visible to screen readers while open." },
      { name: "dir", type: '"ltr" | "rtl"', description: "The reading direction of the menu." },
    ],
    note: "Compound component, structurally identical to DropdownMenu: ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup — each accepting the standard attributes of its underlying Radix ContextMenu primitive. Unlike DropdownMenu, ContextMenu has no defaultOpen prop — it is opened by a right-click (contextmenu event) on ContextMenuTrigger.",
  },
  drawer: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state, passed to Drawer (root)." },
      { name: "defaultOpen", type: "boolean", description: "Initial open state when uncontrolled." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the open state changes." },
      { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"right"', description: "Edge of the screen the panel slides in from, passed to DrawerContent." },
    ],
    note: "Compound component: Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, DrawerClose. Built directly on Radix Dialog (not vaul) — DrawerContent renders a built-in close button and accepts all Radix Dialog.Content props.",
  },
  "dropdown-menu": {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state, passed to DropdownMenu (root)." },
      { name: "defaultOpen", type: "boolean", description: "Initial open state when uncontrolled." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the open state changes." },
      { name: "modal", type: "boolean", default: "true", description: "When true, interaction with outside elements is disabled and only menu content is visible to screen readers while open." },
    ],
    note: "Compound component: DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup — each accepting the standard attributes of its underlying Radix DropdownMenu primitive.",
  },
  "hover-card": {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state, passed to HoverCard (root)." },
      { name: "defaultOpen", type: "boolean", description: "Initial open state when uncontrolled." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the open state changes." },
      { name: "openDelay", type: "number", default: "700", description: "Duration (ms) from when the pointer enters the trigger until the card opens." },
      { name: "closeDelay", type: "number", default: "300", description: "Duration (ms) from when the pointer leaves the trigger/content until the card closes." },
    ],
    note: 'Compound component: HoverCard, HoverCardTrigger, HoverCardContent. HoverCardContent defaults align to "center" and sideOffset to 4, and accepts all Radix HoverCard.Content props.',
  },
  popover: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state, passed to Popover (root)." },
      { name: "defaultOpen", type: "boolean", description: "Initial open state when uncontrolled." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the open state changes." },
      { name: "modal", type: "boolean", default: "false", description: "When true, interaction with outside elements is disabled and only popover content is visible to screen readers while open." },
      { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment against the trigger, passed to PopoverContent." },
      { name: "sideOffset", type: "number", default: "4", description: "Distance in pixels from the trigger, passed to PopoverContent." },
    ],
    note: "Compound component: Popover, PopoverTrigger, PopoverAnchor, PopoverContent. PopoverContent accepts all other Radix Popover.Content props (side, alignOffset, etc.).",
  },
  "scroll-area": {
    props: [
      { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Scroll axis for the ScrollBar. Render a second ScrollBar for both axes." },
    ],
    note: 'Compound component: ScrollArea, ScrollBar. ScrollArea wraps Radix ScrollArea.Root/Viewport and always renders a vertical ScrollBar plus a Corner; render an additional <ScrollBar orientation="horizontal" /> yourself for horizontal scrolling. Both accept the standard attributes of their underlying Radix ScrollArea primitives.',
  },
  tooltip: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state, passed to Tooltip (root)." },
      { name: "defaultOpen", type: "boolean", description: "Initial open state when uncontrolled." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the open state changes." },
      { name: "delayDuration", type: "number", default: "700", description: "Duration (ms) from when the pointer enters the trigger until the tooltip opens; overrides the value set on TooltipProvider." },
    ],
    note: "Compound component: TooltipProvider, Tooltip, TooltipTrigger, TooltipContent. TooltipProvider must wrap the app (or the relevant subtree) once — it accepts delayDuration, skipDelayDuration, and disableHoverableContent, which apply to every Tooltip inside it. TooltipContent defaults sideOffset to 4 and accepts all other Radix Tooltip.Content props.",
  },
  "magnetic-button": {
    props: [
      { name: "strength", type: "number", default: "0.35", description: "How strongly the button follows the cursor within its bounds. 0 disables the pull." },
      { name: "variant", type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"', description: "Visual style, same variants as Button." },
      { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "Height and padding, same sizes as Button." },
      { name: "asChild", type: "boolean", default: "false", description: "Render as the child element (via Radix Slot) instead of a <button>." },
    ],
    note: "Also accepts all standard <button> attributes.",
  },
  "like-button": {
    props: [
      { name: "liked", type: "boolean", description: "Controlled liked state." },
      { name: "defaultLiked", type: "boolean", default: "false", description: "Initial liked state when uncontrolled." },
      { name: "onLikedChange", type: "(liked: boolean) => void", description: "Called when the liked state changes. Fires a particle burst when transitioning to liked." },
      { name: "count", type: "number", description: "Optional count shown next to the heart. The caller owns and updates the number." },
    ],
  },
  "tilt-card": {
    props: [
      { name: "maxTilt", type: "number", default: "10", description: "Maximum rotation in degrees at the card's edge." },
      { name: "glare", type: "boolean", default: "true", description: "Shows a radial glare that follows the cursor." },
    ],
    note: "Renders a <div> — pass any content as children. Also accepts all standard <div> attributes.",
  },
  "copy-button": {
    props: [
      { name: "value", type: "string", description: "The text copied to the clipboard when clicked." },
      { name: "onCopy", type: "() => void", description: "Called after a successful copy." },
    ],
    note: "Renders an icon-only ghost button that morphs from a copy icon to a checkmark for 1.8s after copying.",
  },
  "text-scramble": {
    props: [
      { name: "text", type: "string", description: "The final text the scramble resolves to." },
      { name: "trigger", type: '"mount" | "hover"', default: '"mount"', description: "Starts the scramble on mount, or waits for a hover to begin." },
      { name: "duration", type: "number", default: "900", description: "How long the scramble animation runs, in milliseconds." },
      { name: "characters", type: "string", description: "Character pool used for the scrambled state." },
    ],
    note: "Renders a <span>. Skips the animation and shows the final text immediately when prefers-reduced-motion is set.",
  },
  "shimmer-button": {
    props: [
      { name: "asChild", type: "boolean", default: "false", description: "Render as the child element (via Radix Slot) instead of a <button>." },
    ],
    note: "Also accepts all standard <button> attributes.",
  },
  "number-ticker": {
    props: [
      { name: "value", type: "number", description: "The number to display. Animates smoothly from its previous value whenever this changes." },
      { name: "duration", type: "number", default: "800", description: "Animation duration in milliseconds." },
      { name: "decimals", type: "number", default: "0", description: "Number of decimal places to show." },
      { name: "prefix", type: "string", description: "Text shown before the number, e.g. \"$\"." },
      { name: "suffix", type: "string", description: "Text shown after the number, e.g. \"%\"." },
    ],
    note: "Renders a <span>. Jumps straight to the new value when prefers-reduced-motion is set.",
  },
  "expanding-search": {
    props: [
      { name: "value", type: "string", description: "Controlled search value." },
      { name: "defaultValue", type: "string", description: "Initial value when uncontrolled." },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when the search value changes." },
      { name: "placeholder", type: "string", default: '"Search…"', description: "Placeholder shown once expanded." },
    ],
    note: "Collapses back to icon-only on blur when empty. Also accepts standard <input> attributes.",
  },
  "ping-badge": {
    props: [
      { name: "show", type: "boolean", default: "true", description: "Whether the badge is shown at all." },
      { name: "variant", type: '"default" | "destructive" | "success"', default: '"destructive"', description: "Color of the dot and its pulse ring." },
      { name: "position", type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"', default: '"top-right"', description: "Corner of the wrapped content the badge is anchored to." },
    ],
    note: "Wraps its children — pass an icon, avatar, or any element as children.",
  },
  marquee: {
    props: [
      { name: "speed", type: "number", default: "28", description: "Seconds for one full loop." },
      { name: "pauseOnHover", type: "boolean", default: "true", description: "Pauses the scroll while hovered." },
      { name: "reverse", type: "boolean", default: "false", description: "Reverses the scroll direction." },
    ],
    note: "Renders its children twice back-to-back to create a seamless loop — keep children lightweight.",
  },
};
