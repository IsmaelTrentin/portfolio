import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  main: {
    position: 'fixed',
    right: '-4rem',
    bottom: '2.5rem',
    zIndex: 9999,
    opacity: 0,
    transition: 'right 360ms ease, opacity 360ms ease',
  },
  'main-active': {
    opacity: 1,
    right: '2.5rem',
  },
  'main-out': {
    transition: 'right 230ms ease, opacity 100ms ease',
  },
}));
