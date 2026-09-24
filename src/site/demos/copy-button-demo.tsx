import { CopyButton } from "../../components/ui/copy-button";

export default function CopyButtonDemo() {
  return (
    <div className="flex items-center gap-2 rounded-md border border-border bg-muted/30 py-2 pl-3 pr-1.5 font-mono text-sm">
      npm i dextor-components
      <CopyButton value="npm i dextor-components" />
    </div>
  );
}
