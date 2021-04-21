import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import namiwa from '../../../images/namiwa.png';

const useStyles = makeStyles((theme: Theme) =>
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
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography align="center" variant="h3">
            Hi there, I'm Iman!
          </Typography>
          <Divider />
          <Grid item>
            <Typography align="center" variant="h5">
              A third year computer engineering undergraduate from the National
              University of Singapore. My interests lies in building interesting
              software, taking a hands-on approach to do so.
            </Typography>
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
          <Grid item alignItems="center">
            <img
              src={namiwa}
              alt={'cover_img'}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                margin: 'auto',
                display: 'block',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    );
  },
);

export default LandingPage;
