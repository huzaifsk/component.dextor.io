import { TiltCard } from "../../components/ui/tilt-card";

export default function TiltCardDemo() {
  return (
    <TiltCard className="w-64">
      <h3 className="font-semibold">Move your cursor</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        The card tilts toward the pointer and eases back on leave.
      </p>
    </TiltCard>
  );
}
