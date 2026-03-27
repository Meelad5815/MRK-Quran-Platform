import { surahList } from '@/lib/quran-data';

export const DailyAyahCard = () => {
  const todaysAyah = surahList[0].ayahs[0];

  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
      <h2 className="text-lg font-semibold">Daily Ayah</h2>
      <p className="mt-3 text-right font-arabic text-2xl leading-loose">{todaysAyah.arabicText}</p>
      <p className="mt-2 text-sm">{todaysAyah.translations.en}</p>
    </section>
  );
};
