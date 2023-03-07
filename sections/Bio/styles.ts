import { createStyles } from '@mantine/core';
import { sectionStyles } from '../../styles/section';

export const useStyles = createStyles(theme => ({
  section: {
    ...sectionStyles,
    display: 'flex',
    flexFlow: 'row wrap',
  },
  column: {
    height: '100%',
    width: '50%',
    minWidth: 300,
  },
  image: {
    width: '100%',
    maxWidth: 500,
    height: '145%',
    backgroundColor: 'black',
    borderRadius: theme.radius.xl,
  },
  title: {
    fontSize: '3rem !important',
  },
  'hobbies-wrapper': {
    height: '5rem',
    padding: '1rem',
  },
  content: {
    textAlign: 'justify',
  },
}));
