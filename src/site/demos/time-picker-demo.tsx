import { useState } from "react";
import { TimePicker, type TimeValue } from "../../components/ui/time-picker";

export default function TimePickerDemo() {
  const [time, setTime] = useState<TimeValue | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <TimePicker
        value={time}
        onValueChange={setTime}
        placeholder="Pick a time"
      />
      <p className="text-sm text-muted-foreground">
        {time
          ? `Selected: ${time.hour.toString().padStart(2, "0")}:${time.minute
              .toString()
              .padStart(2, "0")}`
          : "No time selected"}
      </p>
    </div>
  );
}
