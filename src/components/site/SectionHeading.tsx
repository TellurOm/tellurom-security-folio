import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  className,
}: {
  index?: string;
  eyebrow: string;
  title?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div className="flex items-baseline gap-3">
        {index ? <span className="eyebrow text-accent">{index}</span> : null}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      {title ? (
        <h2 className="mt-5 max-w-3xl text-3xl leading-[1.08] font-medium tracking-tightest text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      ) : null}
    </Reveal>
  );
}
