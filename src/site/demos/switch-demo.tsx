import { useState } from "react";
import { Switch } from "../../components/ui/switch";
import { Label } from "../../components/ui/label";

export default function SwitchDemo() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <Switch id="airplane-mode" checked={enabled} onCheckedChange={setEnabled} />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  );
}
