import { useState } from "react";
import { DatePicker } from "../../components/ui/date-picker";

export default function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <DatePicker
        selected={date}
        onSelect={setDate}
        placeholder="Pick a date"
      />
      <p className="text-sm text-muted-foreground">
        {date ? `Selected: ${date.toLocaleDateString()}` : "No date selected"}
      </p>
    </div>
  );
}
