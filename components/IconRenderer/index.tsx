import React from 'react';
import { AvailableTagIcons, MappedTagsIcon } from '../../@types';
import {
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandTypescript,
} from '@tabler/icons-react';

const icons: MappedTagsIcon = {
  react: {
    component: IconBrandReact,
    color: '#61dbfb',
  },
  'react-native': {
    component: IconBrandReactNative,
    color: '#61dbfb',
  },
  typescript: {
    component: IconBrandTypescript,
    color: '#007acc',
  },
  mysql: {
    component: IconBrandMysql,
    color: '#00758f',
  },
  mongodb: {
    component: IconBrandMongodb,
    color: '#3fa037',
  },
  redux: {
    component: IconBrandRedux,
    color: '#764abc',
  },
};

interface Props {
  icon: AvailableTagIcons;
}

export const IconRenderer: React.FC<Props> = ({ icon }) => {
  const { component: Icon, color } = icons[icon];
  return (
    <span title={icon}>
      <Icon
        size={26}
        color={color}
        strokeWidth={1}
      />
    </span>
  );
};
