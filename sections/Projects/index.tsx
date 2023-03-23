import React from 'react';
import { LocaleKeys } from '../../locales/localizer';
import { Project } from '../../components/Project';
import { ProjectData } from '../../@types';
import { Section } from '../../components/Section';
import { Text } from '@mantine/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

interface Props {
  projects: ProjectData[];
}

export const Projects: React.FC<Props> = props => {
  const { projects } = props;
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Section className={classes.section}>
      <Text
        component="h1"
        className={classes.title}
      >
        {t<LocaleKeys>('projectsHeader')}
      </Text>
      <div className={classes.projects}>
        {projects
          .sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
          .map((p, i) => (
            <Project
              key={i}
              project={p}
            />
          ))}
      </div>
    </Section>
  );
};
