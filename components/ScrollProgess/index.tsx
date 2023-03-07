import React, { useEffect, useState } from 'react';
import { useMaxSrollY } from '../../hooks/useMaxScrollY';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useStyles } from './styles';

export const ScrollProgress: React.FC<Record<string, unknown>> = () => {
  const { classes } = useStyles();
  const scrollY = useScrollProgress();
  const maxScrollY = useMaxSrollY();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((scrollY / maxScrollY) * 100);
  }, [scrollY, maxScrollY]);

  return (
    <div
      className={classes.main}
      style={{
        boxShadow: scrollY > 1 ? '0 0 5px 0 #00000033' : 'none',
      }}
    >
      <div
        className={classes.progress}
        style={{
          right: `${100 - progress}%`,
        }}
      ></div>
    </div>
  );
};
