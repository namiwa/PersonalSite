import * as React from 'react';

interface LinkProps {
  to: string;
  children?: React.ReactNode;
}

export const Link = ({ to, children }: LinkProps) => {
  return (
    <a className="italic text-blue-400" href={to}>
      {children}
    </a>
  );
};
