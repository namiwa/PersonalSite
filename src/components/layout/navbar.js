import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import LinkButton from "../layout/linkButton";

import HideOnScroll from "./hideonscroll";
import Resume from "../../docs/Khairul_Iman_NOC_Resume.pdf";
import { ROOT_URL, BLOGS_URL, PROJECTS_URL } from "../constants";

const useStyles = makeStyles((theme) => ({
  buttonAlign: {
    flexGrow: 1,
    textAlign: "center",
  },
  navbarRoot: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  buttonRoot: {
    backgroundColor: "black",
    color: "white",
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    color: "black",
  },
}));

export const NavBar = (props) => {
  const classes = useStyles();
  const onResumeClick = () => {
    window.open(Resume);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar
        classes={{
          colorPrimary: classes.navbarRoot,
        }}
      >
        <Toolbar>
          <div className={classes.buttonAlign}>
            <LinkButton reference={ROOT_URL} title="HOME" />
            <Button onClick={onResumeClick} className={classes.buttonRoot}>
              RESUME
            </Button>
            <LinkButton reference={PROJECTS_URL} title="PROJECTS" />
            <LinkButton reference={BLOGS_URL} title="COMPETITIONS" />
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
