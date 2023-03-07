import { useEffect, useState } from 'react';

export const useScrollProgress = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);

    handleScroll();

    console.log(window);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return y;
};
