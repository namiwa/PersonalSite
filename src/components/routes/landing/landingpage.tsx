import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme: Theme) =>
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
      <Container className={classes.root} ref={ref}>
        <Typography align="center" variant="h3">
          {'Hi, I am Khairul Iman'}
        </Typography>
        <Typography align="center" variant="h5">
          Currently a Year 3 computer engineering undergraduate at the National
          University of Singapore.
        </Typography>
        <br />
        <Typography align="center" variant="h5">
          My interests lies in building software while taking a hands-on
          approach to do so.
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
      </Container>
    );
  },
);

export default LandingPage;
