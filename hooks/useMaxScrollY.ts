import { useEffect, useState } from 'react';

export const useMaxSrollY = () => {
  const [max, setMax] = useState(0);

  useEffect(() => {
    setMax(
      Math.max(
        window.document.body.scrollHeight,
        window.document.body.offsetHeight,
        window.document.documentElement.clientHeight,
        window.document.documentElement.scrollHeight,
        window.document.documentElement.offsetHeight
      ) - window.document.documentElement.clientHeight
    );
  }, []);

  return max;
};
