import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Methodology } from "@/components/site/Methodology";
import { caseStudy, profile } from "@/data/portfolio";

const TITLE = "Penetration Testing Labs — Case Study | TellurOm";
const DESCRIPTION =
  "A case study of TellurOm's applied eJPT research: reconnaissance, enumeration, vulnerability assessment and exploitation practised in authorized simulated lab environments.";

export const Route = createFileRoute("/work/penetration-testing-labs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/penetration-testing-labs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work/penetration-testing-labs" }],
  }),
  component: CaseStudyPage,
});

function Block({
  index,
  heading,
  children,
}: {
  index: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-6 border-t border-border py-12 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        <div className="flex items-baseline gap-3">
          <span className="eyebrow text-accent">{index}</span>
          <h2 className="text-lg font-medium">{heading}</h2>
        </div>
      </div>
      <div className="md:col-span-7 md:col-start-6">{children}</div>
    </section>
  );
}

function CaseStudyPage() {
  return (
    <>
      <Nav />
      <main className="shell pt-32 pb-24 md:pt-40">
        <Reveal>
          <Link to="/" className="eyebrow inline-flex items-center gap-2 hover:text-foreground">
            <ArrowLeft className="size-3.5" strokeWidth={1.8} />
            Back to portfolio
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="eyebrow mt-14 text-accent">{caseStudy.subtitle}</p>
          <h1 className="tracking-tightest mt-6 max-w-4xl text-[2.2rem] leading-[1.05] font-medium sm:text-5xl xl:text-[3.6rem]">
            {caseStudy.title}
          </h1>
          <p className="mt-8 max-w-2xl text-[1rem] leading-relaxed text-muted-foreground">
            {caseStudy.summary}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <dl className="mt-14 grid grid-cols-2 border-t border-border md:grid-cols-4">
            <div className="border-b border-border py-6 pr-6">
              <dt className="eyebrow">Context</dt>
              <dd className="mt-2 text-sm">eJPT preparation</dd>
            </div>
            <div className="border-b border-l border-border py-6 pl-6 md:pr-6">
              <dt className="eyebrow">Environment</dt>
              <dd className="mt-2 text-sm">Authorized labs</dd>
            </div>
            <div className="border-b border-border py-6 pr-6 md:border-l md:pl-6">
              <dt className="eyebrow">Role</dt>
              <dd className="mt-2 text-sm">Solo practitioner</dd>
            </div>
            <div className="border-b border-l border-border py-6 pl-6">
              <dt className="eyebrow">Status</dt>
              <dd className="mt-2 text-sm text-accent">Completed</dd>
            </div>
          </dl>
        </Reveal>

        <div className="mt-16">
          <Block index="01" heading="Overview">
            <div className="space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
              {caseStudy.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Block>

          <Block index="02" heading="Approach">
            <ul className="space-y-4">
              {caseStudy.approach.map((a, i) => (
                <li key={a} className="flex gap-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  <span className="eyebrow shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block index="03" heading="Methodology">
            <Methodology />
          </Block>

          <Block index="04" heading="Tools">
            <ul className="flex flex-wrap gap-2.5">
              {caseStudy.tools.map((t) => (
                <li
                  key={t}
                  className="border border-border px-3 py-1.5 font-mono text-[0.72rem] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Block>

          <Block index="05" heading="Technical Areas">
            <ul className="grid gap-px sm:grid-cols-2">
              {caseStudy.technicalAreas.map((t) => (
                <li key={t} className="border-b border-border py-3 text-[0.95rem] sm:pr-6">
                  {t}
                </li>
              ))}
            </ul>
          </Block>

          <Block index="06" heading="Key Learnings">
            <ul className="space-y-5">
              {caseStudy.learnings.map((l) => (
                <li
                  key={l}
                  className="border-l border-border pl-5 text-[0.95rem] leading-relaxed text-muted-foreground"
                >
                  {l}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <div className="flex flex-col gap-6 border-t border-border pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            All activity described here was performed in authorized, simulated lab environments. No
            production systems were involved.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="link-arrow border border-border px-5 py-3 text-[0.85rem] transition-colors hover:border-border-strong hover:bg-surface"
          >
            Visit GitHub
            <ArrowUpRight className="size-4" strokeWidth={1.8} />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
