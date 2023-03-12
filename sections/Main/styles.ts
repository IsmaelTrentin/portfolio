import { createStyles } from '@mantine/core';
import { sectionStyles } from '../../styles/section';

export const useStyles = createStyles(() => ({
  section: {
    ...sectionStyles,
    paddingLeft: '10rem',
    paddingRight: '10rem',
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e942f530',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 400,
    lineHeight: '3.5rem',
    transform: 'translateX(-5px)',
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
  'info-code': {},
  waves: {
    display: 'flex',
    alignItems: 'end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
}));
