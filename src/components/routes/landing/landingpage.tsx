import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {
  makeStyles,
  createStyles,
  Container,
  Typography,
  IconButton,
  Grid,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Img from 'gatsby-image';
import { openLinkInNewTab } from '../../utils';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
  }),
);

/**
 * Main Landing page component for website.
 * Note that resume link routes back to the ROOT_URL.
 */
export const LandingPage = () => {
  const classes = useStyles();
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <Container className={classes.root}>
          <br />
          <Typography align="center" variant="h3">
            Khairul Iman
          </Typography>
          <br />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Img
                fixed={data.file.childrenImageSharp[0].fixed}
                alt={'namiwa-image'}
                loading="eager"
              />
            </Grid>
            <Grid item>
              <IconButton onClick={() => openLinkInNewTab('https://github.com/namiwa')}>
                <GitHubIcon />
              </IconButton>
              <IconButton onClick={() => openLinkInNewTab('https://linkedin.com/in/namiwa')}>
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography align="center" variant="h6">
                A final year computer engineering undergraduate from National
                University of Singapore. My interests lies in building software,
                taking a hands-on approach to do so.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      )}
    />
  );
};

export default LandingPage;

export const query = graphql`
  query {
    file(extension: { eq: "jpg" }, name: { eq: "namiwa" }) {
      childrenImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
