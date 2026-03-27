# MRK-Quran-Explorer

MRK-Quran-Explorer is a full-stack Quran web application built with:
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Next.js API Routes (Node runtime)
- PostgreSQL + Prisma
- NextAuth (Google + Email)

## What is now implemented

## Live Quran data integration
The app now uses **https://api.alquran.cloud** as the primary source for:
- Surah list
- Arabic (Uthmani) ayah text
- English translation (`en.asad`)
- Urdu translation (`ur.jalandhry`)
- Audio recitation (`ar.alafasy`)

All external data fetching is centralized in reusable utility functions in:
- `lib/api/quran.ts`

The utility includes:
- Shared fetch helper
- In-memory TTL cache
- Next.js `revalidate` cache hints

## Core features in repository

1. Quran reading module
- Surah navigator populated from live API
- Verse-by-verse rendering
- Arabic + Urdu + English display
- Translation toggle

2. Audio recitation
- Sticky player with play/pause/next/previous
- Auto-play next ayah

3. Tafsir module
- Per-ayah expand/collapse
- Source placeholders for Ibn Kathir + Maududi
- Ready for Quran.com tafsir API integration

4. Search system
- Search endpoint with Arabic/Urdu/English matching
- Surah-level narrowing and ayah-level result list

5. Bookmarks/favorites
- API stubs + page scaffolding
- Prisma model ready

6. User authentication
- NextAuth wired with Google OAuth + Email magic-link
- Sign-in page + profile page

7. Progress tracking
- API endpoint scaffolding + Prisma model

8. Theme support
- Light/dark mode via `next-themes`

9. Multi-language support
- English + Urdu translations in UI
- RTL-friendly rendering for Urdu text blocks

10. Offline/PWA base
- Manifest + service worker scaffold

11. Word-by-word + Tajweed
- UI hooks/scaffolding in `AyahCard`
- Optional Quran.com data integration point

12. Daily ayah
- Home page card fed by `/api/daily-ayah`

13. Notes system
- Notes page + API scaffolding + Prisma model

## API routes

- `GET /api/quran`
- `GET /api/surah/:surahId`
- `GET /api/search?q=`
- `GET /api/daily-ayah`
- `GET|POST /api/bookmarks`
- `GET|POST /api/notes`
- `GET|POST /api/progress`
- `GET|POST /api/auth/[...nextauth]`

## Database models

- `User`
- `Bookmark`
- `Note`
- `ReadingProgress`
- NextAuth models: `Account`, `Session`, `VerificationToken`

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add environment variables:
```bash
cp .env.example .env
```

3. Generate Prisma client:
```bash
npm run prisma:generate
```

4. Run migration:
```bash
npm run prisma:migrate
```

5. Start dev server:
```bash
npm run dev
```

## Optional Quran.com integration points

You can extend `lib/api/quran.ts` to consume Quran.com APIs for:
- Detailed tafsir sources
- Word-by-word tokens (with transliteration/grammar)
- Advanced recitation metadata

## Deployment (Vercel)

- Add all env vars from `.env.example`.
- Provision PostgreSQL.
- Configure `NEXTAUTH_URL` for your production domain.
