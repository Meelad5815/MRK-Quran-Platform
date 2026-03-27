import { Surah } from './types';

export const surahList: Surah[] = [
  {
    id: 1,
    nameArabic: 'الفاتحة',
    nameEnglish: 'Al-Fatihah',
    revelationType: 'Meccan',
    totalAyahs: 7,
    ayahs: [
      {
        id: '1:1',
        surahId: 1,
        ayahNumber: 1,
        arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        translations: {
          en: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
          ur: 'شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔'
        },
        tafsir: {
          ibnKathir: 'This ayah opens every blessed action and teaches reliance on Allah.',
          maududi: 'It establishes that all guidance starts by invoking Allah’s mercy.'
        },
        tajweedClass: 'ghunnah',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3',
        words: [
          { arabic: 'بِسْمِ', transliteration: 'bismi', meaning: 'In the name' },
          { arabic: 'اللَّهِ', transliteration: 'allah', meaning: 'of Allah' }
        ]
      },
      {
        id: '1:2',
        surahId: 1,
        ayahNumber: 2,
        arabicText: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        translations: {
          en: 'All praise is due to Allah, Lord of the worlds.',
          ur: 'سب تعریف اللہ کے لئے ہے جو تمام جہانوں کا پروردگار ہے۔'
        },
        tafsir: {
          ibnKathir: 'Praise belongs absolutely to Allah for His perfect lordship.',
          maududi: 'A declaration that gratitude and reverence are due only to Allah.'
        },
        tajweedClass: 'ikhfa',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/2.mp3',
        words: [{ arabic: 'الْحَمْدُ', transliteration: 'alhamdu', meaning: 'All praise' }]
      }
    ]
  },
  {
    id: 112,
    nameArabic: 'الإخلاص',
    nameEnglish: 'Al-Ikhlas',
    revelationType: 'Meccan',
    totalAyahs: 4,
    ayahs: [
      {
        id: '112:1',
        surahId: 112,
        ayahNumber: 1,
        arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        translations: {
          en: 'Say, He is Allah, [who is] One.',
          ur: 'کہہ دو کہ وہ اللہ ایک ہے۔'
        },
        tafsir: {
          ibnKathir: 'A concise affirmation of Tawhid and Allah’s uniqueness.',
          maududi: 'This surah summarizes pure monotheism for all believers.'
        },
        tajweedClass: 'idgham',
        audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1121.mp3',
        words: [{ arabic: 'قُلْ', transliteration: 'qul', meaning: 'Say' }]
      }
    ]
  }
];

export const qariOptions = [
  { id: 'sudais', name: 'Abdur Rahman Al-Sudais' },
  { id: 'mishary', name: 'Mishary Rashid Alafasy' }
] as const;
