import { createStyles } from '@mantine/core';

const mqXs = '@media (max-width: 391px)';

export const useStyles = createStyles(theme => ({
  main: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0 .75rem',
    width: 'min-content',
    height: 80,
    padding: '1.75rem 2.5rem',
    margin: 'auto',
    backgroundColor: theme.white,
    borderRadius: 20,
    boxShadow: '0 0 16px 0 #00000022',
    [mqXs]: {
      width: '100%',
      overflow: 'hidden',
    },
  },
}));
