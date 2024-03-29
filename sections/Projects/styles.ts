import { createStyles } from '@mantine/core';
import { sectionStyles } from '../../styles/section';

export const useStyles = createStyles(theme => ({
  section: {
    ...sectionStyles,
    paddingTop: '2rem',
    paddingBottom: '4rem',
    // display: 'flex',
    // flexFlow: 'row wrap',
  },
  title: {
    fontSize: '3rem !important',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  projects: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    gap: '1.75rem',
  },
}));
