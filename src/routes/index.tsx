import { createFileRoute } from "@tanstack/react-router";
import { RandomQuoteGenerator } from "@/components/RandomQuoteGenerator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Random Quote Generator — Daily Inspiration" },
      {
        name: "description",
        content:
          "Get inspired with a new quote. Tap New Quote for a fresh, randomly picked quote from a hand-curated collection — no repeats back to back.",
      },
      { property: "og:title", content: "Random Quote Generator — Daily Inspiration" },
      {
        property: "og:description",
        content: "Get inspired with a new quote. Tap New Quote for fresh inspiration.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 bg-background px-4 py-16 sm:px-6">
      <header className="text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Random Quote Generator
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">Get inspired with a new quote.</p>
      </header>
      <RandomQuoteGenerator />
    </main>
  );
}
