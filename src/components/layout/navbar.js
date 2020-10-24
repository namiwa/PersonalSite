import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HideOnScroll from './hideonscroll';
import JumpButton from './jumpButton';

const useStyles = makeStyles((theme) => ({
  buttonAlign: {
    flexGrow: 1,
    textAlign: 'center',
  },
  navbarRoot: {
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: 'black',
  },
}));

export const NavBar = (props) => {
  const classes = useStyles();

  return (
    <HideOnScroll {...props}>
      <AppBar
        classes={{
          colorPrimary: classes.navbarRoot,
        }}
      >
        <Toolbar>
          <div className={classes.buttonAlign}>
            {props.refsArray.map((val, ind) => {
              return (
                <JumpButton ref={val} key={val + ind}>
                  test
                </JumpButton>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
