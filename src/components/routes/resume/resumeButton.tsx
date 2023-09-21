import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { openLinkInNewTab } from '../../utils';

interface ResumeButtonProps {
  children: React.ReactNode;
}

export const ResumeButton = (props: ResumeButtonProps) => {
  const { children } = props;
  const resumePath = useResumePath();

  return (
    <button onClick={() => openLinkInNewTab(resumePath)}>{children}</button>
  );
};

export default ResumeButton;

type Data = {
  allFile: {
    edges: Array<{
      node: {
        publicURL: string;
        name: string;
        extension: string;
        modifiedTime: number;
      };
    }>;
  };
};

export function useResumePath() {
  const data = useStaticQuery<Data>(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
            extension
            modifiedTime(difference: "hours")
          }
        }
      }
    }
  `);

  const edges = data.allFile.edges.sort((a, b) => {
    return a.node.modifiedTime - b.node.modifiedTime;
  });

  const resumePath = edges[0].node.publicURL;
  return resumePath;
}
