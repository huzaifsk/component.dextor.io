import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider, useTheme } from "./site/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { CommandPalette } from "./site/CommandPalette";
import { ThemeCustomizer } from "./site/ThemeCustomizer";
import Navbar from "./Navbar";

function ScrollProgressBar() {
  const barRef = useRef(/** @type {HTMLDivElement | null} */ (null));

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5">
      <div
        ref={barRef}
        className="scroll-progress-bar h-full bg-primary transition-transform duration-100 ease-out"
      />
    </div>
  );
}

function RouteTransition({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="animate-route-fade">
      {children}
    </div>
  );
}

function LayoutInner() {
  const { theme } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollProgressBar />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <main className="flex-1">
        <RouteTransition>
          <Outlet />
        </RouteTransition>
      </main>
      <Toaster theme={theme} position="top-right" richColors closeButton />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <ThemeCustomizer />
    </div>
  );
}

function Layout() {
  return (
    <ThemeProvider>
      <LayoutInner />
    </ThemeProvider>
  );
}

export default Layout;
