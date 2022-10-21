import { Button, Text } from '@mantine/core';

import React from 'react';
import { Section } from '../../components/Section';
import { useStyles } from './styles';

export const Main: React.FC<Record<string, unknown>> = () => {
  const { classes } = useStyles();

  return (
    <Section className={classes.section}>
      <Text
        component="h1"
        className={classes.title}
      >
        Ismael Trentin
      </Text>
      <Text
        component="h6"
        size="sm"
        className={classes.subtitle}
      >
        Informatico Aziendale
        <span>/</span>
        Sviluppatore Web
      </Text>
      <div></div>
      {/* <Button
        fullWidth={false}
        style={{
          width:'fit-content',
          marginTop:'1rem'
        }}
      >
        Lorem Ipsum
      </Button> */}
    </Section>
  );
};
