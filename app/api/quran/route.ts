import { NextResponse } from 'next/server';
import { getSurahList } from '@/lib/api/quran';

export async function GET() {
  try {
    const data = await getSurahList();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 502 });
  }
}
