import { MantineThemeOverride } from '@mantine/core';

export const globalStyles: MantineThemeOverride['globalStyles'] = theme => ({
  '@font-face': {
    fontFamily: 'Montserrat',
    src: 'url("/fonts/Montserrat/Montserrat-VariableFont_wght.ttf") format("truetype")',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    // wrong as hell but hey, too late now
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
    '&::-webkit-scrollbar': {
      width: 10,
    },

    '&::-webkit-scrollbar-track': {
      background: theme.colors.gray[1],
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.colors.gray[4],
      borderRadius: theme.radius.lg,
    },
  },
});
