import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: window.innerHeight,
  },
}));

export const Projects = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} ref={ref}>
      <Typography align="center" variant="h4">
        Projects
      </Typography>
      <Typography align="center" variant="h5">
        Here are some projects which I have worked on!
      </Typography>
    </Container>
  );
});

export default Projects;
