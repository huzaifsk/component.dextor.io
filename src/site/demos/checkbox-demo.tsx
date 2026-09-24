import { useState } from "react";
import { Checkbox } from "../../components/ui/checkbox";

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(true);
  return (
    <label className="flex items-center gap-3 text-sm font-medium text-foreground">
      <Checkbox
        checked={checked}
        onCheckedChange={(value) => setChecked(value === true)}
      />
      Accept terms and conditions
    </label>
  );
}
