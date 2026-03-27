import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Return last-read ayah and reading history.' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Reading progress updated.', body }, { status: 201 });
}
