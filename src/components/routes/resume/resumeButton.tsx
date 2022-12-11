import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { openLinkInNewTab } from '../../utils';

const StyledButton = styled(Button)(({ theme }) => ({
  justifyContent: 'center',
  textAlign: 'center',
  color: theme.palette.common.black,
}));

interface ResumeButtonProps {
  children: React.ReactNode;
}

export const ResumeButton = (props: ResumeButtonProps) => {
  const { children } = props;
  const resumePath = useResumePath();

  return (
    <StyledButton onClick={() => openLinkInNewTab(resumePath)}>
      {children}
    </StyledButton>
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
