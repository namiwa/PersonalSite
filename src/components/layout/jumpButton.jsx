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

/**
 * Main ref jump button in the navbar.
 * Would need 1 ref and 1 children prop
 */
const JumpButton = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [title, setTitle] = React.useState(props.children);
  React.useEffect(() => {
    setTitle(props.children);
  }, [props.children]);
  return (
    <Button onClick={() => scrollToRef(ref)} className={classes.buttonRoot}>
      {title}
    </Button>
  );
});

export default JumpButton;
