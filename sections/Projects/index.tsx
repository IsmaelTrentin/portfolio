import React from 'react';
import { Project } from '../../components/Project';
import { ProjectData } from '../../@types';
import { Section } from '../../components/Section';
import { Text } from '@mantine/core';
import { useStyles } from './styles';

interface Props {
  projects: ProjectData[];
}

export const Projects: React.FC<Props> = props => {
  const { projects } = props;
  const { classes } = useStyles();

  return (
    <Section className={classes.section}>
      <Text
        component="h1"
        className={classes.title}
      >
        My Projects
      </Text>
      <div className={classes.projects}>
        {projects.map((p, i) => (
          <Project
            key={i}
            project={p}
          />
        ))}
      </div>
    </Section>
  );
};
