import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import JumpButton from './jumpButton';
import HideOnScroll from './hideonscroll';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  navbarRoot: {
    backgroundColor: '#c8994d',
    boxShadow: 'none',
    color: 'white',
  },
}));

export const NavBar = (props) => {
  const classes = useStyles();
  const { nameArray, refsArray } = props;
  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        classes={{
          colorPrimary: classes.navbarRoot,
        }}
      >
        <Toolbar className={classes.root}>
          {refsArray.map((val, ind) => {
            return (
              <JumpButton ref={val} key={val + ind} children={nameArray[ind]} />
            );
          })}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
