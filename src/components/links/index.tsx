import * as React from 'react';

interface LinkProps {
  to: string;
  children?: React.ReactNode;
}

export const Link = ({ to, children }: LinkProps) => {
  return (
    <a
      className="text-blue-400"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
