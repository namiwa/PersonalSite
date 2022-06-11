import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography, IconButton, Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { GatsbyImage } from 'gatsby-plugin-image';
import { openLinkInNewTab } from '../../utils';

const roundStyle = {
  borderRadius: '50%',
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
    maxWidth: '100%',
    border: 0,
  },
}));

export const query = graphql`
  query {
    file(extension: { eq: "jpg" }, name: { eq: "namiwa" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          height: 200
          width: 200
        )
      }
    }
  }
`;

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
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                alt={'namiwa-image'}
                loading="eager"
                style={roundStyle}
              />
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => openLinkInNewTab('https://github.com/namiwa')}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  openLinkInNewTab('https://linkedin.com/in/namiwa')
                }
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography align="center" variant="h6">
                A recent Computer Engineering graduate from the National
                University of Singapore. My interests lies in building cool
                things using technology, taking a hands on approach to do so.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      )}
    />
  );
};

export default LandingPage;
