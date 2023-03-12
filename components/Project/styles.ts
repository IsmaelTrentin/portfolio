import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  main: {
    width: 450,
    height: 426, //253
    borderRadius: theme.radius.lg,
    border: `2px solid ${theme.colors.gray[2]}`,
    overflow: 'hidden',
    backgroundColor: theme.colors.gray[0],
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .1)',
  },
  'image-wrapper': {
    position: 'relative',
    width: '100%',
    height: '60%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  bottom: {
    padding: '.7rem .95rem',
  },
  title: {},
  tags: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
  },
  separator: {
    height: 2,
    width: '80%',
    margin: '0 auto',
    marginTop: '.4rem',
    marginBottom: '.8rem',
    backgroundColor: theme.colors.gray[4],
  },
  desc: {
    color: theme.colors.gray[7],
    lineHeight: 1.4,
  },
}));
