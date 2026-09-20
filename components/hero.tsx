import Link from "next/link"
import { ArrowRight, Clock3, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative z-10 flex flex-col items-start gap-7 animate-in fade-in slide-in-from-left-6 duration-700">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand"><span className="h-2 w-2 animate-pulse rounded-full bg-brand" /> Brothify kitchen / since 2018</div>
          <h1 className="max-w-xl text-balance font-serif text-5xl leading-[0.94] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
            Good food is<br /><span className="text-brand italic">a feeling.</span>
          </h1>
          <p className="max-w-md text-pretty text-base leading-7 text-muted-foreground md:text-lg">
            Slow-simmered comfort, bright seasonal plates, and the kind of welcome that makes you stay for one more spoonful.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 font-medium text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:gap-3 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Explore the menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/reservation"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background/50 px-7 font-medium shadow-sm backdrop-blur transition-all hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Book a Table
            </Link>
          </div>
        </div>

        <div className="relative isolate min-h-[470px] animate-in fade-in zoom-in-95 duration-700 lg:min-h-[600px]">
          <div className="absolute inset-5 -z-10 rounded-[2rem] bg-brand/10 blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90"
            alt="A warm bowl of soup with herbs and fresh ingredients"
            className="h-[470px] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/30 lg:h-[600px]"
          />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/20 bg-black/45 p-4 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
            <div><p className="text-xs uppercase tracking-[0.22em] text-white/60">Tonight's comfort</p><p className="mt-1 font-serif text-xl">Roasted tomato & basil</p></div>
            <div className="flex gap-4 text-xs text-white/70"><span className="flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> 20 min</span><span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Brooklyn</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
