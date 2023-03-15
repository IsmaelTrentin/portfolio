import { createStyles } from '@mantine/core';
import { sectionStyles } from '../../styles/section';

export const useStyles = createStyles(theme => ({
  section: {
    ...sectionStyles,
    paddingLeft: '8rem',
    paddingRight: '8rem',
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100vh',
    // backgroundColor: '#e942f530',
    backgroundColor: theme.colors.violet[3],
  },
  'section-sm': {
    justifyContent: 'flex-start',
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
    '&:last-child': {
      marginBottom: '1.5rem',
    },
  },
  waves: {
    display: 'flex',
    alignItems: 'end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
}));
