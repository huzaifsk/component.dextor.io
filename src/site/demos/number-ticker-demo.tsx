import { useState } from "react";
import { Button } from "../../components/ui/button";
import { NumberTicker } from "../../components/ui/number-ticker";

export default function NumberTickerDemo() {
  const [value, setValue] = useState(1284);

  return (
    <div className="flex flex-col items-center gap-4">
      <NumberTicker value={value} className="text-4xl font-bold tabular-nums" prefix="$" />
      <Button size="sm" variant="outline" onClick={() => setValue((v) => v + Math.floor(Math.random() * 500))}>
        Add random amount
      </Button>
    </div>
  );
}
