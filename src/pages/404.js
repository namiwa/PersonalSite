import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Error404Page = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="H2"> ERROR: PAGE NOT FOUND </Typography>{' '}
    </div>
  );
};

export default Error404Page;
