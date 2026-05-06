'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type SurahSummary = {
  number: number;
  englishName: string;
  name: string;
};

export const SurahNavigator = () => {
  const [surahs, setSurahs] = useState<SurahSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const response = await fetch('/api/quran');
      const data = (await response.json()) as { data: SurahSummary[] };
      setSurahs(data.data || []);
      setLoading(false);
    };
    void run();
  }, []);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
      <h2 className="text-lg font-semibold">Surah Navigator</h2>
      {loading ? <p className="mt-3 text-sm">Loading surah list...</p> : null}
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {surahs.map((surah) => (
          <li key={surah.number} className="rounded-xl border border-slate-100 p-4 dark:border-slate-700">
            <Link href={`/quran/${surah.number}`} className="flex items-center justify-between">
              <span>{surah.englishName}</span>
              <span className="font-arabic text-lg">{surah.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
