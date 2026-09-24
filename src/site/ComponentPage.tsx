import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import { ArrowLeft, Copy, PackageOpen } from "lucide-react";
import { getEntry } from "./registry";
import { getDemo, getSource } from "./loaders";
import { propsData } from "./props-data";
import { playgroundData } from "./playground-data";
import { Playground } from "./PlaygroundControls";
import { AnimatedCheckmark } from "./AnimatedCheckmark";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const TABS = ["preview", "code"] as const;
type Tab = (typeof TABS)[number];

export default function ComponentPage() {
  const { slug } = useParams<{ slug: string }>();
  const [tab, setTab] = useState<Tab>("preview");
  const [copied, setCopied] = useState(false);
  const tabRefs = useRef<Record<Tab, HTMLButtonElement | null>>({
    preview: null,
    code: null,
  });
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const entry = slug ? getEntry(slug) : undefined;

  useEffect(() => {
    const el = tabRefs.current[tab];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [tab, entry]);

  if (!entry) {
    return (
      <div className="container mx-auto px-8 py-16 text-center">
        <h1 className="text-2xl font-semibold">Component not found</h1>
        <Link
          to="/"
          className="text-primary underline-offset-4 hover:underline"
        >
          Back to all components
        </Link>
      </div>
    );
  }

  const Demo = getDemo(entry.slug);
  const source = getSource(entry.sourceFile);
  const doc = propsData[entry.slug];
  const playground = playgroundData[entry.slug];

  return (
    <div className="container mx-auto max-w-4xl px-8 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All components
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight">{entry.title}</h1>
      <p className="mt-2 text-muted-foreground">{entry.description}</p>

      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
        <div className="relative flex border-b border-border px-4">
          {TABS.map((t) => (
            <button
              key={t}
              ref={(el) => {
                tabRefs.current[t] = el;
              }}
              onClick={() => setTab(t)}
              className={cn(
                "px-4 py-3 text-sm font-medium capitalize transition-colors duration-150",
                tab === t
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
          <span
            className="absolute -bottom-px h-0.5 bg-primary transition-[left,width] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </div>

        <div key={tab} className="animate-blur-in">
          {tab === "preview" ? (
            <div className="flex min-h-[280px] w-full items-center justify-center bg-muted/30 p-10">
              {Demo ? (
                <Demo />
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <PackageOpen className="h-6 w-6" />
                  <p className="text-sm">No demo available</p>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <CopyToClipboard
                text={source}
                onCopy={() => {
                  setCopied(true);
                  toast.success("Copied to clipboard");
                  setTimeout(() => setCopied(false), 2000);
                }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-3 top-3 z-10"
                >
                  <span
                    key={copied ? "check" : "copy"}
                    className="inline-flex animate-in items-center gap-2 fade-in-0 zoom-in-75 duration-150"
                  >
                    {copied ? (
                      <AnimatedCheckmark className="h-3.5 w-3.5" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </span>
                </Button>
              </CopyToClipboard>
              <SyntaxHighlighter
                language="tsx"
                style={oneDark}
                customStyle={{
                  margin: 0,
                  maxHeight: "28rem",
                  fontSize: "0.8125rem",
                }}
              >
                {source}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>

      {playground && <Playground config={playground} />}

      {doc && (doc.props.length > 0 || doc.note) && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold">Props</h2>
          {doc.props.length > 0 && (
            <div className="mt-3 overflow-hidden rounded-xl border border-border">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-left">
                    <th className="px-4 py-2.5 font-medium text-muted-foreground">Prop</th>
                    <th className="px-4 py-2.5 font-medium text-muted-foreground">Type</th>
                    <th className="px-4 py-2.5 font-medium text-muted-foreground">Default</th>
                    <th className="px-4 py-2.5 font-medium text-muted-foreground">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {doc.props.map((prop) => (
                    <tr
                      key={prop.name}
                      className="border-b border-border transition-colors duration-150 last:border-0 hover:bg-muted/40"
                    >
                      <td className="px-4 py-2.5 align-top font-mono text-xs text-foreground">
                        {prop.name}
                      </td>
                      <td className="px-4 py-2.5 align-top font-mono text-xs text-primary">
                        {prop.type}
                      </td>
                      <td className="px-4 py-2.5 align-top font-mono text-xs text-muted-foreground">
                        {prop.default ?? "—"}
                      </td>
                      <td className="px-4 py-2.5 align-top text-muted-foreground">
                        {prop.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {doc.note && <p className="mt-3 text-sm text-muted-foreground">{doc.note}</p>}
        </div>
      )}
    </div>
  );
}
