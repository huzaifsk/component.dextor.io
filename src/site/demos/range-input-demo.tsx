import { useState } from "react";
import { RangeInput } from "../../components/ui/range-input";

export default function RangeInputDemo() {
  const [value, setValue] = useState([50]);

  return (
    <div className="w-full max-w-sm">
      <div className="mb-3 flex items-center justify-between text-sm font-medium text-foreground">
        <span>Volume</span>
        <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
          {value[0]}
        </span>
      </div>
      <RangeInput
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
}
