import React from 'react';
import { Section } from '../../components/Section';
import { Text } from '@mantine/core';
import { useStyles } from './styles';

export const Languages: React.FC<Record<string, unknown>> = () => {
  const { classes } = useStyles();

  return (
    <Section className={classes.section}>
      <Text
        component="h1"
        className={classes.title}
      >
        Languages
      </Text>
    </Section>
  );
};
