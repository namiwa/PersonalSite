import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { openLinkInNewTab } from '../../utils';

import namiwa from '../../../images/namiwa.jpeg';
import MovingText from './movingText';

const roundStyle: React.CSSProperties = {
  borderRadius: '50%',
};

const headerText = "Hi there, I'm Khairul Iman!";

const LandingPageContent = () => (
  <Container>
    <br />
    <MovingText text={headerText} speedms={150} />
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
              onClick={() => openLinkInNewTab('https://linkedin.com/in/namiwa')}
              size="large"
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Typography align="center" variant="h6">
          A recent Computer Engineering graduate from the National University of
          Singapore. My interests lies in building cool things using technology,
          taking a hands on approach to do so.
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

/**
 * Main Landing page component for website.
 * Note that resume link routes back to the ROOT_URL.
 */
const LandingPage = () => (
  <Box>
    <Card>
      <CardContent>
        <LandingPageContent />
      </CardContent>
    </Card>
  </Box>
);

export default LandingPage;
