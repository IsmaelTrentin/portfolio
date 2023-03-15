import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  main: {
    position: 'fixed',
    right: '-4rem',
    bottom: '2.5rem',
    zIndex: 998,
    opacity: 0,
    boxShadow: `0 0 9px 0 ${theme.colors.violet[2]}`,
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
