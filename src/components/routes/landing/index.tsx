import * as React from 'react';
import { Container, Typography, IconButton, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { openLinkInNewTab } from '../../utils';

import namiwa from '../../../images/namiwa.jpg';
import MovingText from './movingText';

const roundStyle: React.CSSProperties = {
  borderRadius: '50%',
};

/**
 * Main Landing page component for website.
 * Note that resume link routes back to the ROOT_URL.
 */
const LandingPage = () => {
  return (
    <Container>
      <br />
      <MovingText text="Khairul Iman" speedms={300} />
      <br />
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <img
                src={namiwa}
                alt={'namiwa'}
                style={roundStyle}
                height={200}
                width={200}
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
                onClick={() =>
                  openLinkInNewTab('https://linkedin.com/in/namiwa')
                }
                size="large"
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Typography align="center" variant="h6">
            A recent Computer Engineering graduate from the National University
            of Singapore. My interests lies in building cool things using
            technology, taking a hands on approach to do so.
          </Typography>
          <br />
          <Typography align="center" variant="h6">
            All that's written on this site are my own opinions, and do not
            represent any organisations that I work for!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
