import React, { ComponentPropsWithRef } from 'react';
import { Button } from '@mantine/core';
import { useStyles } from './styles';

interface Props extends ComponentPropsWithRef<'button'> {
  locale?: string;
  isSelected?: boolean;
}

export const LocaleButton: React.FC<Props> = props => {
  const { classes, cx } = useStyles();

  return (
    <Button
      {...props}
      variant="subtle"
      color={'dark'}
      className={cx(
        classes.switch,
        props.isSelected ? classes['switch-on'] : classes['switch-off']
      )}
      style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
    >
      {(props.locale ?? 'en').toUpperCase()}
    </Button>
  );
};
