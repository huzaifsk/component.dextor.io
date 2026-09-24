import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";
import { Avatar } from "../../components/ui/avatar";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://twitter.com/radix_ui"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          @radix
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-4">
          <Avatar
            src="https://github.com/radix-ui.png"
            alt="Radix UI"
            fallback="RX"
          />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-foreground">
              @radix
            </h4>
            <p className="text-sm text-muted-foreground">
              Unstyled, accessible UI primitives for building high-quality
              design systems and web apps in React.
            </p>
            <p className="text-xs text-muted-foreground">
              Joined December 2020
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
