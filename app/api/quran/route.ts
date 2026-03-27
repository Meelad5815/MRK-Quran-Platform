import { NextResponse } from 'next/server';
import { surahList } from '@/lib/quran-data';

export async function GET() {
  return NextResponse.json({ data: surahList });
}
