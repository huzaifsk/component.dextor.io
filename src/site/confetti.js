const COLORS = [
  "hsl(var(--primary))",
  "#f43f5e",
  "#3b82f6",
  "#22c55e",
  "#f97316",
  "#a855f7",
];

export function fireConfetti(originEl) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  if (!originEl) return;

  const rect = originEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  for (let i = 0; i < 24; i++) {
    const particle = document.createElement("div");
    const size = 6 + Math.random() * 5;
    Object.assign(particle.style, {
      position: "fixed",
      left: `${originX}px`,
      top: `${originY}px`,
      width: `${size}px`,
      height: `${size * 0.4}px`,
      backgroundColor: COLORS[i % COLORS.length],
      borderRadius: "1px",
      pointerEvents: "none",
      zIndex: "100",
    });
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 90;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - 40;
    const rotation = Math.random() * 720 - 360;

    const anim = particle.animate(
      [
        { transform: "translate(0, 0) rotate(0deg)", opacity: 1 },
        {
          transform: `translate(${x}px, ${y + 120}px) rotate(${rotation}deg)`,
          opacity: 0,
        },
      ],
      { duration: 700 + Math.random() * 400, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
    );
    anim.onfinish = () => particle.remove();
  }
}
