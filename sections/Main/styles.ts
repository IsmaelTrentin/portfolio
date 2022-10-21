import { createStyles } from '@mantine/core';
import { sectionStyles } from '../../styles/section';

export const useStyles = createStyles(() => ({
  section: {
    ...sectionStyles,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#e942f530',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 400,
    lineHeight: '3.5rem',
  },
  subtitle: {
    fontWeight: 400,
    letterSpacing: 1,
    opacity: 0.8,
    '& > span': {
      margin: '0 1rem',
      opacity: 0.5,
    },
  },
}));
