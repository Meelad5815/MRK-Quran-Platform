import Link from 'next/link';
import { DailyAyahCard } from '@/components/daily-ayah-card';
import { SearchBar } from '@/components/search-bar';
import { surahList } from '@/lib/quran-data';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-2xl font-bold">MRK Quran Explorer</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Fast, mobile-first Quran app with translations, tafsir, bookmarks, notes, progress tracking, and offline-ready architecture.
        </p>
        <div className="mt-4">
          <SearchBar />
        </div>
      </section>

      <DailyAyahCard />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-lg font-semibold">Surah Navigator</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {surahList.map((surah) => (
            <li key={surah.id} className="rounded-xl border border-slate-100 p-4 dark:border-slate-700">
              <Link href={`/quran/${surah.id}`} className="flex items-center justify-between">
                <span>{surah.nameEnglish}</span>
                <span className="font-arabic text-lg">{surah.nameArabic}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
