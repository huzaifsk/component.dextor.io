import { Sidebar, type SidebarItem } from "../../components/ui/sidebar";

const items: SidebarItem[] = [
  { label: "Dashboard", href: "#dashboard" },
  {
    label: "Components",
    items: [
      { label: "Button", href: "#button" },
      { label: "Dialog", href: "#dialog" },
      { label: "Select", href: "#select" },
    ],
  },
  { label: "Settings", href: "#settings" },
];

export default function SidebarDemo() {
  return (
    <div className="w-64 rounded-lg border border-border bg-card">
      <Sidebar items={items} activeHref="#dashboard" />
    </div>
  );
}
