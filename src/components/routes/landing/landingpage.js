import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ocean from "../../../img/ocean.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${Ocean})`,
  },
}));

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={Ocean} alt="ocean" />
    </div>
  );
};

export default LandingPage;
