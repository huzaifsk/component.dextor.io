import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

export default function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  );
}
