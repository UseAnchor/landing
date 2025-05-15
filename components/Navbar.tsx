"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="glass rounded-3xl sticky top-4 mx-auto mt-4 w-[95%] max-w-5xl z-50 flex items-center justify-between px-6 py-3 shadow-lg transition-all">
      <div className="flex items-center gap-2">
        <Link href="/">
          <img src="/light.png" alt="Anchor Logo" style={{ height: 36 }} className="h-9 w-auto" />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <a href="https://tally.so/r/wMgxaX" className="bg-accent text-text px-5 py-2 rounded-xl font-semibold shadow hover:bg-secondary transition-colors">Join the Waitlist</a>
      </div>
      <button
        className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative z-50"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        <span
          className={`block w-7 h-1 bg-accent rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`block w-7 h-1 bg-accent rounded transition-all duration-300 my-1 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-7 h-1 bg-accent rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>
      {/* Mobile menu dropdown */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>
        {/* Menu */}
        <div className="absolute top-16 left-4 right-4 bg-backgroundLight text-background shadow-lg rounded-3xl flex flex-col items-center py-6 fade-in-up">
          <a
            href="https://tally.so/r/wMgxaX"
            className="w-full text-center py-4 text-lg font-semibold hover:bg-secondary transition-colors rounded-xl"
            onClick={() => setOpen(false)}
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
