import 'server-only';

const BASE = 'https://api.alquran.cloud/v1';

type CacheEntry<T> = {
  expiry: number;
  data: T;
};

const memoryCache = new Map<string, CacheEntry<unknown>>();

async function fetchWithCache<T>(key: string, path: string, ttlSeconds = 3600): Promise<T> {
  const now = Date.now();
  const cached = memoryCache.get(key) as CacheEntry<T> | undefined;
  if (cached && cached.expiry > now) return cached.data;

  const response = await fetch(`${BASE}${path}`, {
    next: { revalidate: ttlSeconds }
  });

  if (!response.ok) {
    throw new Error(`alquran.cloud request failed: ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as { data: T };
  memoryCache.set(key, { data: json.data, expiry: now + ttlSeconds * 1000 });
  return json.data;
}

export type RemoteSurahSummary = {
  number: number;
  englishName: string;
  englishNameTranslation: string;
  name: string;
  numberOfAyahs: number;
  revelationType: string;
};

export type RemoteAyahEdition = {
  numberInSurah: number;
  text: string;
  audio?: string;
};

export type RemoteEditionPayload = {
  edition: { identifier: string };
  ayahs: RemoteAyahEdition[];
};

export async function getSurahList() {
  return fetchWithCache<RemoteSurahSummary[]>('surah-list', '/surah', 86400);
}

export async function getSurahEditions(surahId: number) {
  return fetchWithCache<RemoteEditionPayload[]>(
    `surah-editions-${surahId}`,
    `/surah/${surahId}/editions/quran-uthmani,en.asad,ur.jalandhry,ar.alafasy`,
    21600
  );
}

export async function getAyahForDay() {
  const day = new Date().getUTCDate();
  const surah = ((day * 7) % 114) + 1;
  const editions = await getSurahEditions(surah);
  const arabic = editions.find((e) => e.edition.identifier === 'quran-uthmani')?.ayahs[0];
  const en = editions.find((e) => e.edition.identifier === 'en.asad')?.ayahs[0];
  const ur = editions.find((e) => e.edition.identifier === 'ur.jalandhry')?.ayahs[0];
  return {
    id: `${surah}:1`,
    surah,
    ayah: 1,
    arabicText: arabic?.text || '',
    translations: {
      en: en?.text || '',
      ur: ur?.text || ''
    }
  };
}

export async function buildSurahPayload(surahId: number) {
  const editions = await getSurahEditions(surahId);
  const arabic = editions.find((e) => e.edition.identifier === 'quran-uthmani')?.ayahs || [];
  const en = editions.find((e) => e.edition.identifier === 'en.asad')?.ayahs || [];
  const ur = editions.find((e) => e.edition.identifier === 'ur.jalandhry')?.ayahs || [];
  const recitation = editions.find((e) => e.edition.identifier === 'ar.alafasy')?.ayahs || [];

  return arabic.map((ayah, idx) => ({
    id: `${surahId}:${ayah.numberInSurah}`,
    surahId,
    ayahNumber: ayah.numberInSurah,
    arabicText: ayah.text,
    translations: {
      en: en[idx]?.text || '',
      ur: ur[idx]?.text || ''
    },
    audioUrl: recitation[idx]?.audio || '',
    tafsir: {
      ibnKathir: 'Integrate Quran.com tafsir endpoint here for full source text.',
      maududi: 'Integrate Quran.com tafsir endpoint here for full source text.'
    },
    words: []
  }));
}
