import { NextResponse } from 'next/server';
import { buildSurahPayload, getSurahList } from '@/lib/api/quran';
import { normalizeQuery } from '@/lib/utils';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = normalizeQuery(url.searchParams.get('q') || '');

  if (!query) return NextResponse.json({ results: [] });

  try {
    const surahs = await getSurahList();
    const matchedSurahs = surahs.filter((s) =>
      [String(s.number), s.englishName, s.englishNameTranslation, s.name].some((v) => normalizeQuery(v).includes(query))
    );

    const limitedSurahs = matchedSurahs.slice(0, 3);
    const payloads = await Promise.all(limitedSurahs.map((surah) => buildSurahPayload(surah.number)));

    const results = payloads
      .flat()
      .filter((ayah) =>
        [ayah.id, ayah.arabicText, ayah.translations.en, ayah.translations.ur].some((v) => normalizeQuery(v).includes(query))
      )
      .slice(0, 50);

    return NextResponse.json({ results });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 502 });
  }
}
