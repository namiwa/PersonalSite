import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { openLinkInNewTab } from '../../utils';

const PREFIX = 'ResumeButton';

const classes = {
  root: `${PREFIX}-root`,
};

const StyledButton = styled(Button)(({ theme: Theme }) => ({
  [`& .${classes.root}`]: {
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

interface ResumeButtonProps {
  children: React.ReactNode;
}

export const ResumeButton: React.FC<ResumeButtonProps> = (props) => {
  const { children } = props;
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

  return (
    <StyledButton
      onClick={() => openLinkInNewTab(data.allFile.edges[0].node.publicURL)}
      classes={{ root: classes.root }}
    >
      {children}
    </StyledButton>
  );
};

export default ResumeButton;
