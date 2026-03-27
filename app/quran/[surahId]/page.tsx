'use client';

import { useEffect, useMemo, useState } from 'react';
import { AudioPlayer } from '@/components/audio-player';
import { AyahCard } from '@/components/ayah-card';
import type { Surah } from '@/lib/types';

export default function SurahPage({ params }: { params: { surahId: string } }) {
  const surahId = Number(params.surahId);
  const [surah, setSurah] = useState<Surah | null>(null);
  const [showTranslations, setShowTranslations] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const response = await fetch(`/api/surah/${surahId}`);
      const data = (await response.json()) as { data: Surah };
      setSurah(data.data);
      setLoading(false);
    };
    void run();
  }, [surahId]);

  const playlist = useMemo(() => surah?.ayahs.map((ayah) => ayah.audioUrl) || [], [surah]);

  if (loading || !surah) {
    return <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">Loading surah...</div>;
  }

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
