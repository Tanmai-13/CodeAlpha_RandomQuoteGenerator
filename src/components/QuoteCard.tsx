import { Quote } from "@/data/quotes";

interface QuoteCardProps {
  quote: Quote;
  /** Changes on every new quote so the entrance animation replays. */
  animationKey: number;
}

export function QuoteCard({ quote, animationKey }: QuoteCardProps) {
  return (
    <figure
      key={animationKey}
      className="animate-in fade-in slide-in-from-bottom-4 relative rounded-3xl border border-border bg-card p-8 shadow-[0_20px_60px_-30px_var(--foreground)] duration-500 sm:p-12"
    >
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -top-6 left-6 select-none text-8xl leading-none text-primary/15"
      >
        &ldquo;
      </span>
      <blockquote className="font-display text-2xl leading-snug font-semibold text-foreground sm:text-3xl">
        {quote.text}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-primary/40" />
        <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {quote.author}
        </span>
      </figcaption>
    </figure>
  );
}
