import { useState, useEffect } from 'react';

/**
 * Ticks a frame counter at ~`fps` frames per second.
 * Used for diagnostic readouts (e.g. the hero "frame ####" stamp).
 */
export function useFrameTicker(fps = 24): number {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const interval = 1000 / fps;
    const id = window.setInterval(() => setFrame((f) => (f + 1) % 100000), interval);
    return () => window.clearInterval(id);
  }, [fps]);
  return frame;
}
