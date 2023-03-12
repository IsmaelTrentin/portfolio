import React from 'react';
import { useStyles } from './styles';

export const Waves: React.FC<Record<string, unknown>> = () => {
  const { classes } = useStyles();

  return (
    <svg
      className={classes.main}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g>
        <use
          className={classes.wave1}
          xlinkHref="#wave-path"
          x={50}
          y={3}
          fill="rgba(255, 255, 255, .2)"
        ></use>
      </g>
      <g>
        <use
          className={classes.wave2}
          xlinkHref="#wave-path"
          x={50}
          y={0}
          fill="rgba(255, 255,255, .3)"
        ></use>
      </g>
      <g>
        <use
          className={classes.wave3}
          xlinkHref="#wave-path"
          x={50}
          y={9}
          fill="rgba(255, 255, 255, 1)"
        ></use>
      </g>
    </svg>
  );
};
