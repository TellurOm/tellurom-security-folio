import { motion, useReducedMotion } from "motion/react";

type Node = { id: string; x: number; y: number; label?: string };

const nodes: Node[] = [
  { id: "core", x: 50, y: 50 },
  { id: "recon", x: 14, y: 22, label: "RECON" },
  { id: "network", x: 86, y: 30, label: "NETWORK" },
  { id: "linux", x: 12, y: 76, label: "LINUX" },
  { id: "security", x: 62, y: 88, label: "SECURITY" },
  { id: "labs", x: 90, y: 66, label: "LABS" },
];

const edges: [string, string][] = [
  ["core", "recon"],
  ["core", "network"],
  ["core", "linux"],
  ["core", "security"],
  ["core", "labs"],
  ["recon", "network"],
  ["linux", "security"],
  ["network", "labs"],
];

const byId = (id: string) => nodes.find((n) => n.id === id)!;

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-4/5 w-full sm:aspect-square lg:aspect-4/5">
      <div className="absolute inset-0 border border-border" aria-hidden />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Abstract node diagram connecting recon, network, Linux, security and lab practice around a central focus"
      >
        <g stroke="var(--color-border)" strokeWidth="0.12">
          {[25, 50, 75].map((v) => (
            <line key={`v${v}`} x1={v} y1="0" x2={v} y2="100" />
          ))}
          {[25, 50, 75].map((v) => (
            <line key={`h${v}`} x1="0" y1={v} x2="100" y2={v} />
          ))}
        </g>

        <g>
          {edges.map(([a, b], i) => {
            const from = byId(a);
            const to = byId(b);
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--color-border-strong)"
                strokeWidth="0.18"
                initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: 0.25 + i * 0.09, ease: "easeOut" }}
              />
            );
          })}
        </g>

        {nodes.map((n, i) =>
          n.id === "core" ? (
            <g key={n.id}>
              <motion.circle
                cx={n.x}
                cy={n.y}
                r="4.2"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="0.15"
                initial={{ opacity: 0 }}
                animate={reduce ? { opacity: 0.5 } : { opacity: [0.15, 0.6, 0.15] }}
                transition={{ duration: 5, repeat: reduce ? 0 : Infinity, ease: "easeInOut" }}
              />
              <circle cx={n.x} cy={n.y} r="1.5" fill="var(--color-accent)" />
            </g>
          ) : (
            <motion.circle
              key={n.id}
              cx={n.x}
              cy={n.y}
              r="0.9"
              fill="var(--color-muted-foreground)"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            />
          ),
        )}
      </svg>

      {nodes
        .filter((n) => n.label)
        .map((n, i) => (
          <motion.span
            key={n.id}
            className="eyebrow absolute text-[0.6rem] whitespace-nowrap"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              transform: `translate(${n.x > 55 ? "-100%" : "0"}, ${n.y > 55 ? "6px" : "-22px"})`,
            }}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
          >
            {n.label}
          </motion.span>
        ))}

      <span className="eyebrow absolute bottom-3 left-3 text-[0.6rem]">
        FIG. 01 — FOCUS MAP
      </span>
    </div>
  );
}
