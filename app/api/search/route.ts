import { NextResponse } from 'next/server';
import { surahList } from '@/lib/quran-data';
import { normalizeQuery } from '@/lib/utils';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = normalizeQuery(url.searchParams.get('q') || '');

  const results = surahList
    .flatMap((surah) =>
      surah.ayahs.map((ayah) => ({
        id: ayah.id,
        arabicText: ayah.arabicText,
        en: ayah.translations.en,
        ur: ayah.translations.ur,
        surahName: surah.nameEnglish
      }))
    )
    .filter((ayah) =>
      [ayah.id, ayah.arabicText, ayah.en, ayah.ur, ayah.surahName].some((value) => normalizeQuery(value).includes(query))
    );

  return NextResponse.json({ results });
}
