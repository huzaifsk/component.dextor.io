import { Separator } from "../../components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none text-foreground">
          Dextor Components
        </h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm text-foreground">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Guide</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  );
}
