'use client';

import { useState } from 'react';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<{ id: string; arabicText: string; en: string }>>([]);

  const onSearch = async () => {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = (await response.json()) as { results: Array<{ id: string; arabicText: string; en: string }> };
    setResults(data.results);
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Arabic, Urdu, English or Surah"
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900"
        />
        <button onClick={onSearch} className="rounded-xl bg-accent px-4 py-2 text-sm text-white">
          Search
        </button>
      </div>
      <ul className="mt-3 space-y-2">
        {results.map((result) => (
          <li key={result.id} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
            <p className="font-arabic text-lg">{result.arabicText}</p>
            <p className="text-sm">{result.en}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
