import React from 'react';
import { Text } from '@mantine/core';
import { useStyles } from './styles';

interface Props {
  tag: {
    name: string;
    color: string;
  };
}

export const Tag: React.FC<Props> = props => {
  const { classes } = useStyles();
  const { color, name } = props.tag;

  return (
    <div
      className={classes.main}
      style={{
        borderColor: color,
        backgroundColor: color,
      }}
    >
      <Text size={'xs'}>{name}</Text>
    </div>
  );
};
