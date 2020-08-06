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

export const NotFound = () => {
  const classes = useStyles();

  return (
      <Container className={classes.root}>
        <Typography align="center" variant="h3">
          Sorry, the page is not found!
        </Typography>
      </Container>
  );
};

export default NotFound;