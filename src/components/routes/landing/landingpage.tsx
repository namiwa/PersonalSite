import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {
  makeStyles,
  Theme,
  createStyles,
  Container,
  Typography,
  IconButton,
  Grid,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Img from 'gatsby-image';

const useStyles = makeStyles((theme: typeof Theme) =>
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
export const LandingPage: React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
> = React.forwardRef(
  (
    props: React.PropsWithChildren<React.RefAttributes<HTMLDivElement>>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const classes = useStyles();
    return (
      <StaticQuery
        query={query}
        render={(data) => (
          <Container className={classes.root} ref={ref}>
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
                />
              </Grid>
              <Grid item>
                <IconButton href={'https://github.com/namiwa'}>
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href={'https://www.linkedin.com/in/khairul-iman-185a41192/'}
                >
                  <LinkedInIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography align="center" variant="h6">
                  A final year computer engineering undergraduate from National
                  University of Singapore. My interests lies in building
                  software, taking a hands-on approach to do so.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        )}
      />
    );
  },
);

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
