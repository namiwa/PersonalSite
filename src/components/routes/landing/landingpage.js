import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import MovingText from './movingText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    offset: theme.mixins.toolbar,
    marginTop: 60,
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
    <Container className={classes.root} ref={ref}>
      <MovingText>I'm Khairul Iman</MovingText>
      <CardContent>
        <Typography align="center" variant="h5">
          I'm currently a Year 3 computer engineering undergraduate at the
          National University of Singapore.
        </Typography>
        <br />
        <Typography align="center" variant="h5">
          My interests lies in learning more about both software & hardware
          while taking a hands-on approach to do so.
        </Typography>
      </CardContent>
    </Container>
  );
});

export default LandingPage;
