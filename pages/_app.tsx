import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../styles/theme';
import { globalStyles } from '../styles/global';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Ismael Trentin - Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          ...theme,
          globalStyles,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}