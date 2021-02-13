import * as React from 'react';

const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref === null || ref.current == null) {
    return;
  }
  return window.scrollTo(0, ref.current.offsetTop);
};

export default scrollToRef;
