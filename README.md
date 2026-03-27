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
A full-stack, modular Quran web application starter built with **Next.js + TypeScript + Tailwind + PostgreSQL (Prisma) + NextAuth**, designed for production hardening and Vercel deployment.

## Implemented Feature Coverage

### 1) Quran Reading Module
- Surah navigator and verse-by-verse rendering.
- Arabic text (Uthmani-capable font slot via Arabic font class).
- Dual translations (English + Urdu) with toggle support.
- API endpoints for full Quran payload and individual surah payload.

### 2) Audio Recitation
- Sticky audio player with play / pause / next / previous.
- Auto-advance to the next ayah after playback end.
- Playlist model supports multiple qaris and surah-level playback.

### 3) Tafsir Module
- Per-ayah tafsir block with expand/collapse.
- Two tafsir sources wired: Ibn Kathir and Maududi.

### 4) Search System
- Multi-field search endpoint supports Arabic, English, Urdu, Surah names, and ayah identifiers.
- Client-side search box and live result rendering.

### 5) Bookmarks & Favorites
- Dedicated bookmarks page.
- REST endpoint stubs for ayah/surah bookmarks and custom collections.
- Prisma `Bookmark` model supports type and collections.

### 6) Authentication
- NextAuth integration.
- Google OAuth + Email magic-link providers.
- Custom sign-in page and protected profile page session read.

### 7) Progress Tracking
- Progress endpoint stubs with update/read behavior.
- Prisma `ReadingProgress` model for last ayah + history JSON.

### 8) Themes
- Light/Dark modes through `next-themes`.
- Navbar quick theme toggles.

### 9) Multi-language Support
- Translation model includes Urdu + English.
- UI-ready settings page for language switching, Arabic-ready layout/RTL support points.

### 10) Offline/PWA
- Web manifest file for installability.
- Service worker scaffold for cache-first behavior.

### 11) Word-by-Word Quran
- Clickable word chips per ayah with transliteration + meaning metadata.

### 12) Tajweed Highlighting
- Ayah-level tajweed classification tag scaffold (`ghunnah`, `ikhfa`, `idgham`).

### 13) Daily Ayah / Reminder
- Daily ayah homepage card.
- API endpoint for daily ayah payload.

### 14) Notes System
- Notes page scaffold + notes REST endpoint.
- Prisma `Note` model attached to user and ayah reference.

### 15) Share Feature
- Architecture-ready; add social share button in `AyahCard` and image generation route.

### 16) Qibla + Prayer Times
- Settings surface prepared; plug in prayer API and geolocation hooks.

## Project Structure

```
/app
/components
/lib
/hooks
/prisma
/public
/styles
```

## API Routes

- `GET /api/quran`
- `GET /api/surah/:surahId`
- `GET /api/search?q=`
- `GET /api/daily-ayah`
- `GET|POST /api/bookmarks`
- `GET|POST /api/notes`
- `GET|POST /api/progress`
- `GET|POST /api/auth/[...nextauth]`

## Database models
- `GET|POST /api/bookmarks`
- `GET|POST /api/notes`
- `GET|POST /api/progress`
- `GET /api/daily-ayah`
- `GET|POST /api/auth/[...nextauth]`

## Database Models

- `User`
- `Bookmark`
- `Note`
- `ReadingProgress`
- NextAuth models: `Account`, `Session`, `VerificationToken`
- Plus NextAuth support models: `Account`, `Session`, `VerificationToken`

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
   ```bash
   npm install
   ```
2. Configure environment:
   ```bash
   cp .env.example .env
   ```
3. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```
4. Run migrations:
   ```bash
   npm run prisma:migrate
   ```
5. Start dev server:
   ```bash
   npm run dev
   ```

## Deployment (Vercel)

- Add all env variables from `.env.example` in your Vercel project.
- Set PostgreSQL connection string.
- Ensure NextAuth callback URL uses production domain.

## Production hardening checklist

- Replace demo Quran dataset with complete 114-surah feed (API ingestion or static JSON shards).
- Add route-level caching and `revalidate` policies.
- Add observability (Sentry + logs).
- Add integration tests and E2E tests.
- Replace placeholder PWA icons with real PNG assets.
