import { NextResponse } from 'next/server';
import { surahList } from '@/lib/quran-data';

export async function GET() {
  const ayah = surahList[0].ayahs[0];
  return NextResponse.json({ data: ayah });
}
