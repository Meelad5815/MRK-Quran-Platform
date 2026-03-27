import { DailyAyahCard } from '@/components/daily-ayah-card';
import { SearchBar } from '@/components/search-bar';
import { SurahNavigator } from '@/components/surah-navigator';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-2xl font-bold">MRK Quran Explorer</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Fast, mobile-first Quran app with live Quran data from api.alquran.cloud, translations, recitation, and search.
        </p>
        <div className="mt-4">
          <SearchBar />
        </div>
      </section>

      <DailyAyahCard />
      <SurahNavigator />
    </div>
  );
}
