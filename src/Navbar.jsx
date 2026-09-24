import { useEffect, useRef, useState } from "react";
import { Link, NavLink, matchPath, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Search } from "lucide-react";
import { useTheme } from "./site/theme-provider";
import { cn } from "./lib/utils";

const links = [
  { to: "/", label: "Components", end: true },
  { to: "/guide", label: "Guide", end: false },
];

function useMagnetic(strength = 0.35) {
  const ref = useRef(/** @type {HTMLAnchorElement | null} */ (null));
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return { ref, onMouseMove, onMouseLeave };
}

function MagneticNavLink({ to, end, children, onClick = undefined, registerRef }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.3);
  const setRefs = (node) => {
    ref.current = node;
    registerRef?.(to, node);
  };
  return (
    <NavLink
      ref={setRefs}
      to={to}
      end={end}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={({ isActive }) =>
        cn(
          "inline-block text-sm transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:text-foreground",
          isActive ? "font-medium text-foreground" : "text-muted-foreground",
        )
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar({ onOpenPalette }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const linkRefs = useRef({});
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isMac =
    typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform ?? navigator.userAgent);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const activeLink = links.find((link) =>
      matchPath({ path: link.to, end: link.end }, location.pathname),
    );
    const el = activeLink ? linkRefs.current[activeLink.to] : null;
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur transition-[box-shadow,background-color,border-color] duration-200",
        scrolled ? "border-border bg-background/95 shadow-sm" : "border-transparent",
      )}
    >
      <nav className="container mx-auto flex h-14 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="text-base font-semibold tracking-tight">
          Dextor Components
        </Link>

        <div className="relative hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <MagneticNavLink key={link.to} to={link.to} end={link.end} registerRef={(to, node) => {
              linkRefs.current[to] = node;
            }}>
              {link.label}
            </MagneticNavLink>
          ))}
          <span
            aria-hidden="true"
            className="absolute -bottom-[18px] h-0.5 bg-primary transition-[left,width,opacity] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]"
            style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className="hidden items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:border-primary/40 hover:text-foreground sm:flex"
          >
            <Search className="h-3.5 w-3.5" />
            Search
            <kbd className="ml-2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
              {isMac ? "⌘K" : "Ctrl K"}
            </kbd>
          </button>
          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Search"
            className="rounded-md p-2 text-muted-foreground transition-[background-color,color,transform] duration-150 hover:bg-accent hover:text-foreground active:scale-90 sm:hidden"
          >
            <Search className="h-4 w-4" />
          </button>
          <a
            href="https://www.npmjs.com/package/dextor-components"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            npm
          </a>
          <a
            href="https://github.com/dextor-io/component.dextor.io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="rounded-md p-2 text-muted-foreground transition-[background-color,color,transform] duration-150 hover:bg-accent hover:text-foreground active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.29-1.24-1.64-1.24-1.64-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.12 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.76.54A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="overflow-hidden rounded-md p-2 text-muted-foreground transition-[background-color,color,transform] duration-150 hover:bg-accent hover:text-foreground active:scale-90"
          >
            <span
              key={theme}
              className="block animate-in fade-in-0 zoom-in-50 spin-in-45 duration-200"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </span>
          </button>
          <button
            type="button"
            className="rounded-md p-2 text-muted-foreground transition-[background-color,color,transform] duration-150 hover:bg-accent hover:text-foreground active:scale-90 lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-border px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
