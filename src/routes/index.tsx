import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { HeroVisual } from "@/components/site/HeroVisual";
import { Methodology } from "@/components/site/Methodology";
import {
  caseStudy,
  focusAreas,
  journey,
  metadataStrip,
  profile,
  skillGroups,
} from "@/data/portfolio";

const TITLE = "TellurOm — Cybersecurity Student";
const DESCRIPTION =
  "TellurOm is a B.Tech CSE Cyber Security student focused on ethical hacking, penetration testing, network security and security research.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "TellurOm",
          jobTitle: "B.Tech CSE — Cyber Security Student",
          email: `mailto:${profile.email}`,
          alumniOf: { "@type": "CollegeOrUniversity", name: "ITM Skills University" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Navi Mumbai",
            addressCountry: "IN",
          },
          sameAs: [profile.github, profile.linkedin],
          knowsAbout: [
            "Penetration Testing",
            "Network Security",
            "Ethical Hacking",
            "Linux",
            "Cloud Security",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <MetaStrip />
        <About />
        <Focus />
        <Work />
        <Skills />
        <Certification />
        <Journey />
        <Beyond />
        <CodeSection />
        <Connect />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="shell pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 xl:col-span-7">
          <Reveal>
            <p className="eyebrow">Cyber Security / B.Tech CSE</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="tracking-tightest mt-7 text-[2.6rem] leading-[0.98] font-medium sm:text-6xl xl:text-[4.6rem]">
              Security-minded.
              <br />
              <span className="text-muted-foreground">Curious by default.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
              {profile.intro}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="link-arrow justify-center bg-primary px-5 py-3 text-[0.85rem] font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Selected Work
                <ArrowRight className="arrow size-4" strokeWidth={1.8} />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="link-arrow justify-center border border-border px-5 py-3 text-[0.85rem] transition-colors hover:border-border-strong hover:bg-surface"
              >
                Download Resume
                <ArrowDown className="arrow size-4" strokeWidth={1.8} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-9 flex items-center gap-6 text-sm text-muted-foreground">
              <a
                className="link-arrow transition-colors hover:text-foreground"
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="size-4" strokeWidth={1.6} />
                GitHub
              </a>
              <a
                className="link-arrow transition-colors hover:text-foreground"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Linkedin className="size-4" strokeWidth={1.6} />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-6">
          <Reveal delay={0.2}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MetaStrip() {
  return (
    <section className="shell">
      <dl className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {metadataStrip.map((m, i) => (
          <Reveal
            key={m.value}
            delay={i * 0.06}
            className="border-b border-border px-0 py-6 md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0 nth-[2n]:border-l nth-[2n]:pl-6 md:nth-[2n]:pl-6"
          >
            <dt className="text-[0.98rem] font-medium">{m.value}</dt>
            <dd className="mt-1.5 text-[0.8rem] text-muted-foreground">{m.label}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="shell scroll-mt-24 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading index="01" eyebrow="About" />
          <Reveal delay={0.08}>
            <h2 className="tracking-tightest mt-6 max-w-lg text-[1.9rem] leading-[1.1] font-medium sm:text-4xl">
              A security student who likes understanding how systems fail.
            </h2>
          </Reveal>
        </div>
        <div className="space-y-6 text-[0.98rem] leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.12}>
            <p>
              I am an undergraduate at {profile.university}, pursuing B.Tech in Computer Science
              &amp; Engineering with a Cyber Security specialisation and an expected graduation in{" "}
              {profile.graduation}. My interest sits with the systems side of security: how services
              talk to each other, what they reveal, and where assumptions turn into weaknesses.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p>
              Most of my practical time goes into building foundations in ethical hacking,
              vulnerability assessment, network security, Linux, security tooling and penetration
              testing — largely through authorized lab environments and the applied work behind my
              eJPT certification.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="text-foreground">
              I am early in this field and comfortable saying so. What I bring right now is a
              methodical approach, steady curiosity and the habit of documenting what I learn.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section className="shell py-8 md:py-12">
      <SectionHeading index="02" eyebrow="Specialization" title="Areas of Focus" />
      <div className="mt-14 rule-top">
        {focusAreas.map((f, i) => (
          <Reveal key={f.no} delay={i * 0.05}>
            <div className="group grid grid-cols-1 items-baseline gap-2 border-b border-border py-7 transition-colors hover:bg-surface/60 md:grid-cols-12 md:gap-6 md:px-4">
              <span className="eyebrow md:col-span-1">{f.no}</span>
              <h3 className="text-lg font-medium md:col-span-4 md:text-xl">{f.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:col-span-5">
                {f.line}
              </p>
              <div className="md:col-span-2 md:text-right">
                <span className="eyebrow inline-block max-h-0 overflow-hidden text-[0.6rem] text-accent opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
                  {f.detail}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <SectionHeading index="03" eyebrow="Selected Work" />
        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <h3 className="tracking-tightest text-[1.85rem] leading-[1.12] font-medium sm:text-[2.4rem]">
                {caseStudy.title}
              </h3>
              <p className="eyebrow mt-4 text-accent">{caseStudy.subtitle}</p>
              <p className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
                {caseStudy.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {caseStudy.tools.map((t) => (
                  <span key={t} className="font-mono text-[0.7rem] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/work/penetration-testing-labs"
                className="group mt-10 inline-flex flex-col gap-2 text-[0.9rem]"
              >
                <span className="link-arrow">
                  View Case Study
                  <ArrowUpRight className="size-4" strokeWidth={1.8} />
                </span>
                <span
                  aria-hidden
                  className="h-px w-14 bg-accent transition-all duration-500 group-hover:w-full"
                />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.12}>
              <p className="eyebrow mb-5">Methodology</p>
              <Methodology />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="shell scroll-mt-24 py-8 md:py-12">
      <SectionHeading index="04" eyebrow="Skills" title="Technical Stack" />
      <div className="mt-14 rule-top">
        {skillGroups.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.04}>
            <div className="grid gap-4 border-b border-border py-7 md:grid-cols-12">
              <h3 className="eyebrow md:col-span-3">{g.group}</h3>
              <ul className="flex flex-wrap gap-2.5 md:col-span-9">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-3 py-1.5 text-[0.8rem] text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Certification() {
  return (
    <section id="certification" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <SectionHeading index="05" eyebrow="Certification" />
        <div className="mt-12 grid items-end gap-10 border border-border bg-surface p-8 md:grid-cols-12 md:p-12">
          <Reveal className="md:col-span-7">
            <p className="tracking-tightest text-[4.5rem] leading-[0.85] font-medium sm:text-[7rem]">
              eJPT
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              INE Security Junior Penetration Tester
            </p>
            <div className="mt-8">
              <a
                href={profile.certificate}
                target="_blank"
                rel="noreferrer noopener"
                className="link-arrow inline-flex items-center justify-center bg-primary px-5 py-3 text-[0.85rem] font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Open Certificate
                <ArrowUpRight className="arrow size-4" strokeWidth={1.8} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <dl className="space-y-4 md:border-l md:border-border md:pl-10">
              <div className="flex items-center justify-between gap-6 border-b border-border pb-3">
                <dt className="eyebrow">Status</dt>
                <dd className="flex items-center gap-2 font-mono text-[0.7rem] tracking-widest text-accent">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                  COMPLETED
                </dd>
              </div>
              <div className="flex items-center justify-between gap-6 border-b border-border pb-3">
                <dt className="eyebrow">Issuer</dt>
                <dd className="text-sm">INE</dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="eyebrow">Domain</dt>
                <dd className="text-sm">Penetration Testing</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="shell scroll-mt-24 py-8 md:py-12">
      <SectionHeading index="06" eyebrow="Learning Journey" title="The Journey So Far" />
      <ol className="mt-16 border-l border-border">
        {journey.map((j, i) => (
          <Reveal key={j.phase} delay={i * 0.06}>
            <li className="group relative grid gap-4 pb-14 pl-8 md:grid-cols-12 md:pl-12">
              <span
                aria-hidden
                className="absolute top-1.5 left-[-3.5px] size-1.5 rounded-full bg-border-strong transition-colors group-hover:bg-accent"
              />
              <div className="md:col-span-4">
                <span className="eyebrow">Stage {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-xl font-medium">{j.phase}</h3>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground md:col-span-8 md:pt-7">
                {j.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Beyond() {
  return (
    <section className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          index="07"
          eyebrow="Leadership & Event Contribution"
          title="Beyond Technical Work"
        />
        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <h3 className="text-2xl font-medium">On Desk Registrations Volunteer</h3>
              <p className="mt-2 text-sm text-muted-foreground">ITM Skills University</p>
              <p className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
                Handled on-desk registrations for a university event — managing attendee flow,
                verifying entries and collecting entry fees at the desk. The role also involved
                coordinating with the organising team through the day and helping promote the event
                across campus beforehand.
              </p>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <li>Attendee management</li>
                <li>Event coordination</li>
                <li>Event promotion</li>
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1}>
              <dl className="grid grid-cols-2 border-t border-border">
                <div className="border-b border-border py-7 pr-6">
                  <dt className="tracking-tightest text-3xl font-medium sm:text-4xl">~300</dt>
                  <dd className="mt-2 text-[0.8rem] text-muted-foreground">Attendees reached</dd>
                </div>
                <div className="border-b border-l border-border py-7 pl-6">
                  <dt className="tracking-tightest text-3xl font-medium sm:text-4xl">₹20K+</dt>
                  <dd className="mt-2 text-[0.8rem] text-muted-foreground">
                    Entry fee collection managed
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeSection() {
  return (
    <section className="shell py-8 md:py-12">
      <div className="grid items-end gap-10 border-t border-border pt-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading index="08" eyebrow="GitHub" title="Code, Experiments & Repositories" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-muted-foreground">
              Explore the projects, experiments and security work behind the portfolio.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:text-right">
          <Reveal delay={0.15}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="link-arrow border border-border px-5 py-3 text-[0.85rem] transition-colors hover:border-border-strong hover:bg-surface"
            >
              Visit GitHub
              <ArrowUpRight className="size-4" strokeWidth={1.8} />
            </a>
            <p className="eyebrow mt-4 text-[0.62rem]">github.com/TellurOm</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section className="shell py-24 md:py-28">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="tracking-tightest text-[2rem] font-medium sm:text-4xl">
              Let's connect.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.1}>
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              Open to meaningful conversations around cybersecurity, technology and future
              opportunities.
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="link-arrow mt-7 text-[0.9rem]"
            >
              LinkedIn
              <ArrowUpRight className="size-4" strokeWidth={1.8} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ResumeCta() {
  return (
    <section className="shell">
      <div className="flex flex-col gap-6 border-y border-border py-14 sm:flex-row sm:items-center sm:justify-between">
        <Reveal>
          <h2 className="tracking-tightest text-2xl font-medium sm:text-3xl">
            Want the complete profile?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="link-arrow w-full justify-center bg-primary px-5 py-3 text-[0.85rem] font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Download Resume
            <ArrowDown className="arrow size-4" strokeWidth={1.8} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="shell scroll-mt-24 py-32 md:py-44">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 className="tracking-tightest mt-8 max-w-4xl text-[2.4rem] leading-[1.02] font-medium sm:text-6xl xl:text-[4.4rem]">
          Let's build something worth securing.
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-12 inline-block font-mono text-base text-accent transition-opacity hover:opacity-75 sm:text-lg"
        >
          {profile.email}
        </a>
      </Reveal>
      <Reveal delay={0.18}>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <a
            className="link-arrow transition-colors hover:text-foreground"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
            <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
          </a>
          <a
            className="link-arrow transition-colors hover:text-foreground"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
            <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
          </a>
          <a
            className="link-arrow transition-colors hover:text-foreground"
            href={profile.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
            <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
