'use client';

import { useEffect, useState } from 'react';

type DailyAyah = {
  arabicText: string;
  translations: { en: string; ur: string };
};

export const DailyAyahCard = () => {
  const [ayah, setAyah] = useState<DailyAyah | null>(null);

  useEffect(() => {
    const run = async () => {
      const response = await fetch('/api/daily-ayah');
      const data = (await response.json()) as { data: DailyAyah };
      setAyah(data.data);
    };
    void run();
  }, []);
import { surahList } from '@/lib/quran-data';

export const DailyAyahCard = () => {
  const todaysAyah = surahList[0].ayahs[0];

  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
      <h2 className="text-lg font-semibold">Daily Ayah</h2>
      <p className="mt-3 text-right font-arabic text-2xl leading-loose">{ayah?.arabicText || 'Loading...'}</p>
      <p className="mt-2 text-sm">{ayah?.translations.en || ''}</p>
      <p className="mt-2 text-sm" dir="rtl">{ayah?.translations.ur || ''}</p>
      <p className="mt-3 text-right font-arabic text-2xl leading-loose">{todaysAyah.arabicText}</p>
      <p className="mt-2 text-sm">{todaysAyah.translations.en}</p>
    </section>
  );
};
