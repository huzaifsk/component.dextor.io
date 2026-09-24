import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../../components/ui/collapsible";
import { Button } from "../../components/ui/button";

export default function CollapsibleDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold text-foreground">3 people starred this repo</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-border px-4 py-2 text-sm text-foreground">
        @huzaifsk
      </div>
      <CollapsibleContent className="space-y-2 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="rounded-md border border-border px-4 py-2 text-sm text-foreground">
          @radix-ui
        </div>
        <div className="rounded-md border border-border px-4 py-2 text-sm text-foreground">
          @shadcn
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
