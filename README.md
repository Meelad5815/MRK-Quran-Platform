# MRK-Quran-Explorer

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
- Plus NextAuth support models: `Account`, `Session`, `VerificationToken`

## Setup

1. Install dependencies:
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
