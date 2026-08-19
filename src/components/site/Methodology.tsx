import { useState } from "react";
import { methodology } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Methodology() {
  const [open, setOpen] = useState<string>(methodology[0]!.no);

  return (
    <div className="rule-top">
      {methodology.map((m) => {
        const isOpen = open === m.no;
        return (
          <div key={m.no} className="border-b border-border">
            <button
              type="button"
              onMouseEnter={() => setOpen(m.no)}
              onFocus={() => setOpen(m.no)}
              onClick={() => setOpen(m.no)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-4 py-4 text-left md:gap-8"
            >
              <span
                className={cn(
                  "font-mono text-[0.7rem] transition-colors",
                  isOpen ? "text-accent" : "text-muted-foreground",
                )}
              >
                {m.no}
              </span>
              <span
                className={cn(
                  "flex-1 text-base transition-colors md:text-lg",
                  isOpen ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {m.stage}
              </span>
              <span
                aria-hidden
                className={cn(
                  "h-px bg-accent transition-all duration-500",
                  isOpen ? "w-8 md:w-16" : "w-0",
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-500",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <p className="max-w-2xl pb-5 pl-8 text-sm leading-relaxed text-muted-foreground md:pl-16">
                {m.detail}
              </p>
            </div>
          </div>
        );
      })}
      <p className="eyebrow pt-5 text-[0.65rem] leading-relaxed">
        All activity performed in authorized, simulated lab environments.
      </p>
    </div>
  );
}
