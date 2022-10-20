import { MantineThemeOverride } from '@mantine/core';

export const globalStyles: MantineThemeOverride["globalStyles"] = (theme) => ({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  body: {
    ...theme.fn.fontStyles(),
    fontSize: 16,
    lineHeight: theme.lineHeight,
  },
});