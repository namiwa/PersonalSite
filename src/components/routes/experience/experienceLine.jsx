import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import Experience from './experience';
import ResumeButton from '../resume';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: window.innerHeight,
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const WorkExperience = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Container ref={ref} className={classes.root}>
      <Typography align="center" variant="h4">
        Work Experience
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <Experience
            direction={'left'}
            where="National University of Singapore"
            from="Aug 2020"
            to="Dec 2020"
            title="Lab Teaching Assistant"
          >
            Assisting module co-ordinating in conducting lessons & admin
            prepration for lab sessions for undergraduate module CG2271,
            Real-Time Operating Systems.
          </Experience>
        </Grid>
        <Grid item>
          <Experience
            direction={'right'}
            where="NUS Information Technology"
            from="Aug 2020"
            to="Oct 2020"
            title="Part-Time IoT Intern"
          >
            Building on the Summer Internship project, adding on more testing &
            Single-Sign-On Login.
          </Experience>
        </Grid>
      </Grid>
      <ResumeButton />
      {/** Missing education */}
    </Container>
  );
});

export default WorkExperience;
