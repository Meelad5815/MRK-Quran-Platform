'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

export const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-accent">
          MRK-Quran-Explorer
        </Link>
        <div className="flex gap-3 text-sm">
          <Link href="/quran/1">Read</Link>
          <Link href="/bookmarks">Bookmarks</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/profile">Profile</Link>
          <button onClick={() => setTheme('light')}>☀️</button>
          <button onClick={() => setTheme('dark')}>🌙</button>
        </div>
      </nav>
    </header>
  );
};
