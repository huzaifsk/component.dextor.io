# Changelog

## 2.0.2

Docs-only patch — no code changes.

- Fixed broken repository links in README (`components.dextor.io` → `component.dextor.io`, matching the actual repo).

## 2.0.1

Docs-only patch — no code changes.

- Updated README: reflects the v2.0 rewrite (Radix UI, TypeScript, dark mode), lists all 52 components by category, and adds a usage example for the new Interaction components.

## 2.0.0

Full rewrite of the component library. Every component was converted to TypeScript and rebuilt on Radix UI primitives with a token-based design system (light/dark theming, `class-variance-authority` variants). This is a breaking release — there is no compatibility shim.

### Breaking changes

- **Props renamed to standard controlled/uncontrolled conventions** across the board, e.g. `Modal`'s `isOpen`/`onOpen`/`onClose` → `open`/`onOpenChange`; `Rating`'s one-shot `initialRating` → `value`/`defaultValue`/`onValueChange`.
- **Styling props removed.** Components no longer accept `*Style` string props (e.g. Card's `cardStyle`, `titleStyle`, the dead `pathStyle`). Use `className` (merged, not replaced) plus `variant`/`size` where available.
- **`Dropdown` renamed `Select`** internally (still listed as "Dropdown" in the docs) and is now built on `@radix-ui/react-select`.
- **`Toast` replaced by `Toaster` + `toast`**, powered by Sonner instead of `react-toastify`. Mount `<Toaster />` once; call `toast()` from anywhere.
- **`Card` is now a compound component**: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.
- **`Chips` is now prop-driven** (`items`/`value`/`onValueChange`) instead of hardcoded data.
- File layout changed from `src/components/<name>/<Name>.jsx` to `src/components/ui/<name>.tsx` — only relevant if you were importing from deep paths instead of the package root.

### Fixed

- `Modal` no longer gets stuck out of sync with its `open` prop after mount.
- `Toast` no longer uses module-level mutable state (was unsafe with multiple instances/SSR).
- `Dropdown`/`Select` and `FileUpload` are now actually exported from the package (previously built but unreachable).
- The published package now ships a working, precompiled stylesheet (`dextor-components/style.css`) — previously it shipped no CSS at all.
- `prepublishOnly` now runs the correct library build (was silently running the docs-site build instead).

### Added

- Full dark mode support via CSS variables and a `darkMode: "class"` Tailwind config.
- Real TypeScript types and a bundled `.d.ts` for every export.
- Accessibility improvements across most components (keyboard navigation, ARIA roles/states, focus management), largely inherited from Radix UI primitives.
- **10 new micro-interaction components**: `MagneticButton`, `LikeButton`, `TiltCard`, `CopyButton`, `TextScramble`, `ShimmerButton`, `NumberTicker`, `ExpandingSearch`, `PingBadge`, `Marquee`.
