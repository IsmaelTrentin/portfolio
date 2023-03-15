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
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const matchLg = useMediaQuery('(max-width: 1273px)');
  const matchXs = useMediaQuery('(min-width: 443px)');

  return (
    <Section
      className={cx(classes.section, {
        [classes['section-sm']]: matchLg,
      })}
    >
      <div>
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
      <InfoCode />
      <div className={classes.waves}>
        <Waves />
      </div>
    </Section>
  );
};
