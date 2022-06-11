import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import ResumeButton from '../routes/resume';
import { StylessLink } from '../utils';

const useStyles = makeStyles((theme: Theme) => ({
  bar: {
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
  const classes = useStyles();

  return (
    <AppBar position={'fixed'} variant={'elevation'} className={classes.bar}>
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
    </AppBar>
  );
}
