import { CalendarDays, Gift, Home, Package, Sparkles, Truck } from "lucide-react"

export const metadata = { title: "Services — Brothify" }

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand">Beyond the bowl</p>
        <h1 className="font-serif text-5xl md:text-7xl">Come hungry.<br /><span className="text-brand italic">Leave glowing.</span></h1>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Everything we offer to keep you satisfied—from dine-in to delivery.
        </p>
      </header>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[
          ["Dine-In", "Comfortable seating and friendly staff.", Home],
          ["Delivery", "Fast delivery with eco-friendly packaging.", Truck],
          ["Catering", "Custom menus for events and meetings.", Gift],
          ["Reservation", "Book tables for any occasion.", CalendarDays],
          ["Meal Boxes", "Balanced boxes for busy days.", Package],
          ["Private Dining", "Intimate space for celebrations.", Sparkles],
        ].map(([title, desc, Icon]) => (
          <div key={title as string} className="group rounded-2xl border border-border/50 bg-card/60 p-7 transition-all hover:-translate-y-1 hover:border-brand/50 hover:bg-card hover:shadow-xl">
            <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground"><Icon className="h-5 w-5" /></div>
            <h3 className="font-serif text-2xl">{title as string}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc as string}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
