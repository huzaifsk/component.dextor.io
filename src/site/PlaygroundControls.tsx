import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";

export interface PlaygroundSelectControl {
  prop: string;
  label: string;
  type: "select";
  options: string[];
  default: string;
}

export interface PlaygroundBooleanControl {
  prop: string;
  label: string;
  type: "boolean";
  default: boolean;
}

export interface PlaygroundTextControl {
  prop: string;
  label: string;
  type: "text";
  default: string;
}

export interface PlaygroundNumberControl {
  prop: string;
  label: string;
  type: "number";
  default: number;
  min?: number;
  max?: number;
  step?: number;
}

export type PlaygroundControl =
  | PlaygroundSelectControl
  | PlaygroundBooleanControl
  | PlaygroundTextControl
  | PlaygroundNumberControl;

export interface PlaygroundConfig {
  componentName: string;
  component: React.ComponentType<Record<string, unknown>>;
  controls: PlaygroundControl[];
}

function generateCode(
  componentName: string,
  controls: PlaygroundControl[],
  values: Record<string, string | boolean | number>,
) {
  const children = controls.find((c) => c.prop === "children")
    ? values.children
    : undefined;

  const propsStr = controls
    .filter((c) => c.prop !== "children")
    .map((c) => {
      const value = values[c.prop];
      if (c.type === "boolean") return value ? c.prop : null;
      if (c.type === "number") return `${c.prop}={${value}}`;
      return `${c.prop}="${value}"`;
    })
    .filter(Boolean)
    .join(" ");

  const openTag = propsStr ? `<${componentName} ${propsStr}>` : `<${componentName}>`;
  return children !== undefined
    ? `${openTag}${children}</${componentName}>`
    : propsStr
      ? `<${componentName} ${propsStr} />`
      : `<${componentName} />`;
}

export function Playground({ config }: { config: PlaygroundConfig }) {
  const { componentName, component: Component, controls } = config;
  const [values, setValues] = React.useState<Record<string, string | boolean | number>>(() => {
    const initial: Record<string, string | boolean | number> = {};
    for (const control of controls) initial[control.prop] = control.default;
    return initial;
  });

  const setValue = (prop: string, value: string | boolean | number) => {
    setValues((prev) => ({ ...prev, [prop]: value }));
  };

  const { children, ...renderProps } = values as Record<string, string | boolean | number> & {
    children?: string;
  };

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold">Playground</h2>
      <div className="mt-3 overflow-hidden rounded-xl border border-border">
        <div className="flex min-h-[160px] items-center justify-center bg-muted/30 p-10">
          <div key={JSON.stringify(values)} className="animate-in fade-in-0 zoom-in-[0.98] duration-150">
            <Component {...renderProps}>{children}</Component>
          </div>
        </div>
        <div className="flex flex-wrap items-end gap-5 border-t border-border bg-card p-4">
          {controls.map((control) => (
            <div key={control.prop} className="flex flex-col gap-1.5">
              <Label className="text-xs text-muted-foreground">{control.label}</Label>
              {control.type === "select" && (
                <Select
                  value={values[control.prop] as string}
                  onValueChange={(v) => setValue(control.prop, v)}
                >
                  <SelectTrigger className="h-8 w-[150px] text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {control.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {control.type === "boolean" && (
                <Switch
                  checked={values[control.prop] as boolean}
                  onCheckedChange={(v) => setValue(control.prop, v)}
                />
              )}
              {control.type === "text" && (
                <input
                  value={values[control.prop] as string}
                  onChange={(e) => setValue(control.prop, e.target.value)}
                  className="h-8 w-[150px] rounded-md border border-input bg-background px-2 text-xs text-foreground outline-none transition-colors duration-150 hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring"
                />
              )}
              {control.type === "number" && (
                <input
                  type="number"
                  value={values[control.prop] as number}
                  min={control.min}
                  max={control.max}
                  step={control.step}
                  onChange={(e) => setValue(control.prop, Number(e.target.value))}
                  className="h-8 w-[150px] rounded-md border border-input bg-background px-2 text-xs text-foreground outline-none transition-colors duration-150 hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring"
                />
              )}
            </div>
          ))}
        </div>
        <SyntaxHighlighter
          language="tsx"
          style={oneDark}
          customStyle={{ margin: 0, fontSize: "0.8125rem", borderTop: "1px solid hsl(var(--border))" }}
        >
          {generateCode(componentName, controls, values)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
