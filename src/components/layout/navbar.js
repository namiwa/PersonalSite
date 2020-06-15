import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
    color: "white",
    boxShadow: "none",
  },
  buttonRoot: {
    backgroundColor: "white",
    color: "black",
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
          {" "}
          <Typography variant="h6" className={classes.title}>
            Khairul Iman
          </Typography>
          <div className={classes.buttonAlign}>
            {/** may need to combine button and link component */}
            <Button className={classes.buttonRoot}> Home </Button>
            <Button className={classes.buttonRoot}> Projects </Button>
            <Button className={classes.buttonRoot}> Blog </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
