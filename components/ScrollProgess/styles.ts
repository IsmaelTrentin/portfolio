import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  main: {
    position: 'relative',
    width: '100%',
    height: '.2rem',
    backgroundColor: theme.colors.gray[0],
    transition: 'box-shadow 200ms ease',
  },
  progress: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    maxWidth: '100%',
    backgroundColor: theme.colors.indigo[9],
    transition: 'right 80ms ease',
  },
}));
