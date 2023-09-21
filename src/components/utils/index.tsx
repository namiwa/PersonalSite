import * as React from 'react';
import { Link } from 'gatsby';

export const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref === null || ref.current == null || !window) {
    return;
  }
  return window.scrollTo(0, ref.current.offsetTop);
};

interface StylessLinkProps {
  to: string;
  children: React.ReactNode;
}

export const InternalLinks: React.FC<StylessLinkProps> = (props) => {
  const { children, to } = props;
  return (
    <Link className="italic no-underline" to={to}>
      {children}
    </Link>
  );
};

export const openLinkInNewTab = (url: string) => {
  if (!window) {
    return;
  }
  return window.open(url);
};
