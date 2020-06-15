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
        <Typography align="center" variant="h3">
          Hi there!
        </Typography>
      </Container>
    </div>
  );
};

export default LandingPage;
