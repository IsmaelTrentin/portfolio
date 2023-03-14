import { useEffect, useState } from 'react';

export const useScrollY = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return y;
};
