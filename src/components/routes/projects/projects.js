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

export const Projects = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography align="center" variant="h3">
        Watch this space for write-ups on the projects which I took!
      </Typography>
    </Container>
  );
};

export default Projects;
