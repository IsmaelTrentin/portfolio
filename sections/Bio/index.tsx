import React from 'react';
import { Box, Text } from '@mantine/core';
import { Section } from '../../components/Section';
import { useStyles } from './styles';

export const Bio: React.FC<Record<string, unknown>> = () => {
  const { classes } = useStyles();

  return (
    <Section className={classes.section}>
      <Box
        className={classes.column}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        p="2rem"
      >
        <div className={classes.image}></div>
      </Box>
      <Box
        className={classes.column}
        px="2rem"
      >
        <Text
          component="h1"
          className={classes.title}
        >
          Bio
        </Text>
        <Text
          component="p"
          className={classes.content}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          impedit consequatur facere voluptates iure quasi quam repudiandae
          labore deserunt molestiae maiores reiciendis amet, tempora dicta qui
          earum delectus enim repellat! Lorem ipsum dolor sit amet consectetur
          adipisicing.
        </Text>
        <div className={classes['hobbies-wrapper']}></div>
        <Text
          component="p"
          className={classes.content}
        >
          Quidem tempora voluptatibus deleniti odio reiciendis voluptatum illum,
          fugit dignissimos, impedit hic, perspiciatis ex cupiditate quisquam.
          Totam optio esse tempora molestiae inventore. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Natus aspernatur harum illo ducimus
          officiis expedita fugiat atque quasi, assumenda quos! Distinctio velit
          nemo
        </Text>
      </Box>
    </Section>
  );
};
