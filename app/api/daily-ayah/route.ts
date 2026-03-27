import { NextResponse } from 'next/server';
import { getAyahForDay } from '@/lib/api/quran';

export async function GET() {
  try {
    const data = await getAyahForDay();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 502 });
  }
import { surahList } from '@/lib/quran-data';

export async function GET() {
  const ayah = surahList[0].ayahs[0];
  return NextResponse.json({ data: ayah });
}
