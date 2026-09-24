import { Bell } from "lucide-react";
import { PingBadge } from "../../components/ui/ping-badge";

export default function PingBadgeDemo() {
  return (
    <div className="flex items-center gap-8">
      <PingBadge>
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border">
          <Bell className="h-4 w-4" />
        </div>
      </PingBadge>
      <PingBadge variant="success">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border">
          <Bell className="h-4 w-4" />
        </div>
      </PingBadge>
    </div>
  );
}
