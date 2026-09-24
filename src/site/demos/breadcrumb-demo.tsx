import { Breadcrumb } from "../../components/ui/breadcrumb";

const items = [
  { label: "Home", href: "#" },
  { label: "Components", href: "#" },
  { label: "Breadcrumb" },
];

export default function BreadcrumbDemo() {
  return <Breadcrumb items={items} />;
}
