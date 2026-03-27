'use client';

import { useMemo, useState } from 'react';
import { AudioPlayer } from '@/components/audio-player';
import { AyahCard } from '@/components/ayah-card';
import { surahList } from '@/lib/quran-data';

export default function SurahPage({ params }: { params: { surahId: string } }) {
  const surahId = Number(params.surahId);
  const surah = surahList.find((s) => s.id === surahId) ?? surahList[0];
  const [showTranslations, setShowTranslations] = useState(true);

  const playlist = useMemo(() => surah.ayahs.map((ayah) => ayah.audioUrl), [surah]);

  return (
    <div className="space-y-4">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
        <h1 className="text-2xl font-bold">{surah.nameEnglish}</h1>
        <p className="font-arabic text-xl">{surah.nameArabic}</p>
        <button onClick={() => setShowTranslations((v) => !v)} className="mt-3 rounded bg-accent px-3 py-1 text-sm text-white">
          {showTranslations ? 'Hide' : 'Show'} Translations
        </button>
      </header>

      <div className="space-y-3">
        {surah.ayahs.map((ayah) => (
          <AyahCard key={ayah.id} ayah={ayah} showTranslations={showTranslations} />
        ))}
      </div>

      <AudioPlayer playlist={playlist} />
    </div>
  );
}
