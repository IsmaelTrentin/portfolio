import React, { CSSProperties } from 'react';
import { MediaQuery } from '@mantine/core';

interface Props {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export const Section: React.FC<Props> = props => {
  const { className, style, children } = props;

  return (
    <MediaQuery
      query="(max-width: 1273px)"
      styles={{
        paddingLeft: '3rem',
        paddingRight: '3rem',
        flexFlow: 'column nowrap',
      }}
    >
      <div
        className={className}
        style={style}
      >
        {children}
      </div>
    </MediaQuery>
  );
};
