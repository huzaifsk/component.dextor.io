import { Button } from "../../components/ui/button";
import { Toaster, toast } from "../../components/ui/sonner";

export default function SonnerDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Toaster />
      <Button onClick={() => toast.success("Changes saved successfully.")}>
        Show success toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event created", {
            description: "Monday, September 24th at 4:00pm",
            action: {
              label: "Undo",
              onClick: () => toast.info("Undone"),
            },
          })
        }
      >
        Show action toast
      </Button>
      <Button
        variant="destructive"
        onClick={() => toast.error("Something went wrong.")}
      >
        Show error toast
      </Button>
    </div>
  );
}
