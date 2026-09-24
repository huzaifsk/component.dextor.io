import * as React from "react";
import { ClockIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface TimeValue {
  hour: number;
  minute: number;
}

export interface TimePickerProps {
  value?: TimeValue;
  onValueChange?: (value: TimeValue) => void;
  format?: 12 | 24;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

function formatTime(value: TimeValue | undefined, format: 12 | 24) {
  if (!value) return undefined;
  const minute = value.minute.toString().padStart(2, "0");
  if (format === 24) {
    return `${value.hour.toString().padStart(2, "0")}:${minute}`;
  }
  const period = value.hour >= 12 ? "PM" : "AM";
  const hour12 = value.hour % 12 === 0 ? 12 : value.hour % 12;
  return `${hour12}:${minute} ${period}`;
}

const TimePicker = React.forwardRef<HTMLButtonElement, TimePickerProps>(
  (
    {
      value,
      onValueChange,
      format = 24,
      placeholder = "Pick a time",
      disabled,
      className,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const hourListRef = React.useRef<HTMLDivElement>(null);
    const minuteListRef = React.useRef<HTMLDivElement>(null);

    const hours = React.useMemo(
      () =>
        Array.from({ length: format === 24 ? 24 : 12 }, (_, i) =>
          format === 24 ? i : i + 1,
        ),
      [format],
    );
    const minutes = React.useMemo(
      () => Array.from({ length: 60 }, (_, i) => i),
      [],
    );

    const displayHour =
      value === undefined
        ? undefined
        : format === 24
          ? value.hour
          : value.hour % 12 === 0
            ? 12
            : value.hour % 12;

    const handleHourSelect = (hour: number) => {
      const nextHour =
        format === 24
          ? hour
          : (value?.hour ?? 0) >= 12
            ? (hour % 12) + 12
            : hour % 12;
      onValueChange?.({ hour: nextHour, minute: value?.minute ?? 0 });
    };

    const handleMinuteSelect = (minute: number) => {
      onValueChange?.({ hour: value?.hour ?? 0, minute });
    };

    React.useEffect(() => {
      if (!open) return;
      const scrollToSelected = (
        container: HTMLDivElement | null,
        selector: string,
      ) => {
        const el = container?.querySelector<HTMLElement>(selector);
        el?.scrollIntoView({ block: "center" });
      };
      scrollToSelected(hourListRef.current, "[aria-selected=true]");
      scrollToSelected(minuteListRef.current, "[aria-selected=true]");
    }, [open]);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-[160px] justify-start text-left font-normal",
              !value && "text-muted-foreground",
              className,
            )}
          >
            <ClockIcon className="size-4" />
            {formatTime(value, format) ?? placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2" align="start">
          <div className="flex gap-2">
            <div
              ref={hourListRef}
              role="listbox"
              aria-label="Hour"
              className="h-48 w-16 overflow-y-auto scroll-py-1 rounded-md border border-border"
            >
              {hours.map((hour) => {
                const selected = displayHour === hour;
                return (
                  <button
                    key={hour}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => handleHourSelect(hour)}
                    className={cn(
                      "flex w-full items-center justify-center rounded-sm py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
                      selected &&
                        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                    )}
                  >
                    {hour.toString().padStart(2, "0")}
                  </button>
                );
              })}
            </div>
            <div
              ref={minuteListRef}
              role="listbox"
              aria-label="Minute"
              className="h-48 w-16 overflow-y-auto scroll-py-1 rounded-md border border-border"
            >
              {minutes.map((minute) => {
                const selected = value?.minute === minute;
                return (
                  <button
                    key={minute}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => handleMinuteSelect(minute)}
                    className={cn(
                      "flex w-full items-center justify-center rounded-sm py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
                      selected &&
                        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                    )}
                  >
                    {minute.toString().padStart(2, "0")}
                  </button>
                );
              })}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
);
TimePicker.displayName = "TimePicker";

export { TimePicker };
