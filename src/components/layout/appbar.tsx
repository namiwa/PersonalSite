import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import ResumeButton from '../routes/resume';
import { StylessLink } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    zIndex: 0,
    alignItems: 'center',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position={'relative'}
        variant={'outlined'}
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
      </AppBar>
    </div>
  );
}
