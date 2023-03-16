import { createStyles } from '@mantine/core';
import { sectionStyles } from '../../styles/section';

export const useStyles = createStyles(theme => ({
  section: {
    ...sectionStyles,
    paddingLeft: '7rem',
    paddingRight: '7rem',
    position: 'relative',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    // backgroundColor: '#e942f530',
    backgroundColor: theme.colors.violet[3],
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 1600,
  },
  'container-sm': {
    justifyContent: 'center',
  },
  'text-wrapper': {
    marginRight: '2rem',
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
  'infocode-wrapper': {
    // display: 'flex',
    // alignContent: 'center',
    // alignItems: 'center',
    width: 525,
    // maxHeight: 477,
    minWidth: 525,
  },
  'infocode-wrapper-sm': {
    minHeight: 477,
    alignContent: 'center',
    alignItems: 'flex-start',
  },
  'infocode-wrapper-xs': {
    transform: 'scale(0.65) !important',
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
