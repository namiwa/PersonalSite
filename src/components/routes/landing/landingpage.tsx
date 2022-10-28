import * as React from 'react';
import { Container, Typography, IconButton, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { StaticImage } from 'gatsby-plugin-image';
import { openLinkInNewTab } from '../../utils';

import namiwa from '../../../images/namiwa.jpg';

const roundStyle = {
  borderRadius: '50%',
};

/**
 * Main Landing page component for website.
 * Note that resume link routes back to the ROOT_URL.
 */
export const LandingPage = () => (
  <Container>
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
        <StaticImage
          image={namiwa}
          alt={'namiwa-image'}
          loading="eager"
          style={roundStyle}
        />
      </Grid>
      <Grid item>
        <IconButton
          onClick={() => openLinkInNewTab('https://github.com/namiwa')}
          size="large"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          onClick={() => openLinkInNewTab('https://linkedin.com/in/namiwa')}
          size="large"
        >
          <LinkedInIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography align="center" variant="h6">
          A recent Computer Engineering graduate from the National University of
          Singapore. My interests lies in building cool things using technology,
          taking a hands on approach to do so.
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default LandingPage;
