import { useEffect, useState } from "react";
import { Progress } from "../../components/ui/progress";
import { Button } from "../../components/ui/button";

export default function ProgressDemo() {
  const [value, setValue] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Progress value={value} />
      <Button
        variant="outline"
        size="sm"
        className="w-fit"
        onClick={() => setValue((v) => (v >= 100 ? 0 : Math.min(100, v + 20)))}
      >
        Bump progress
      </Button>
    </div>
  );
}
