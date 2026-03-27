export type TranslationMap = {
  en: string;
  ur: string;
};

export type TafsirMap = {
  ibnKathir: string;
  maududi: string;
};

export type WordByWordToken = {
  arabic: string;
  transliteration: string;
  meaning: string;
};

export type Ayah = {
  id: string;
  surahId: number;
  ayahNumber: number;
  arabicText: string;
  translations: TranslationMap;
  tafsir: TafsirMap;
  tajweedClass?: 'ghunnah' | 'ikhfa' | 'idgham';
  audioUrl: string;
  words: WordByWordToken[];
};

export type Surah = {
  id: number;
  nameArabic: string;
  nameEnglish: string;
  revelationType: 'Meccan' | 'Medinan';
  totalAyahs: number;
  ayahs: Ayah[];
};
