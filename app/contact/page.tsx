export const metadata = { title: "Contact — Brothify" }

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14 md:py-20">
      <header className="max-w-2xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand">Say hello</p>
        <h1 className="font-serif text-5xl leading-none md:text-7xl">Let&apos;s make<br /><span className="text-brand italic">something delicious.</span></h1>
        <p className="mt-5 text-lg text-muted-foreground">Questions, celebrations, feedback, or just a good soup story. We love hearing from you.</p>
      </header>

      <div className="mt-12 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
      <div className="rounded-2xl border border-border/50 bg-card/40 p-6 text-sm text-muted-foreground">
        <p className="font-serif text-2xl text-foreground">Visit the kitchen</p>
        <p className="mt-4 leading-6">218 Bedford Avenue<br />Brooklyn, NY 11249</p>
        <p className="mt-6 leading-6">Mon–Thu 11:00–21:00<br />Fri–Sun 10:00–22:00</p>
      </div>
      <form className="grid gap-4 rounded-2xl border border-border/50 bg-card/60 p-6 shadow-xl shadow-black/10 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
            <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input id="name" className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <button className="rounded-full bg-brand px-5 py-3 text-brand-foreground shadow-lg shadow-brand/10 transition hover:brightness-110">
          Send
        </button>
      </form>
      </div>
    </main>
  )
}
