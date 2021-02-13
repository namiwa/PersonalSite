import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import MovingText from './movingText';

const useStyles = makeStyles(({ mixins }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

/**
 * Main Landing page component for website.
 * Note that resume link routes back to the ROOT_URL.
 */
export const LandingPage: React.ForwardRefExoticComponent<React.RefAttributes<
  HTMLDivElement
>> = React.forwardRef(
  (
    props: React.PropsWithChildren<React.RefAttributes<HTMLDivElement>>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const classes = useStyles();

    return (
      <div className={classes.root} ref={ref}>
        <MovingText text="Hi, I'm Khairul Iman" speedms={0} />
        <Typography align="center" variant="h5">
          I'm currently a Year 3 computer engineering undergraduate at the
          National University of Singapore.
        </Typography>
        <br />
        <Typography align="center" variant="h5">
          My interests lies in learning more about both software & hardware
          while taking a hands-on approach to do so.
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
  },
);

export default LandingPage;
