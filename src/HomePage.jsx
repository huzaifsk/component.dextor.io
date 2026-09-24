import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Blocks,
  Code,
  Copy,
  Moon,
  Palette,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import { registry, CATEGORY_ORDER } from "./site/registry";
import PackageJson from "../package.json";
import {
  Button,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  Avatar,
  Switch,
  Separator,
} from "./components";
import { useInView } from "./site/use-in-view";
import { useCountUp } from "./site/use-count-up";
import { spotlightOnMouseMove } from "./site/use-spotlight";
import { fireConfetti } from "./site/confetti";
import { AnimatedCheckmark } from "./site/AnimatedCheckmark";
import { cn } from "./lib/utils";

const FILTERS = ["All", ...CATEGORY_ORDER];

const PACKAGE_MANAGERS = [
  { id: "npm", label: "npm", cmd: "npm i dextor-components" },
  { id: "pnpm", label: "pnpm", cmd: "pnpm add dextor-components" },
  { id: "yarn", label: "yarn", cmd: "yarn add dextor-components" },
  { id: "bun", label: "bun", cmd: "bun add dextor-components" },
];

const STATS = [
  { label: "components", target: registry.length },
  { label: "TypeScript", target: 100, suffix: "%" },
  { label: "dependencies", value: "Radix UI" },
  { label: "themes", value: "Light / Dark" },
];

const MARQUEE_ITEMS = [
  "React",
  "TypeScript",
  "Radix UI",
  "Tailwind CSS",
  "class-variance-authority",
  "Vite",
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Accessible by default",
    description: "Built on Radix UI primitives — correct keyboard nav, focus management, and ARIA come for free, not bolted on.",
  },
  {
    icon: Palette,
    title: "Themeable",
    description: "CSS-variable design tokens make restyling a rebrand, not a rewrite.",
  },
  {
    icon: Moon,
    title: "Dark mode built-in",
    description: "Every component ships light and dark palettes out of the box.",
  },
  {
    icon: Code,
    title: "TypeScript first",
    description: "Real, bundled type declarations for every prop — no guessing, no @types package.",
  },
  {
    icon: Zap,
    title: "Smooth by design",
    description: "Motion tuned for feel, not decoration — fast, interruptible, and respectful of reduced-motion.",
  },
  {
    icon: Blocks,
    title: "Composable",
    description: "Compound components (Card, Dialog, Select...) so you assemble exactly the layout you need.",
  },
];

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.29-1.24-1.64-1.24-1.64-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.12 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.76.54A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function StatItem({ stat }) {
  const [countRef, count] = useCountUp(stat.target ?? 0);
  const display =
    typeof stat.target === "number" ? `${count}${stat.suffix ?? ""}` : stat.value;
  return (
    <div ref={countRef} className="text-center">
      <div className="text-2xl font-bold tracking-tight tabular-nums">{display}</div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
}

function StatsStrip() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-4 transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      {STATS.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-8">
          <StatItem stat={stat} />
          {i < STATS.length - 1 && (
            <Separator orientation="vertical" className="hidden h-8 sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="group/marquee mask-fade-x overflow-hidden border-y border-border bg-muted/20 py-4">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturesGrid() {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className="mt-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Everything a design system needs
        </h2>
        <p className="mt-3 text-muted-foreground">
          Not just styled boxes — real, considered primitives.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.title}
            onMouseMove={spotlightOnMouseMove}
            style={{ transitionDelay: inView ? `${i * 60}ms` : "0ms" }}
            className={`spotlight-card group overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md ${
              inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{feature.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroShowcase() {
  const [enabled, setEnabled] = useState(true);
  const [copied, setCopied] = useState(false);
  const [pm, setPm] = useState("npm");
  const terminalRef = useRef(null);
  const pmTabRefs = useRef({});
  const [pmIndicator, setPmIndicator] = useState({ left: 0, width: 0 });

  const activeCmd = PACKAGE_MANAGERS.find((p) => p.id === pm)?.cmd ?? PACKAGE_MANAGERS[0].cmd;

  useEffect(() => {
    const el = pmTabRefs.current[pm];
    if (el) setPmIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [pm]);

  const handleCopy = () => {
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);

    let alreadyCelebrated = true;
    try {
      alreadyCelebrated = localStorage.getItem("dextor-install-copied") === "1";
      localStorage.setItem("dextor-install-copied", "1");
    } catch {
      // ignore
    }
    if (!alreadyCelebrated) fireConfetti(terminalRef.current);
  };

  return (
    <div className="mx-auto mt-14 max-w-4xl animate-in fade-in-0 slide-in-from-bottom-3 duration-700 [animation-delay:150ms] [animation-fill-mode:backwards]">
      <div className="grid overflow-hidden rounded-xl border border-border shadow-lg shadow-primary/5 sm:grid-cols-2">
        <div ref={terminalRef} className="relative bg-[#0d1117] p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <CopyToClipboard text={activeCmd} onCopy={handleCopy}>
              <button
                type="button"
                aria-label="Copy install command"
                className="rounded p-1 text-[#8b949e] transition-colors hover:bg-white/10 hover:text-[#e6edf3]"
              >
                {copied ? (
                  <AnimatedCheckmark className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </CopyToClipboard>
          </div>
          <div className="relative mb-3 flex items-center gap-4 border-b border-white/10 text-xs">
            {PACKAGE_MANAGERS.map((p) => (
              <button
                key={p.id}
                ref={(el) => {
                  pmTabRefs.current[p.id] = el;
                }}
                type="button"
                onClick={() => setPm(p.id)}
                className={cn(
                  "pb-2 font-mono transition-colors duration-150",
                  pm === p.id ? "text-[#e6edf3]" : "text-[#8b949e] hover:text-[#c9d1d9]",
                )}
              >
                {p.label}
              </button>
            ))}
            <span
              className="absolute -bottom-px h-0.5 bg-[#e6edf3] transition-[left,width] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]"
              style={{ left: pmIndicator.left, width: pmIndicator.width }}
            />
          </div>
          <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
            <code key={pm} className="animate-in fade-in-0 duration-150">
              <span className="text-[#8b949e]">$ </span>
              <span className="text-[#e6edf3]">{activeCmd}</span>
              {"\n\n"}
              <span className="text-[#8b949e]">{"// App.tsx"}</span>
              {"\n"}
              <span className="text-[#ff7b72]">import</span>
              <span className="text-[#e6edf3]"> {"{ Button }"} </span>
              <span className="text-[#ff7b72]">from</span>
              <span className="text-[#a5d6ff]">{' "dextor-components"'}</span>
              <span className="text-[#e6edf3]">;</span>
            </code>
          </pre>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 bg-card p-8">
          <div className="flex items-center gap-3">
            <Avatar fallback="DX" />
            <div>
              <div className="text-sm font-medium">Dextor UI</div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                Ready to ship
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between rounded-lg border border-border px-4 py-2.5">
            <span className="text-sm">Notifications</span>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>
          <div className="flex w-full flex-wrap gap-2">
            <Button size="sm">Default</Button>
            <Button size="sm" variant="secondary">
              Secondary
            </Button>
            <Button size="sm" variant="outline">
              Outline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? registry : registry.filter((entry) => entry.category === filter);

  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mask-fade-edges bg-dot-grid text-border"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 animate-glow-pulse rounded-full bg-primary/20 blur-[120px]"
        />

        <div className="container relative mx-auto px-4 pb-16 pt-20 lg:px-8">
          <div className="mx-auto max-w-2xl animate-in fade-in-0 slide-in-from-bottom-2 text-center duration-700">
            <Badge variant="secondary" className="mb-5 gap-1.5">
              <Sparkles className="h-3 w-3" />
              v{PackageJson.version} · {registry.length} components
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Ship interfaces that{" "}
              <span className="text-gradient">feel finished</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              A fully accessible React component library built on Radix UI and
              Tailwind CSS — tuned motion, real dark mode, and TypeScript
              everywhere.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link to="/guide">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/dextor-io/component.dextor.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </div>

      <Marquee />

      <div className="container mx-auto px-4 py-16 lg:px-8">
        <StatsStrip />

        <FeaturesGrid />

        {/* Components */}
        <div className="mt-28">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Components</h2>
              <p className="mt-1 text-muted-foreground">
                Browse every component with a live preview and real source.
              </p>
            </div>
            <Tabs value={filter} onValueChange={setFilter}>
              <TabsList>
                {FILTERS.map((f) => (
                  <TabsTrigger key={f} value={f}>
                    {f}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((entry, index) => (
              <Link
                key={entry.slug}
                to={`/components/${entry.slug}`}
                onMouseMove={spotlightOnMouseMove}
                style={{ animationDelay: `${Math.min(index, 8) * 30}ms` }}
                className="spotlight-card group animate-in fade-in-0 slide-in-from-bottom-1 overflow-hidden rounded-xl border border-border bg-card p-5 [animation-fill-mode:backwards] [transition:transform_200ms_cubic-bezier(0.23,1,0.32,1),box-shadow_200ms_cubic-bezier(0.23,1,0.32,1),border-color_200ms_cubic-bezier(0.23,1,0.32,1),background-color_200ms_cubic-bezier(0.23,1,0.32,1)] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:shadow-md active:translate-y-0 active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{entry.title}</h3>
                  <Badge
                    variant="outline"
                    className="text-[10px] font-normal text-muted-foreground"
                  >
                    {entry.category}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{entry.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary opacity-0 transition-all duration-150 group-hover:translate-x-0.5 group-hover:opacity-100">
                  View component <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-border pb-8 pt-8 text-center">
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://labs.dextor.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dextor Lab
            </a>
            <a
              href="https://github.com/dextor-io/component.dextor.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
            <span className="text-muted-foreground">v{PackageJson.version}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
