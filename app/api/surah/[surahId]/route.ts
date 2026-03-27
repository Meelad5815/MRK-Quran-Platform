import { NextResponse } from 'next/server';
import { buildSurahPayload, getSurahList } from '@/lib/api/quran';

export async function GET(_: Request, { params }: { params: { surahId: string } }) {
  const surahId = Number(params.surahId);
  if (Number.isNaN(surahId)) return NextResponse.json({ error: 'Invalid surah id' }, { status: 400 });

  try {
    const surahMeta = (await getSurahList()).find((item) => item.number === surahId);
    if (!surahMeta) return NextResponse.json({ error: 'Surah not found' }, { status: 404 });

    const ayahs = await buildSurahPayload(surahId);

    return NextResponse.json({
      data: {
        id: surahMeta.number,
        nameArabic: surahMeta.name,
        nameEnglish: surahMeta.englishName,
        revelationType: surahMeta.revelationType,
        totalAyahs: surahMeta.numberOfAyahs,
        ayahs
      }
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 502 });
  }
}
