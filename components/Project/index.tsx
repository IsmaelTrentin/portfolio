import React from 'react';
import { AvailableTagIcons, ProjectData } from '../../@types';
import { IconRenderer } from '../IconRenderer';
import { Text } from '@mantine/core';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

interface Props {
  project: ProjectData;
}

export const Project: React.FC<Props> = props => {
  const { project } = props;
  const { classes } = useStyles();
  const [, i18n] = useTranslation();

  return (
    <div className={classes.main}>
      <div
        className={classes['image-wrapper']}
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      ></div>
      <div className={classes.bottom}>
        <Text
          className={classes.title}
          size="xl"
          weight={500}
          transform="capitalize"
        >
          {
            // i18n.fallbackLangs is teadious to work with.
            // 'en' is in any case the fallback language for this website.
            project.title[i18n.language as keyof typeof project.title] ??
              project.title['en']
          }
        </Text>
        <div className={classes.tags}>
          {project.tags.sort().map((t, i) => (
            <IconRenderer
              key={i}
              icon={t as AvailableTagIcons}
            />
          ))}
        </div>
        <div className={classes.separator}></div>
        <Text
          className={classes.desc}
          size="sm"
          align="justify"
          lineClamp={3}
        >
          {project.description[
            i18n.language as keyof typeof project.description
          ] ?? project.description['en']}
        </Text>
      </div>
    </div>
  );
};
