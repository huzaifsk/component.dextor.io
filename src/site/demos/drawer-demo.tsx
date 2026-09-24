import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "../../components/ui/drawer";

export default function DrawerDemo() {
  const [bottomOpen, setBottomOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-3">
      {/* Bottom sheet: drag the grabber handle down (or flick it) to dismiss,
          just like a native iOS/Vercel bottom sheet. */}
      <Drawer open={bottomOpen} onOpenChange={setBottomOpen}>
        <DrawerTrigger asChild>
          <Button>Open Bottom Sheet</Button>
        </DrawerTrigger>
        <DrawerContent side="bottom">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>
              Drag the handle down, or flick it, to dismiss.
            </DrawerDescription>
          </DrawerHeader>
          <nav className="flex flex-col gap-2 text-sm">
            <a
              className="rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
              href="#"
            >
              Settings
            </a>
            <a
              className="rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
              href="#"
            >
              Profile
            </a>
          </nav>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Side drawer: draggable across its whole surface toward the right
          edge it slides out from. */}
      <Drawer open={rightOpen} onOpenChange={setRightOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Side Drawer</Button>
        </DrawerTrigger>
        <DrawerContent side="right">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>
              Drag anywhere on the panel toward the right edge to dismiss.
            </DrawerDescription>
          </DrawerHeader>
          <nav className="flex flex-col gap-2 text-sm">
            <a
              className="rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
              href="#"
            >
              Settings
            </a>
            <a
              className="rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
              href="#"
            >
              Profile
            </a>
          </nav>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
