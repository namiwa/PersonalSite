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

export function useResumePath() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  const resumePath = data.allFile.edges[0].node.publicURL as string;
  return resumePath;
}
