import { Marquee } from "../../components/ui/marquee";

const ITEMS = ["React", "TypeScript", "Radix UI", "Tailwind CSS", "Vite"];

export default function MarqueeDemo() {
  return (
    <Marquee className="w-full max-w-sm">
      {ITEMS.map((item) => (
        <span key={item} className="text-sm font-medium text-muted-foreground">
          {item}
        </span>
      ))}
    </Marquee>
  );
}
