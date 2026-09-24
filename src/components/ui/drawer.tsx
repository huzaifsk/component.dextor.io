import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

const Drawer = DialogPrimitive.Root;

const DrawerTrigger = DialogPrimitive.Trigger;

const DrawerPortal = DialogPrimitive.Portal;

const DrawerClose = DialogPrimitive.Close;

type DrawerSide = "top" | "right" | "bottom" | "left";

// Vaul/Sonner-style flick threshold: a fast short drag closes even if it
// never covers much distance.
const DRAG_CLOSE_VELOCITY = 0.11; // px/ms
// A slow drag still closes once it covers a third of the panel's own size.
const DRAG_CLOSE_RATIO = 1 / 3;
// iOS/UIScrollView-style rubber-band constant, used to resist dragging in
// the direction that would *open* the drawer further instead of closing it.
const DRAG_RUBBERBAND_CONSTANT = 0.55;
// How many pixels of initial movement a whole-surface (left/right) drag
// needs before we commit it to the drawer's own axis instead of handing the
// gesture off to native scrolling.
const AXIS_LOCK_THRESHOLD = 4;

const DRAG_AXIS: Record<DrawerSide, "x" | "y"> = {
  left: "x",
  right: "x",
  top: "y",
  bottom: "y",
};

// Sign of the raw pointer delta (rightward/downward positive) that moves the
// panel toward its own closed edge.
const DRAG_CLOSING_SIGN: Record<DrawerSide, 1 | -1> = {
  left: -1,
  right: 1,
  top: -1,
  bottom: 1,
};

/** Classic rubber-band resistance curve (same shape iOS uses for overscroll). */
function rubberband(delta: number, dimension: number) {
  if (dimension <= 0) return 0;
  return (
    (delta * dimension * DRAG_RUBBERBAND_CONSTANT) /
    (dimension + DRAG_RUBBERBAND_CONSTANT * delta)
  );
}

interface DrawerDragState {
  pointerId: number;
  axis: "x" | "y";
  closingSign: 1 | -1;
  /** Panel size (width for x, height for y) captured at drag start. */
  dimension: number;
  startX: number;
  startY: number;
  startTime: number;
  /** Raw, undamped progress toward the closed edge (can be negative). */
  lastClosingProgress: number;
  /** False while a whole-surface drag hasn't picked an axis yet. */
  locked: boolean;
  hasMoved: boolean;
  /** The element pointer capture was set on (handle or the panel itself). */
  captureEl: HTMLDivElement;
}

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DrawerOverlay.displayName = DialogPrimitive.Overlay.displayName;

const drawerVariants = cva(
  "fixed z-50 gap-4 border-border bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof drawerVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ side = "right", className, children, ...props }, ref) => {
  const resolvedSide: DrawerSide = side ?? "right";
  // Bottom/top sheets drag via a dedicated grabber handle (native bottom-sheet
  // convention); left/right panels are draggable across their whole surface.
  const isHandleDrag = resolvedSide === "top" || resolvedSide === "bottom";

  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const dragRef = React.useRef<DrawerDragState | null>(null);

  const setPanelRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      panelRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    },
    [ref],
  );

  // Captures the pointer, disables the ambient CSS `transition` (so it can't
  // fight the imperative per-frame transform writes below) and suppresses
  // touch scrolling/text selection for the duration of the drag.
  const lockDrag = React.useCallback(
    (pointerId: number, captureEl: HTMLDivElement, panelEl: HTMLDivElement) => {
      captureEl.setPointerCapture(pointerId);
      panelEl.style.transition = "none";
      panelEl.style.userSelect = "none";
      captureEl.style.touchAction = "none";
    },
    [],
  );

  const handlePointerDown = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (dragRef.current) return; // ignore a second pointer starting mid-drag
      if (event.pointerType === "mouse" && event.button !== 0) return;

      if (!isHandleDrag) {
        // Whole-surface drag: don't steal drags that start on interactive
        // content (links, buttons, inputs) so clicks keep working.
        const target = event.target as HTMLElement;
        if (
          target.closest(
            'button, a, input, textarea, select, [role="button"], [contenteditable="true"]',
          )
        ) {
          return;
        }
      }

      const panelEl = panelRef.current;
      if (!panelEl) return;
      const captureEl = event.currentTarget;
      const axis = DRAG_AXIS[resolvedSide];
      const rect = panelEl.getBoundingClientRect();

      dragRef.current = {
        pointerId: event.pointerId,
        axis,
        closingSign: DRAG_CLOSING_SIGN[resolvedSide],
        dimension: axis === "x" ? rect.width : rect.height,
        startX: event.clientX,
        startY: event.clientY,
        startTime: event.timeStamp,
        lastClosingProgress: 0,
        locked: isHandleDrag,
        hasMoved: false,
        captureEl,
      };

      // The handle has no scrollable purpose, so start dragging immediately.
      // Whole-surface drags wait for the first move to pick an axis.
      if (isHandleDrag) {
        lockDrag(event.pointerId, captureEl, panelEl);
      }
    },
    [isHandleDrag, resolvedSide, lockDrag],
  );

  const handlePointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const state = dragRef.current;
      if (!state || state.pointerId !== event.pointerId) return;
      const panelEl = panelRef.current;
      if (!panelEl) return;

      if (!state.locked) {
        const dx = event.clientX - state.startX;
        const dy = event.clientY - state.startY;
        if (
          Math.abs(dx) < AXIS_LOCK_THRESHOLD &&
          Math.abs(dy) < AXIS_LOCK_THRESHOLD
        ) {
          return; // not enough movement yet to tell drag from scroll
        }
        const movesAlongDragAxis =
          state.axis === "x" ? Math.abs(dx) > Math.abs(dy) : Math.abs(dy) > Math.abs(dx);
        if (!movesAlongDragAxis) {
          // Vertical-ish gesture on a left/right drawer (or vice versa):
          // hand off to native scrolling instead of dragging the panel.
          dragRef.current = null;
          return;
        }
        state.locked = true;
        lockDrag(event.pointerId, state.captureEl, panelEl);
      }

      const rawDelta =
        state.axis === "x" ? event.clientX - state.startX : event.clientY - state.startY;
      const closingProgress = rawDelta * state.closingSign;
      // Only the closing direction moves 1:1; dragging the "wrong" way gets
      // increasing rubber-band resistance instead of a hard stop.
      const dampedProgress =
        closingProgress >= 0
          ? closingProgress
          : -rubberband(-closingProgress, state.dimension);
      const axisDelta = dampedProgress * state.closingSign;

      state.lastClosingProgress = closingProgress;
      state.hasMoved = true;
      panelEl.style.transform =
        state.axis === "x"
          ? `translate3d(${axisDelta}px, 0, 0)`
          : `translate3d(0, ${axisDelta}px, 0)`;
    },
    [lockDrag],
  );

  const handlePointerEnd = React.useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const state = dragRef.current;
    if (!state || state.pointerId !== event.pointerId) return;
    dragRef.current = null;
    const panelEl = panelRef.current;

    if (state.locked) {
      if (state.captureEl.hasPointerCapture(event.pointerId)) {
        state.captureEl.releasePointerCapture(event.pointerId);
      }
      state.captureEl.style.touchAction = "";
      if (panelEl) panelEl.style.userSelect = "";
    }

    if (!state.hasMoved || !panelEl) return; // plain tap/click, nothing to animate

    const elapsed = Math.max(event.timeStamp - state.startTime, 1);
    const velocity = Math.abs(state.lastClosingProgress) / elapsed;
    const shouldClose =
      state.lastClosingProgress > 0 &&
      (state.lastClosingProgress >= state.dimension * DRAG_CLOSE_RATIO ||
        velocity > DRAG_CLOSE_VELOCITY);

    if (shouldClose) {
      // Leave `transition: none` and the dragged transform exactly as they
      // are. Radix's own `data-[state=closed]:animate-out` exit animation
      // has no explicit 0% keyframe for `transform`, so the browser derives
      // it from the element's current (dragged) transform — the panel keeps
      // sliding off in the same direction instead of snapping back to
      // center first. We just need to flip the open state.
      closeButtonRef.current?.click();
      return;
    }

    // Snap back: re-enable a real CSS transition now that the drag is over,
    // then let it animate back to the resting position.
    panelEl.style.transition = "transform 300ms cubic-bezier(0.32, 0.72, 0, 1)";
    panelEl.style.transform = "translate3d(0, 0, 0)";
    const onTransitionEnd = (transitionEvent: TransitionEvent) => {
      if (transitionEvent.propertyName !== "transform") return;
      panelEl.style.transition = "";
      panelEl.removeEventListener("transitionend", onTransitionEnd);
    };
    panelEl.addEventListener("transitionend", onTransitionEnd);
  }, []);

  const dragHandlers = {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerEnd,
    onPointerCancel: handlePointerEnd,
  };

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DialogPrimitive.Content
        ref={setPanelRef}
        className={cn(drawerVariants({ side: resolvedSide }), className)}
        {...props}
        {...(isHandleDrag ? undefined : dragHandlers)}
      >
        {isHandleDrag && (
          <div
            aria-hidden="true"
            className={cn(
              "absolute left-1/2 h-1.5 w-12 -translate-x-1/2 touch-none rounded-full bg-muted-foreground/30",
              resolvedSide === "bottom" ? "top-2" : "bottom-2",
            )}
            {...dragHandlers}
          />
        )}
        {children}
        {/* Hidden trigger the drag handlers use to route a drag-past-threshold
            release through Radix's normal close path (same as the visible
            close button), so onOpenChange/state stay fully Radix-owned. */}
        <DialogPrimitive.Close
          ref={closeButtonRef}
          className="hidden"
          aria-hidden="true"
          tabIndex={-1}
        />
        <DialogPrimitive.Close asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-3 h-7 w-7"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = DialogPrimitive.Content.displayName;

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-foreground",
      className,
    )}
    {...props}
  />
));
DrawerTitle.displayName = DialogPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
};
