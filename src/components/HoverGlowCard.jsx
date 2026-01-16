import { useRef } from "react";

export default function HoverGlowCard({ className = "", children }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={[
        "group relative overflow-hidden rounded-[22px]",
        "bg-white/5 ring-1 ring-white/5 backdrop-blur",
         
        className,
      ].join(" ")}
    >
      {/* base border (always visible) */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-white/10 dark:border-white/10" />

      {/* BORDER ONLY (cursor-follow highlight) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          WebkitMask:
            "radial-gradient(170px circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 70%)",
          maskImage:
            "radial-gradient(170px circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 70%)",
        }}
      >
        {/* Light mode: green-100, Dark mode: green-900 */}
        <div className="absolute inset-0 rounded-[22px] border-6 dark:border-3 border-green-900 dark:border-green-100" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
