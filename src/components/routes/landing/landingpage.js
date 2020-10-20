import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Resume from "../../../docs/Khairul_Iman_NOC_Resume.pdf";
import { ROOT_URL } from "../../constants";
import BACKGROUND_IMAGE from "../../../img/ocean.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
  },
  resumeLink: {
    textDecoration: "none",
  },
  background: {
    backgroundImage: `url(${BACKGROUND_IMAGE})`,
  },
}));

/**
 * Main Landing page component for website.
 * Note that resume link routes back to the ROOT_URL.
 */
export const LandingPage = () => {
  const classes = useStyles();
  const onResumeClick = () => {
    window.open(Resume);
  };

  return (
    <Container className={classes.root}>
      <Typography align="center" variant="h1">
        Hi there, I'm Khairul Iman.
      </Typography>
      <br />
      <Typography align="center" variant="h5">
        I'm currently a computer engineering undergraduate at the
        National University of Singapore.
      </Typography>
    </Container>
  );
};

export default LandingPage;
