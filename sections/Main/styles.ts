import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  section: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '8rem',
    backgroundColor: '#e942f530'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 400,
    lineHeight: '4rem',
  },
  subtitle: {
    fontWeight: 400,
    letterSpacing: 1,
    opacity: 0.8,
    '& > span': {
      margin: '0 1rem',
      opacity: 0.5,
    }
  }
}));
