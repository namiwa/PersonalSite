import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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
  const { nameArray, refsArray } = props;
  return (
    <AppBar
      classes={{
        colorPrimary: classes.navbarRoot,
      }}
    >
      <Toolbar>
        <div className={classes.buttonAlign}>
          {refsArray.map((val, ind) => {
            return (
              <JumpButton ref={val} key={val + ind} children={nameArray[ind]} />
            );
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
