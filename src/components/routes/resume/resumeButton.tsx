import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { openLinkInNewTab } from "../../utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
    },
  }),
);

interface ResumeButtonProps {
  children: React.ReactNode;
}

export const ResumeButton: React.FC<ResumeButtonProps> = (props) => {
  const classes = useStyles();
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
    <Button onClick={() => openLinkInNewTab(data.allFile.edges[0].node.publicURL)} classes={{ root: classes.root }}>
      {children}
    </Button>
  );
};

export default ResumeButton;
