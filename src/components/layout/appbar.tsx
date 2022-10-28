import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import ResumeButton from '../routes/resume';
import { StylessLink } from '../utils';

const PREFIX = 'appbar';

const classes = {
  bar: `${PREFIX}-bar`,
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [`&.${classes.bar}`]: {
    zIndex: 0,
    alignItems: 'center',
    background: theme.palette.primary.light,
    maxWidth: '100%',
    margin: 0,
    border: 0,
    color: theme.palette.common.black,
  },
}));

export default function ButtonAppBar() {
  return (
    <StyledAppBar
      position={'fixed'}
      variant={'elevation'}
      className={classes.bar}
    >
      <Toolbar>
        <StylessLink to="/">
          <Button color="inherit">About</Button>
        </StylessLink>
        <StylessLink to="/project">
          <Button color="inherit">Projects</Button>
        </StylessLink>
        <StylessLink to="/blogs">
          <Button color="inherit">Blogs</Button>
        </StylessLink>
        <ResumeButton>Resume</ResumeButton>
      </Toolbar>
    </StyledAppBar>
  );
}
