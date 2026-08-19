import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav aria-label="Primary" className="shell flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          className="text-[0.95rem] font-medium tracking-tight"
          onClick={() => setOpen(false)}
        >
          TellurOm
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  className={cn(
                    "relative text-[0.8125rem] transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-2 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-accent transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="hidden size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <Github className="size-[1.05rem]" strokeWidth={1.6} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="hidden size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <Linkedin className="size-[1.05rem]" strokeWidth={1.6} />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="link-arrow ml-1 hidden border border-border px-3.5 py-2 text-[0.78rem] transition-colors hover:border-border-strong hover:bg-surface sm:inline-flex"
          >
            Resume
            <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-9 items-center justify-center text-foreground lg:hidden"
          >
            {open ? (
              <X className="size-5" strokeWidth={1.6} />
            ) : (
              <Menu className="size-5" strokeWidth={1.6} />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="shell flex flex-col py-2">
          {navItems.map((item) => (
            <li key={item.href} className="border-b border-border last:border-0">
              <a
                href={`/${item.href}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3.5 text-sm text-muted-foreground"
              >
                {item.label}
                <span className="eyebrow">{item.href.replace("#", "")}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="shell flex flex-wrap gap-4 pb-5 text-sm">
          <a href={profile.github} target="_blank" rel="noreferrer noopener">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn ↗
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </header>
  );
}
