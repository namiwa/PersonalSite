import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const Competitions = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} ref={ref}>
      <Typography align="center" variant="h4">
        Competitions
      </Typography>
      <Typography align="center" variant="h5">
        Here are some links to past competitions which I have taken part in!
      </Typography>
    </Container>
  );
});

export default Competitions;
