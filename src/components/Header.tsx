"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-50 w-full min-w-0 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-sm">
      <div className="relative mx-auto w-full min-w-0 max-w-4xl px-4 py-4 md:px-6 md:py-6">
        <button
          type="button"
          className="absolute right-4 top-4 z-10 flex shrink-0 items-center gap-2 rounded-sm border border-amber-400/30 bg-zinc-800 px-3 py-1.5 text-sm font-medium tracking-wide text-zinc-300 transition-colors duration-200 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-400 md:hidden"
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

        <div className="flex w-full min-w-0 flex-col items-center px-10 md:px-0">
          <a href="#" className="block max-w-full">
            <Image
              src="/rudbir-logo.png"
              alt="Rud Bir"
              width={983}
              height={553}
              className="mx-auto h-14 w-auto max-w-full object-contain transition-all duration-500 md:h-20"
            />
          </a>

          <nav
            className="mt-4 hidden w-full min-w-0 flex-wrap justify-center gap-x-6 gap-y-2 md:flex"
            aria-label="Navigazione principale"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-center text-xs font-medium tracking-wider text-zinc-300 transition-colors hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-zinc-800 bg-zinc-900 md:hidden"
          aria-label="Navigazione mobile"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block break-words border-b border-zinc-800 px-4 py-3 text-sm font-medium tracking-wider text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-amber-400"
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
