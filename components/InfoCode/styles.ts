import { createStyles, keyframes } from '@mantine/core';

const animationIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(40px)',
  },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const useStyles = createStyles(theme => ({
  main: {
    width: 525,
    maxHeight: 477,
    opacity: 0,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.dark[4],
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .4)',
    overflow: 'hidden', // useless but better safe than sorry
    transition: 'max-height ease 250ms',
    animation: `${animationIn} 300ms ease forwards`,
  },
}));
