import * as React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#3333AC',
  },
}));

interface StylessLinkProps {
  to: string;
  children: React.ReactNode;
}

const StylessLink: React.FC<StylessLinkProps> = (props) => {
  const { children, to } = props;
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'inherit',
        color: 'inherit',
      }}
    >
      {children}
    </Link>
  );
};

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <StylessLink to="/">
            <Button color="inherit">About</Button>
          </StylessLink>
          <StylessLink to="/project">
            <Button color="inherit">Projects</Button>
          </StylessLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}