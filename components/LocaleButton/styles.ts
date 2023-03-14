import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  switch: {
    backgroundColor: 'transparent !important',
    transition: 'opacity 180ms ease',
  },
  'switch-on': {
    borderBottom: `2px solid ${theme.colors.dark[9]}`,
  },
  'switch-off': {
    opacity: 0.3,
  },
}));
