import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Resume from "../../../docs/Update_Resume_June_2_2020.pdf";
import { ROOT_URL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
  },
}));

export const LandingPage = () => {
  const classes = useStyles();
  const onResumeClick = () => {
    window.open(Resume);
  };

  return (
    <Container className={classes.root}>
      <Typography align="center" variant="h1">
        Hi there
      </Typography>
      <br />
      <Typography align="center" variant="h5">
        I'm Iman, a current computer engineering undergraduate at the National
        University of Singapore. Do watch out this space for more updates on the
        projects I'm currently working on!
      </Typography>
      <br />
      <Typography align="center" variant="h5">
        Here's my{" "}
        <Link onClick={onResumeClick} to={ROOT_URL}>
          resume
        </Link>
        !
      </Typography>
    </Container>
  );
};

export default LandingPage;
