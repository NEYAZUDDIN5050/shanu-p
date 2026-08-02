import { useEffect, useState } from 'react';

export function useCountUp(end, { duration = 1800, start = 0, enabled = true } = {}) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!enabled) {
      setValue(start);
      return;
    }

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start, enabled]);

  return value;
}
