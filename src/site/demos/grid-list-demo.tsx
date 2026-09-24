import { Zap, Palette, Accessibility, Puzzle } from "lucide-react";
import { GridList } from "../../components/ui/grid-list";

const items = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Fast",
    description: "Built for speed with minimal overhead.",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Themeable",
    description: "Design tokens make theming effortless.",
  },
  {
    icon: <Accessibility className="h-5 w-5" />,
    title: "Accessible",
    description: "Keyboard and screen-reader friendly by default.",
  },
  {
    icon: <Puzzle className="h-5 w-5" />,
    title: "Composable",
    description: "Small pieces that combine into bigger patterns.",
  },
];

export default function GridListDemo() {
  return <GridList items={items} columns={2} />;
}
