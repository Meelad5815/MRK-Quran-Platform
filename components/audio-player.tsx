'use client';

import { useAudioPlayer } from '@/hooks/useAudioPlayer';

export const AudioPlayer = ({ playlist }: { playlist: string[] }) => {
  const audio = useAudioPlayer(playlist);

  return (
    <div className="sticky bottom-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <p className="text-xs">Sticky Player • Ayah {audio.currentIndex + 1}</p>
      <div className="mt-2 flex gap-2">
        <button onClick={audio.previous} className="rounded bg-slate-200 px-3 py-1 dark:bg-slate-700">Prev</button>
        <button onClick={audio.play} className="rounded bg-accent px-3 py-1 text-white">Play</button>
        <button onClick={audio.pause} className="rounded bg-slate-200 px-3 py-1 dark:bg-slate-700">Pause</button>
        <button onClick={audio.next} className="rounded bg-slate-200 px-3 py-1 dark:bg-slate-700">Next</button>
      </div>
    </div>
  );
};
