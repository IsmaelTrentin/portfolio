import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  main: {
    padding: '1px 6px',
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: 15,
  },
}));
