import { useState } from "react";
import { Input } from "../../components/ui/input";

export default function InputDemo() {
  const [value, setValue] = useState("");
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Input
        placeholder="Email"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Input
        placeholder="Invalid input"
        variant="error"
        defaultValue="not-an-email"
      />
    </div>
  );
}
