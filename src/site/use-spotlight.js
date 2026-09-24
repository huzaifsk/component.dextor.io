export function spotlightOnMouseMove(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
}
