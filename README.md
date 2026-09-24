# **Dextor Components**

A modern React component library built on Radix UI primitives and styled with Tailwind CSS. Fully typed, accessible by default, with real dark mode and 50+ components — from standard form/overlay primitives to polished micro-interaction components.

[![NPM](https://img.shields.io/npm/v/dextor-components.svg)](https://www.npmjs.com/package/dextor-components)
[![License](https://img.shields.io/npm/l/dextor-components)](https://github.com/huzaifsk/component.dextor.io/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/dextor-components)](https://www.npmjs.com/package/dextor-components)

## 🚀 **Features**

- **Built on Radix UI**: Overlay and interactive components (Dialog, Select, Popover, Accordion, and more) use Radix primitives under the hood — correct focus management, keyboard nav, and ARIA out of the box.
- **Fully typed**: Written in TypeScript with a bundled `.d.ts` for every export.
- **Real dark mode**: CSS-variable design tokens with a `darkMode: "class"` Tailwind config — no manual `dark:` overrides needed.
- **Tailwind CSS Support**: Pre-styled components using Tailwind CSS for a consistent design system, shipped with a precompiled stylesheet.
- **Micro-interaction components**: A dedicated `Interaction` set — `MagneticButton`, `LikeButton`, `TiltCard`, `TextScramble`, `NumberTicker`, `PingBadge`, and more — for the small, polished touches most libraries skip.
- **Customizable**: Easily extend and customize components to match your branding via `className` and `variant`/`size` props.
- **Accessible**: Components adhere to accessibility standards for an inclusive user experience.
- **Modular**: Import only what you need to optimize performance.

> Upgrading from 1.x? This is a breaking major release — see [CHANGELOG.md](CHANGELOG.md) for the full list of breaking changes before upgrading.

---

## 🌐 Website

Discover full documentation, live previews, and component guides on our official website:
👉 https://components.dextor.io/

---

## 🧩 **Components**

52 components across five categories — every one has a live playground and full props reference on the [website](https://components.dextor.io/).

- **Form**: Button, Input, Textarea, Checkbox, Radio Group, Switch, Dropdown, Range Slider, Rating, Chips, Date Picker, Time Picker, Toggle / Toggle Group, File Upload, Label
- **Overlay**: Modal, Drawer, Alert Dialog, Dropdown Menu, Context Menu, Popover, Hover Card, Tooltip, Command
- **Feedback**: Alert, Badge, Progress, Skeleton, Toast
- **Layout**: Card, Accordion, Tabs, Sidebar, Stepper, Pagination, Breadcrumb, Grid List, Scroll Area, Separator, Collapsible, Aspect Ratio, Avatar
- **Interaction**: Magnetic Button, Like Button, Tilt Card, Copy Button, Text Scramble, Shimmer Button, Number Ticker, Expanding Search, Ping Badge, Marquee

---

## 📦 **Installation**

Install the package via npm or yarn:

```bash
npm i dextor-components
```

---

## 🔧 **Setup**

The package ships a precompiled, ready-to-use stylesheet — no Tailwind setup required to get started:

```css
@import "dextor-components/style.css";
```

If you're already using Tailwind CSS in your project and want the library's components to be themeable/purgeable alongside your own styles, add the package to your content glob instead:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/dextor-components/**/*.{js,cjs}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## ✨ **Usage**

Here's an example of how to use a component from the library:

```jsx
import { Button } from "dextor-components";

function App() {
  return (
    <div className="p-4">
      <Button onClick={() => alert("Hello, Dextor!")}>Click Me</Button>
    </div>
  );
}

export default App;
```

Micro-interaction components work the same way — no extra setup:

```jsx
import { MagneticButton, PingBadge, NumberTicker } from "dextor-components";

function Nav() {
  return (
    <div className="flex items-center gap-4">
      <PingBadge>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border">🔔</span>
      </PingBadge>
      <NumberTicker value={1284} prefix="$" />
      <MagneticButton>Get started</MagneticButton>
    </div>
  );
}
```

## 🛠️ **Development**

Do you want to contribute or explore the source code? Clone the repository:

```bash
git clone https://github.com/huzaifsk/component.dextor.io.git
cd component.dextor.io
npm install
npm run dev
```

---

## 🤝 **Contributing**

Contributions are welcome! Feel free to open issues, suggest improvements, or submit pull requests. See the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

---

## 📜 **License**

This project is licensed under the [MIT License](LICENSE).

---

## 📢 **Feedback**

We’d love to hear your thoughts! Open an issue or reach out to us on [GitHub](https://github.com/dextor-io/).

---

Start building modern, elegant UIs with **Dextor Components**! 🚀
