import { useState } from "react";
import { quotes, randomQuote, type Quote } from "@/data/quotes";
import { QuoteCard } from "@/components/QuoteCard";

export function RandomQuoteGenerator() {
  // Fixed first quote keeps server and client render in sync; random kicks in on click.
  const [quote, setQuote] = useState<Quote>(quotes[0]!);
  const [animationKey, setAnimationKey] = useState(0);

  const showNewQuote = () => {
    setQuote((current) => randomQuote(current)); // never repeats the current quote
    setAnimationKey((key) => key + 1); // replays the transition animation
  };

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-8">
      <QuoteCard quote={quote} animationKey={animationKey} />
      <button
        onClick={showNewQuote}
        className="hover-scale inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12a9 9 0 1 1-2.64-6.36" />
          <path d="M21 3v6h-6" />
        </svg>
        New Quote
      </button>
      <p className="text-sm text-muted-foreground" aria-live="polite">
        Quoted from <span className="font-medium text-foreground">{quote.author}</span>
      </p>
    </div>
  );
}
