import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import scrollToRef from '../utils';

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    backgroundColor: 'white',
    color: 'black',
    marginRight: theme.spacing(2),
  },
}));

const JumpButton = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Button onClick={() => scrollToRef(ref)} className={classes.buttonRoot}>
      {props ? props.children : 'test'}
    </Button>
  );
});

export default JumpButton;
