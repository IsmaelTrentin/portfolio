import React, { CSSProperties } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export const Section: React.FC<Props> = props => {
  const { className, style, children } = props;

  return (
    <div
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};
