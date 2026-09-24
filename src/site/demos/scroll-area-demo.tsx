import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";

const tags = Array.from({ length: 20 }, (_, i) => `Tag ${i + 1}`);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border border-border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none text-foreground">
          Tags
        </h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm text-foreground">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
