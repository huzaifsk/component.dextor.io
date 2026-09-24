import { TextScramble } from "../../components/ui/text-scramble";

export default function TextScrambleDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <TextScramble text="Ship interfaces that feel finished" className="text-lg font-semibold" />
      <TextScramble
        text="Hover to scramble again"
        trigger="hover"
        className="cursor-pointer text-sm text-muted-foreground"
      />
    </div>
  );
}
