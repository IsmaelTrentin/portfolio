import { Text } from '@mantine/core';
import React from 'react';
import { Section } from '../../components/Section';
import { useStyles } from './styles';

interface Props { }

export const Main: React.FC<Props> = props => {
  const { } = props;
  const { classes } = useStyles();

  return (
    <Section className={classes.section}>
      <Text
        component='h1'
        className={classes.title}
      >
        Ismael Trentin
      </Text>
      <Text
        component='h6'
        size="sm"
        className={classes.subtitle}
      >
        Informatico Aziendale
        <span>/</span>
        Sviluppatore Web
      </Text>
    </Section>
  );
};