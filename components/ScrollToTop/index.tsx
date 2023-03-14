import React from 'react';
import { ActionIcon } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import { useScrollY } from '../../hooks/useScrollY';
import { useStyles } from './styles';

const Y_THRESHOLD = 600;

interface Props {
  onClick?: () => void;
}

export const ScrollToTop: React.FC<Props> = props => {
  const { onClick } = props;
  const { classes, cx } = useStyles();
  const scrollY = useScrollY();

  return (
    <ActionIcon
      color="violet"
      size="xl"
      radius="md"
      variant="filled"
      className={cx(classes.main, {
        [classes['main-active']]: scrollY > Y_THRESHOLD,
        [classes['main-out']]: scrollY <= Y_THRESHOLD,
      })}
      onClick={onClick}
    >
      <IconArrowUp />
    </ActionIcon>
  );
};
