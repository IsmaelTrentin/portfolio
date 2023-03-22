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

type LocalizedResource = {
  en: string;
  it?: string;
  de?: string;
  fr?: string;
};

export type ProjectData = {
  title: LocalizedResource;
  image: string;
  hostUrl: string;
  repoUrl: string;
  tags: AvailableTagIcons[];
  description: LocalizedResource;
};
