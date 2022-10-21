import { MantineThemeOverride } from '@mantine/core';

export const globalStyles: MantineThemeOverride['globalStyles'] = theme => ({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontSize: 18,
  },
  h1: {
    fontWeight: 400,
    fontSize: '3.5rem !important',
  },
  h2: {
    fontWeight: 400,
    fontSize: '2rem !important',
  },
  body: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
  },
});
