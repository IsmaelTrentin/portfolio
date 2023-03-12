import { createStyles, keyframes } from '@mantine/core';

const moveForever1 = keyframes({
  '0%': { transform: 'translate(85px,0%)' },
  '100%': { transform: 'translate(-90px,0%)' },
});

const moveForever2 = keyframes({
  '0%': { transform: 'translate(-90px,0%)' },
  '100%': { transform: 'translate(85px,0%)' },
});

const moveForever3 = keyframes({
  '0%': { transform: 'translate(-90px, 0%)' },
  '100%': { transform: 'translate(85px, 0%)' },
});

export const useStyles = createStyles(() => ({
  main: {
    height: 80,
    width: '100%',
    zIndex: 5,
  },
  wave1: {
    animation: `${moveForever1} 18s linear infinite`,
    animationDelay: '-2s',
  },
  wave2: {
    animation: `${moveForever2} 16s linear infinite`,
    animationDelay: '-2s',
  },
  wave3: {
    animation: `${moveForever3} 14s linear infinite`,
    animationDelay: '-2s',
  },
}));
