import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Experience from './experience';
import ResumeButton from '../resume';

const PREFIX = 'WorkExperience';

const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {},
}));

const WorkExperience = React.forwardRef(
  (props: any, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <Root className={classes.root} ref={ref}>
        <Container>
          <Typography align="center" variant="h4">
            Work Experience
          </Typography>
          <Typography align="center" variant="h4">
            {String.fromCharCode(160)}
          </Typography>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <ResumeButton>RESUME</ResumeButton>
            </Grid>
          </Grid>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {' '}
                <Experience
                  where="NUS Information Technology"
                  from="Sep 2020"
                  to="Oct 2020"
                  title="Part-Time IoT Intern"
                >
                  Building on the Summer Internship project, adding on more
                  testing & Single-Sign-On Login.
                </Experience>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {' '}
                <Experience
                  direction={'right'}
                  where="National University of Singapore"
                  from="Aug 2020"
                  to="Dec 2020"
                  title="Lab Teaching Assistant"
                >
                  Assisting module co-ordinating in conducting lessons & admin
                  prepration for lab sessions for undergraduate module CG2271,
                  Real-Time Operating Systems.
                </Experience>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {' '}
                <Experience
                  direction={'left'}
                  where="NUS Information Technology"
                  from="May 2020"
                  to="July 2020"
                  title="Full-Time IoT Intern"
                >
                  Taking part in NUS IT's remote Summer Internship, working on a
                  Automated IoT Portal Project.
                </Experience>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {' '}
                <Experience
                  direction={'right'}
                  where="NUS Information Technology"
                  from="Feb 2020"
                  to="Apr 2020"
                  title="Part-Time IoT Intern"
                >
                  Building on the Winter Project, worked to improve the
                  dashboard implementation & began testing for Radius service
                  checks.
                </Experience>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {' '}
                <Experience
                  direction={'left'}
                  where="NUS Information Technology"
                  from="Dec 2019"
                  to="Jan 2020"
                  title="Full-Time IoT Intern"
                >
                  Under NUS IT's Winter Internship programme, worked on creating
                  prototype Wi-Fi health sensors using Raspberry Pi &
                  implementing a frontend control dashboard.
                </Experience>{' '}
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          <Typography align="center" variant="h4">
            {String.fromCharCode(160)}
          </Typography>
          <Typography align="center" variant="h4">
            {String.fromCharCode(160)}
          </Typography>
          <Typography align="center" variant="h4">
            Education
          </Typography>
          <Typography align="center" variant="h4">
            {String.fromCharCode(160)}
          </Typography>
          <Grid container direction="column" alignItems="stretch" spacing={2}>
            <Grid item>
              <Experience
                direction={'up'}
                where="Computer Engineering with Second Major in Innovation & Design"
                from="Aug 2018"
                to="Expected May 2022"
                title="National University of Singapore"
              >
                Majoring in Computer Engineering, being exposed to both software
                and hardware systems.
                <br />
                Pursuing Second Major in Innovation & Design, with focus areas
                in satellite data and its application to renewable energy
                research.
              </Experience>
            </Grid>
          </Grid>
          <Typography align="center" variant="h4">
            {String.fromCharCode(160)}
          </Typography>
          <Typography align="center" variant="h4">
            {String.fromCharCode(160)}
          </Typography>
        </Container>
      </Root>
    );
  },
);

export default WorkExperience;
