import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import JumpButton from './jumpButton';
import HideOnScroll from './hideonscroll';

const PREFIX = 'NavBar';

const classes = {
  root: `${PREFIX}-root`,
  navbarRoot: `${PREFIX}-navbarRoot`,
};

const StyledHideOnScroll = styled(HideOnScroll)(({ theme }) => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },

  [`& .${classes.navbarRoot}`]: {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    color: 'white',
  },
}));

export const NavBar = (props: any) => {
  const { nameArray, refsArray } = props;
  return (
    <StyledHideOnScroll>
      <AppBar
        position="sticky"
        classes={{
          colorPrimary: classes.navbarRoot,
        }}
      >
        <Toolbar className={classes.root}>
          {refsArray.map((val: any, ind: number) => {
            return (
              <JumpButton ref={val} key={val + ind} name={nameArray[ind]} />
            );
          })}
        </Toolbar>
      </AppBar>
    </StyledHideOnScroll>
  );
};

export default NavBar;
