import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArrowRight } from "lucide-react";
import { registry } from "./site/registry";

function CodeBlock({ language = "bash", children }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{ margin: 0, fontSize: "0.875rem" }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
      <div className="space-y-3 text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-foreground">
        {children}
      </div>
    </section>
  );
}

const TOC = [
  { id: "installation", label: "Installation" },
  { id: "setup", label: "Setup" },
  { id: "dark-mode", label: "Dark mode" },
  { id: "providers", label: "Providers" },
  { id: "usage", label: "Usage" },
  { id: "typescript", label: "TypeScript" },
  { id: "components", label: "All components" },
];

const Guide = () => {
  return (
    <div className="container mx-auto max-w-5xl px-6 py-10 lg:px-10">
      <div className="lg:grid lg:grid-cols-[1fr_180px] lg:gap-12">
        <div className="max-w-3xl">
          <h1 className="mb-2 text-3xl font-bold">Getting Started</h1>
          <p className="mb-10 text-muted-foreground">
            Dextor Components is a fully customizable, accessible React component library
            built on Radix UI primitives and Tailwind CSS design tokens.
          </p>

          <Section id="installation" title="📦 Installation">
            <p>Install the package via npm or yarn:</p>
            <CodeBlock>npm i dextor-components</CodeBlock>
          </Section>

          <Section id="setup" title="🔧 Setup">
            <p>
              The package ships a precompiled stylesheet, so no Tailwind configuration is
              required to get started. Import it once in your app&apos;s entry file:
            </p>
            <CodeBlock language="css">{`@import "dextor-components/style.css";`}</CodeBlock>
            <p>
              Already using Tailwind CSS in your own project? Add the package to your
              content glob instead, so the components stay themeable and purgeable
              alongside your own styles:
            </p>
            <CodeBlock language="javascript">{`/** @type {import('tailwindcss').Config} */
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
};`}</CodeBlock>
          </Section>

          <Section id="dark-mode" title="🌗 Dark mode">
            <p>
              Every component is styled with CSS variables that automatically switch
              between a light and dark palette. To enable dark mode, add (or remove) a{" "}
              <code>dark</code> class on your <code>&lt;html&gt;</code> element — the
              components need nothing else. A minimal toggle looks like this:
            </p>
            <CodeBlock language="jsx">{`function useDarkMode() {
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };
  return toggle;
}`}</CodeBlock>
            <p>
              This site&apos;s own navbar toggle (top right) uses the same approach, plus
              persisting the choice to <code>localStorage</code> and respecting{" "}
              <code>prefers-color-scheme</code> on first load.
            </p>
          </Section>

          <Section id="providers" title="🧩 Providers">
            <p>
              A couple of components need a provider mounted once near the root of your
              app before they work anywhere else in the tree:
            </p>
            <CodeBlock language="jsx">{`import { Toaster, TooltipProvider } from "dextor-components";

function Root() {
  return (
    <TooltipProvider>
      <App />
      <Toaster />
    </TooltipProvider>
  );
}`}</CodeBlock>
            <p>
              <code>Toaster</code> renders the toast viewport that <code>toast()</code>{" "}
              calls from anywhere in your app feed into. <code>TooltipProvider</code>{" "}
              controls shared hover-delay behavior for every <code>Tooltip</code> beneath
              it.
            </p>
          </Section>

          <Section id="usage" title="✨ Usage">
            <p>Here&apos;s an example of how to use a component from the library:</p>
            <CodeBlock language="jsx">{`import { Button } from "dextor-components";

function App() {
  return (
    <div className="flex gap-2 p-4">
      <Button onClick={() => alert("Hello, Dextor!")}>Click Me</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive" size="sm">Delete</Button>
    </div>
  );
}

export default App;`}</CodeBlock>
            <p>
              Most components accept a <code>variant</code> and/or <code>size</code> prop
              for common styling, plus a <code>className</code> that merges with (rather
              than replaces) the component&apos;s own classes — so you can override
              anything you need to.
            </p>
          </Section>

          <Section id="typescript" title="🔷 TypeScript">
            <p>
              The entire library is written in TypeScript. Every component ships real,
              bundled type declarations — no <code>@types</code> package needed, and every
              prop is documented through its own exported interface, e.g.{" "}
              <code>ButtonProps</code>, <code>DialogContentProps</code>.
            </p>
          </Section>

          <Section id="components" title="🧱 All components">
            <p>
              Browse every component with a live preview and its real source code:
            </p>
            <div className="not-prose mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {registry.map((entry) => (
                <Link
                  key={entry.slug}
                  to={`/components/${entry.slug}`}
                  className="group flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors duration-150 hover:border-primary/40 hover:bg-accent"
                >
                  {entry.title}
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </Section>

          <p className="text-center text-muted-foreground">
            Start building modern, elegant UIs with Dextor Components! 🚀
          </p>
        </div>

        <nav className="hidden lg:block">
          <div className="sticky top-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              On this page
            </p>
            <ul className="space-y-2 border-l border-border pl-4 text-sm">
              {TOC.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Guide;
