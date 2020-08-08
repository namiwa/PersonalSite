import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LinkButton from "../layout/linkButton";

import { ROOT_URL, BLOGS_URL, PROJECTS_URL } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttonAlign: {
    flexGrow: 1,
    textAlign: "right",
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

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        classes={{
          colorPrimary: classes.navbarRoot,
        }}
      >
        <Toolbar>
          <div className={classes.buttonAlign}>
            <LinkButton reference={ROOT_URL} title="HOME" />
            <LinkButton reference={PROJECTS_URL} title="PROJECTS" />
            <LinkButton reference={BLOGS_URL} title="BLOG" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
