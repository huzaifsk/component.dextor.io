import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-button";

export default function RadioButtonDemo() {
  const [value, setValue] = useState("comfortable");
  const options = [
    { value: "default", label: "Default" },
    { value: "comfortable", label: "Comfortable" },
    { value: "compact", label: "Compact" },
  ];

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-3 text-sm font-medium text-foreground"
        >
          <RadioGroupItem value={option.value} />
          {option.label}
        </label>
      ))}
    </RadioGroup>
  );
}
