import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Badge } from "../components/ui/badge";
import { Avatar } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { ToggleButton } from "../components/ui/toggle-button";
import { Rating } from "../components/ui/rating";
import { Separator } from "../components/ui/separator";
import { MagneticButton } from "../components/ui/magnetic-button";
import { TiltCard } from "../components/ui/tilt-card";
import { TextScramble } from "../components/ui/text-scramble";
import { NumberTicker } from "../components/ui/number-ticker";
import { ExpandingSearch } from "../components/ui/expanding-search";
import { PingBadge } from "../components/ui/ping-badge";
import type { PlaygroundConfig } from "./PlaygroundControls";

export const playgroundData: Record<string, PlaygroundConfig> = {
  button: {
    componentName: "Button",
    component: Button as PlaygroundConfig["component"],
    controls: [
      {
        prop: "variant",
        label: "Variant",
        type: "select",
        options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        default: "default",
      },
      {
        prop: "size",
        label: "Size",
        type: "select",
        options: ["default", "sm", "lg", "icon"],
        default: "default",
      },
      { prop: "disabled", label: "Disabled", type: "boolean", default: false },
      { prop: "children", label: "Label", type: "text", default: "Button" },
    ],
  },
  switch: {
    componentName: "Switch",
    component: Switch as PlaygroundConfig["component"],
    controls: [{ prop: "disabled", label: "Disabled", type: "boolean", default: false }],
  },
  badge: {
    componentName: "Badge",
    component: Badge as PlaygroundConfig["component"],
    controls: [
      {
        prop: "variant",
        label: "Variant",
        type: "select",
        options: ["default", "secondary", "destructive", "outline"],
        default: "default",
      },
      { prop: "children", label: "Label", type: "text", default: "Badge" },
    ],
  },
  avatar: {
    componentName: "Avatar",
    component: Avatar as PlaygroundConfig["component"],
    controls: [
      {
        prop: "size",
        label: "Size",
        type: "select",
        options: ["sm", "md", "lg"],
        default: "md",
      },
      { prop: "fallback", label: "Fallback", type: "text", default: "CN" },
    ],
  },
  input: {
    componentName: "Input",
    component: Input as PlaygroundConfig["component"],
    controls: [
      {
        prop: "variant",
        label: "Variant",
        type: "select",
        options: ["default", "error"],
        default: "default",
      },
      {
        prop: "size",
        label: "Size",
        type: "select",
        options: ["sm", "default", "lg"],
        default: "default",
      },
      { prop: "placeholder", label: "Placeholder", type: "text", default: "Email" },
      { prop: "disabled", label: "Disabled", type: "boolean", default: false },
    ],
  },
  textarea: {
    componentName: "Textarea",
    component: Textarea as PlaygroundConfig["component"],
    controls: [
      {
        prop: "placeholder",
        label: "Placeholder",
        type: "text",
        default: "Type your message here.",
      },
      { prop: "disabled", label: "Disabled", type: "boolean", default: false },
    ],
  },
  checkbox: {
    componentName: "Checkbox",
    component: Checkbox as PlaygroundConfig["component"],
    controls: [{ prop: "disabled", label: "Disabled", type: "boolean", default: false }],
  },
  "toggle-button": {
    componentName: "ToggleButton",
    component: ToggleButton as PlaygroundConfig["component"],
    controls: [
      {
        prop: "variant",
        label: "Variant",
        type: "select",
        options: ["default", "outline"],
        default: "default",
      },
      {
        prop: "size",
        label: "Size",
        type: "select",
        options: ["default", "sm", "lg"],
        default: "default",
      },
      { prop: "label", label: "Accessible Label", type: "text", default: "Toggle" },
      { prop: "children", label: "Children", type: "text", default: "B" },
    ],
  },
  rating: {
    componentName: "Rating",
    component: Rating as PlaygroundConfig["component"],
    controls: [
      {
        prop: "size",
        label: "Size",
        type: "select",
        options: ["sm", "md", "lg"],
        default: "md",
      },
      { prop: "disabled", label: "Disabled", type: "boolean", default: false },
    ],
  },
  separator: {
    componentName: "Separator",
    component: Separator as PlaygroundConfig["component"],
    controls: [
      {
        prop: "orientation",
        label: "Orientation",
        type: "select",
        options: ["horizontal", "vertical"],
        default: "horizontal",
      },
    ],
  },
  "magnetic-button": {
    componentName: "MagneticButton",
    component: MagneticButton as PlaygroundConfig["component"],
    controls: [
      {
        prop: "variant",
        label: "Variant",
        type: "select",
        options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        default: "default",
      },
      { prop: "strength", label: "Strength", type: "number", default: 0.35, min: 0, max: 1, step: 0.05 },
      { prop: "children", label: "Label", type: "text", default: "Hover me" },
    ],
  },
  "tilt-card": {
    componentName: "TiltCard",
    component: TiltCard as PlaygroundConfig["component"],
    controls: [
      { prop: "maxTilt", label: "Max tilt (deg)", type: "number", default: 10, min: 0, max: 30, step: 1 },
      { prop: "glare", label: "Glare", type: "boolean", default: true },
      { prop: "children", label: "Content", type: "text", default: "Move your cursor" },
    ],
  },
  "text-scramble": {
    componentName: "TextScramble",
    component: TextScramble as unknown as PlaygroundConfig["component"],
    controls: [
      { prop: "text", label: "Text", type: "text", default: "Ship interfaces that feel finished" },
      {
        prop: "trigger",
        label: "Trigger",
        type: "select",
        options: ["mount", "hover"],
        default: "mount",
      },
      { prop: "duration", label: "Duration (ms)", type: "number", default: 900, min: 100, max: 3000, step: 100 },
    ],
  },
  "number-ticker": {
    componentName: "NumberTicker",
    component: NumberTicker as unknown as PlaygroundConfig["component"],
    controls: [
      { prop: "value", label: "Value", type: "number", default: 1284, step: 1 },
      { prop: "prefix", label: "Prefix", type: "text", default: "$" },
      { prop: "decimals", label: "Decimals", type: "number", default: 0, min: 0, max: 4, step: 1 },
    ],
  },
  "expanding-search": {
    componentName: "ExpandingSearch",
    component: ExpandingSearch as PlaygroundConfig["component"],
    controls: [
      { prop: "placeholder", label: "Placeholder", type: "text", default: "Search components…" },
    ],
  },
  "ping-badge": {
    componentName: "PingBadge",
    component: PingBadge as PlaygroundConfig["component"],
    controls: [
      {
        prop: "variant",
        label: "Variant",
        type: "select",
        options: ["default", "destructive", "success"],
        default: "destructive",
      },
      {
        prop: "position",
        label: "Position",
        type: "select",
        options: ["top-right", "top-left", "bottom-right", "bottom-left"],
        default: "top-right",
      },
      { prop: "show", label: "Show", type: "boolean", default: true },
      { prop: "children", label: "Content", type: "text", default: "🔔" },
    ],
  },
};
