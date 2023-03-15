import React from 'react';
import { LocaleButton } from '../LocaleButton';
import { useLocaleStore } from '../../stores/locale';
import { useMediaQuery } from '@mantine/hooks';
import { useStyles } from './styles';

export const LanguageSwitcher: React.FC<Record<string, unknown>> = () => {
  const { classes, cx } = useStyles();
  const { locale, setLocale } = useLocaleStore(s => s);
  const match = useMediaQuery('(max-width: 391px');

  return (
    <div
      className={cx(classes.main, {
        [classes['main-xs']]: match,
      })}
    >
      <LocaleButton
        locale="it"
        isSelected={locale === 'it'}
        onClick={() => setLocale('it')}
      />
      <LocaleButton
        locale="en"
        isSelected={locale === 'en'}
        onClick={() => setLocale('en')}
      />
      <LocaleButton
        locale="de"
        isSelected={locale === 'de'}
        onClick={() => setLocale('de')}
      />
      <LocaleButton
        locale="fr"
        isSelected={locale === 'fr'}
        onClick={() => setLocale('fr')}
      />
    </div>
  );
};
