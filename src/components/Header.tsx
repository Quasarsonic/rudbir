"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { id: "le-birre", label: "LE BIRRE" },
  { id: "il-birrificio", label: "IL BIRRIFICIO" },
  { id: "birrografia", label: "BIRROGRAFIA" },
  { id: "come-si-fa", label: "COME SI FA LA BIRRA?" },
  { id: "contatti", label: "CONTATTI" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="text-lg font-bold tracking-widest text-neutral-800">
          RUD BIR
        </a>

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-600 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          Menu
          <svg
            className={`h-4 w-4 transition-transform ${menuOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <nav className="hidden gap-6 md:flex" aria-label="Navigazione principale">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-medium tracking-wider text-neutral-600 transition-colors hover:text-[var(--color-rud-green)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-neutral-100 bg-neutral-50 md:hidden"
          aria-label="Navigazione mobile"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block border-b border-neutral-100 px-4 py-3 text-sm font-medium tracking-wider text-neutral-700 transition-colors hover:bg-white hover:text-[var(--color-rud-green)]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
