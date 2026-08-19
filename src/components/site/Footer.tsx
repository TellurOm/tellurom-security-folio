import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="rule-top">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-medium">TellurOm</span>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a
            className="link-arrow transition-colors hover:text-foreground"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            className="link-arrow transition-colors hover:text-foreground"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            className="link-arrow transition-colors hover:text-foreground"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
          <a
            className="link-arrow transition-colors hover:text-foreground"
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          >
            Phone
          </a>
        </nav>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-border py-5 sm:flex-row sm:justify-between">
        <span className="eyebrow">© 2026 TellurOm</span>
        <span className="eyebrow">B.Tech CSE — Cyber Security</span>
      </div>
    </footer>
  );
}
