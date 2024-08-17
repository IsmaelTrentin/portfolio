import Head from 'next/head';
import i18next from 'i18next';
import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import { MantineProvider } from '@mantine/core';
import { theme } from '../styles/theme';
import { useEffect } from 'react';
import { useLocaleStore } from '../stores/locale';
import * as localizer from '../locales/localizer';

localizer.setup();

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const { locale, setLocale } = useLocaleStore();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setLocale(searchParams.get('acceptLang') || 'en');
  }, [setLocale]);

  useEffect(() => {
    i18next.changeLanguage(locale);
  }, [locale]);

  return (
    <>
      <Head>
        <title>Ismael Trentin - Portfolio</title>
        {/* <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
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
