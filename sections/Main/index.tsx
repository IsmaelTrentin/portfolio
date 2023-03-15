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
  const match = useMediaQuery('(max-width: 1273px)');

  return (
    <Section
      className={cx(classes.section, {
        [classes['section-sm']]: match,
      })}
    >
      <div>
        <Text
          component="h1"
          className={classes.title}
        >
          Ismael Trentin
        </Text>
        <Text
          component="h6"
          size="md"
          className={classes.subtitle}
        >
          {t<LocaleKeys>('itTechnician')}
          <span>/</span>
          {t<LocaleKeys>('fullstackDev')}
        </Text>
      </div>
      <InfoCode />
      <div className={classes.waves}>
        <Waves />
      </div>
    </Section>
  );
};
