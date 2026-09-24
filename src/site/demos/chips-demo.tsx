import { useState } from "react";
import { Chips } from "../../components/ui/chips";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Fig", value: "fig" },
];

export default function ChipsDemo() {
  const [value, setValue] = useState<string[]>(["banana"]);
  return <Chips items={items} value={value} onValueChange={setValue} />;
}
