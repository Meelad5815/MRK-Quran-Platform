'use client';

import { useEffect, useRef, useState } from 'react';

export const useAudioPlayer = (playlist: string[]) => {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playlist.length) return;
    if (!ref.current) {
      ref.current = new Audio(playlist[index]);
      ref.current.addEventListener('ended', () => setIndex((v) => (v + 1) % playlist.length));
    } else {
      ref.current.src = playlist[index];
      if (playing) void ref.current.play();
    }
  }, [index, playlist, playing]);

  const play = async () => {
    if (!ref.current) return;
    await ref.current.play();
    setPlaying(true);
  };

  const pause = () => {
    ref.current?.pause();
    setPlaying(false);
  };

  return {
    play,
    pause,
    next: () => setIndex((v) => (v + 1) % playlist.length),
    previous: () => setIndex((v) => (v - 1 + playlist.length) % playlist.length),
    currentIndex: index,
    playing
  };
};
