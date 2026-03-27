'use client';

import { useState } from 'react';
import type { Ayah } from '@/lib/types';

export const AyahCard = ({ ayah, showTranslations }: { ayah: Ayah; showTranslations: boolean }) => {
  const [showTafsir, setShowTafsir] = useState(false);

  return (
    <article className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500">{ayah.id}</p>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs dark:bg-slate-700">{ayah.tajweedClass || 'normal'}</span>
      </div>
      <p className="text-right font-arabic text-3xl leading-loose">{ayah.arabicText}</p>
      {showTranslations && (
        <>
          <p className="text-sm">{ayah.translations.en}</p>
          <p className="text-sm" dir="rtl">{ayah.translations.ur}</p>
        </>
      )}
      <div className="flex flex-wrap gap-2 text-xs">
        {ayah.words.map((word) => (
          <button key={`${ayah.id}-${word.arabic}`} className="rounded bg-slate-100 px-2 py-1 dark:bg-slate-700" title={`${word.transliteration}: ${word.meaning}`}>
            {word.arabic}
          </button>
        ))}
      </div>
      <button onClick={() => setShowTafsir((v) => !v)} className="text-sm text-accent underline">
        {showTafsir ? 'Hide Tafsir' : 'Show Tafsir'}
      </button>
      {showTafsir && (
        <div className="space-y-2 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-900">
          <p><strong>Ibn Kathir:</strong> {ayah.tafsir.ibnKathir}</p>
          <p><strong>Maududi:</strong> {ayah.tafsir.maududi}</p>
        </div>
      )}
    </article>
  );
};
