import { Icon } from '@tabler/icons-react';

export type AvailableTagIcons =
  | 'react'
  | 'react-native'
  | 'typescript'
  | 'mongodb'
  | 'redux'
  | 'mysql';

export type MappedTagsIcon = {
  [Property in AvailableTagIcons]: {
    component: Icon;
    color: string;
  };
};

export interface ProjectData {
  title: string;
  image: string;
  hostUrl: string;
  repoUrl: string;
  tags: AvailableTagIcons[];
  description: string;
}
