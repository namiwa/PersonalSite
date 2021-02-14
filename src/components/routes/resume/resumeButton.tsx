import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: 'center',
      textAlign: 'center',
    },
  }),
);

export const ResumeButton = () => {
  const classes = useStyles();
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
  const onResumeClick = () => {
    if (!window) {
      return;
    }
    return window.open(data.allFile.edges[0].node.publicURL);
  };
  return (
    <Button
      onClick={onResumeClick}
      classes={{ root: classes.root }}
      color="primary"
    >
      <Typography variant="h5" align="center">
        View Resume
      </Typography>
    </Button>
  );
};

export default ResumeButton;
