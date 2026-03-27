import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Fetch notes by ayah for authenticated user.' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Note saved.', body }, { status: 201 });
}
