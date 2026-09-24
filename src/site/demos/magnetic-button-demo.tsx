import { MagneticButton } from "../../components/ui/magnetic-button";

export default function MagneticButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <MagneticButton>Hover me</MagneticButton>
      <MagneticButton variant="outline" strength={0.5}>
        Stronger pull
      </MagneticButton>
    </div>
  );
}
