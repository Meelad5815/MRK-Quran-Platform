import { NextResponse } from 'next/server';
import { surahList } from '@/lib/quran-data';

export async function GET(_: Request, { params }: { params: { surahId: string } }) {
  const surah = surahList.find((s) => s.id === Number(params.surahId));
  if (!surah) return NextResponse.json({ error: 'Surah not found' }, { status: 404 });
  return NextResponse.json({ data: surah });
}
