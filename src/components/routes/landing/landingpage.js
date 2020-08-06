import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
  },
}));

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography align="center" variant="h1">
          Hi there
        </Typography>
        <br />
        <Typography align="center" variant="h5">
          I'm Iman, a current computer engineering undergraduate at the National University of Singapore.
          Do watch out this space for more updates on the projects I'm currently working on!
        </Typography>
      </Container>
    </div>
  );
};

export default LandingPage;
