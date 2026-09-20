import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us — Brothify",
  description: "Learn about our story, mission, and commitment to fresh, healthy food.",
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 animate-in fade-in slide-in-from-bottom-4 duration-700 md:py-20">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand">Our table, open to you</p>
        <h1 className="font-serif text-5xl leading-none md:text-7xl">Food with a <span className="text-brand italic">point of view.</span></h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Fresh ingredients, authentic recipes, and unforgettable taste.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="relative h-[460px] overflow-hidden rounded-[2rem] border border-border/50 shadow-2xl lg:sticky lg:top-24">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85"
            alt="Fresh ingredients prepared for a shared meal"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-black/45 p-4 text-white backdrop-blur-md"><p className="text-xs uppercase tracking-[0.2em] text-white/60">The Brothify way</p><p className="mt-1 font-serif text-xl">Simple ingredients. Serious care.</p></div>
        </div>
        <div className="space-y-10 leading-relaxed text-muted-foreground">
        <section className="border-t border-border/50 pt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">01 / Our story</p>
          <h2 className="mb-3 font-serif text-3xl text-foreground">A small kitchen with a big welcome.</h2>
          <p>
            Brothify was founded in 2018 with a simple mission: to bring fresh, healthy, and flavorful meals to everyone.
            What started as a small neighborhood kitchen has grown into a beloved destination for food lovers seeking
            quality and authenticity.
          </p>
        </section>

        <section className="border-t border-border/50 pt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">02 / Our philosophy</p>
          <h2 className="mb-3 font-serif text-3xl text-foreground">Make it fresh. Make it memorable.</h2>
          <p>
            We believe great food starts with great ingredients. Every dish is prepared fresh daily using seasonal
            produce from local farms. Our chefs combine traditional techniques with modern creativity to craft meals
            that nourish both body and soul.
          </p>
        </section>

        <section className="border-t border-border/50 pt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">03 / Sustainability</p>
          <h2 className="mb-3 font-serif text-3xl text-foreground">Good for the bowl, better for the block.</h2>
          <p>
            We're committed to sustainable practices—from sourcing ingredients responsibly to minimizing waste. Our
            packaging is eco-friendly, and we partner with local suppliers who share our values.
          </p>
        </section>

        </div>
      </div>
    </main>
  )
}
