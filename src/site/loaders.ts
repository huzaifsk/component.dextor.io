import type { ComponentType } from "react";

const demoModules = import.meta.glob("./demos/*.tsx", {
  eager: true,
}) as Record<string, { default: ComponentType }>;

const sourceModules = import.meta.glob("../components/ui/*.tsx", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export function getDemo(slug: string) {
  const mod = demoModules[`./demos/${slug}-demo.tsx`];
  return mod?.default;
}

export function getSource(sourceFile: string) {
  return (
    sourceModules[`../components/ui/${sourceFile}`] ?? "// source not found"
  );
}
