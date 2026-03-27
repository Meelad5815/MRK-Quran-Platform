import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Fetch user bookmarks (surahs + ayahs + collections).' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Bookmark saved.', body }, { status: 201 });
}
