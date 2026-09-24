import { useState } from "react";
import { Bold, Italic, Underline } from "lucide-react";
import {
  ToggleButton,
  ToggleGroup,
  ToggleGroupItem,
} from "../../components/ui/toggle-button";

export default function ToggleButtonDemo() {
  const [pressed, setPressed] = useState(false);
  const [formats, setFormats] = useState<string[]>(["bold"]);

  return (
    <div className="flex flex-col gap-4">
      <ToggleButton
        pressed={pressed}
        onPressedChange={setPressed}
        variant="outline"
        label="Toggle mute"
      >
        {pressed ? "On" : "Off"}
      </ToggleButton>

      <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
