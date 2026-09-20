"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import useSWR from "swr"
import { Menu, Utensils, X } from "lucide-react"

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Reservation" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { data: me } = useSWR<{ email?: string; role?: "admin" | "user" }>([])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="group flex items-center gap-2 font-serif text-2xl font-bold tracking-tight transition-opacity hover:opacity-80">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform group-hover:rotate-12"><Utensils className="h-4 w-4" /></span>
          Brothify
          <span className="sr-only">Brothify home</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary group",
                pathname === item.href && "text-foreground",
              )}
            >
              {item.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full",
                pathname === item.href && "w-full"
              )} />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/menu"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/10 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:inline-flex"
          >
            Order Now
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand sm:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-background/95 px-4 pb-6 pt-4 shadow-2xl backdrop-blur-xl sm:hidden">
          <nav aria-label="Mobile primary" className="mx-auto flex max-w-6xl flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 font-serif text-2xl transition-colors hover:bg-brand/10 hover:text-brand",
                  pathname === item.href ? "bg-brand/10 text-brand" : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/menu"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
