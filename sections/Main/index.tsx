import React from 'react';
import { InfoCode } from '../../components/InfoCode';
import { LocaleKeys } from '../../locales/localizer';
import { Section } from '../../components/Section';
import { Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { Waves } from '../../components/Waves';

export const Main: React.FC<Record<string, unknown>> = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const matchXs = useMediaQuery('(min-width: 491px)');

  return (
    <Section className={classes.section}>
      <div className={classes.container}>
        <div className={classes['text-wrapper']}>
          <Text
            component="h1"
            className={classes.title}
          >
            Ismael Trentin
          </Text>
          {matchXs ? (
            <Text
              component="h6"
              size="md"
              className={classes.subtitle}
            >
              {t<LocaleKeys>('itTechnician')}
              <span>/</span>
              {t<LocaleKeys>('fullstackDev')}
            </Text>
          ) : (
            <>
              {' '}
              <Text
                component="h6"
                size="md"
                className={classes.subtitle}
              >
                {t<LocaleKeys>('itTechnician')}
              </Text>
              <Text
                component="h6"
                size="md"
                className={classes.subtitle}
              >
                {t<LocaleKeys>('fullstackDev')}
              </Text>
            </>
          )}
        </div>
        <div className={classes['infocode-wrapper']}>
          <InfoCode />
        </div>
      </div>
      <div className={classes.waves}>
        <Waves />
      </div>
    </Section>
  );
};
