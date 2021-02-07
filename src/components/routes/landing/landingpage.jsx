import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import MovingText from './movingText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    offset: theme.mixins.toolbar,
    minHeight: window.innerHeight,
  },
}));

/**
 * Main Landing page component for website.
 * Note that resume link routes back to the ROOT_URL.
 */
export const LandingPage = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={ref}>
      <Typography variant="h4" align="center">
        {String.fromCharCode(160)}
      </Typography>
      <Typography variant="h4" align="center">
        {String.fromCharCode(160)}
      </Typography>
      <Typography variant="h4" align="center">
        {String.fromCharCode(160)}
      </Typography>
      <MovingText>I'm Khairul Iman</MovingText>
      <Typography align="center" variant="h5">
        I'm currently a Year 3 computer engineering undergraduate at the
        National University of Singapore.
      </Typography>
      <br />
      <Typography align="center" variant="h5">
        My interests lies in learning more about both software & hardware while
        taking a hands-on approach to do so.
      </Typography>
      <Typography variant="h4" align="center">
        {String.fromCharCode(160)}
      </Typography>
      <Grid container justify="center">
        <Grid item>
          <IconButton href={'https://github.com/namiwa'}>
            <GitHubIcon />
            <Typography>GitHub</Typography>
          </IconButton>
          <IconButton
            href={'https://www.linkedin.com/in/khairul-iman-185a41192/'}
          >
            <LinkedInIcon />
            <Typography>LinkedIn</Typography>
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
});

export default LandingPage;
