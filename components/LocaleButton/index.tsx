import React from 'react';
import { Button } from '@mantine/core';
import { useStyles } from './styles';

interface Props {
  locale?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const LocaleButton: React.FC<Props> = props => {
  const { locale, isSelected, onClick } = props;
  const { classes, cx } = useStyles();

  return (
    <Button
      onClick={onClick}
      variant="subtle"
      color={'dark'}
      className={cx(
        classes.switch,
        isSelected ? classes['switch-on'] : classes['switch-off']
      )}
      style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
    >
      {(locale ?? 'en').toUpperCase()}
    </Button>
  );
};
