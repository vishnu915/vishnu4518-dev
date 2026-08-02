import { MARQUEE_ITEMS } from "@/constants/portfolio";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section aria-label="Technology stack" className="relative py-14">
      <div className="marquee-mask relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 pr-14">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-2xl font-semibold whitespace-nowrap text-muted-foreground/50 transition-colors hover:text-foreground md:text-4xl"
            >
              {item}
              <span className="ml-14 text-primary/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
