import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import scrollToRef from '../utils';

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    backgroundColor: '#4284f5',
    color: 'black',
    marginRight: theme.spacing(2),
  },
}));

type JumpButtonProps = {
  name: string;
};

/**
 * Main ref jump button in the navbar.
 */
const JumpButton: React.ForwardRefExoticComponent<
  JumpButtonProps & React.RefAttributes<HTMLDivElement | null>
> = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [title, setTitle] = React.useState(props.name);
  React.useEffect(() => {
    setTitle(props.name);
  }, [props.name]);
  return (
    <Button
      onClick={() => scrollToRef(ref as React.RefObject<HTMLDivElement>)}
      className={classes.buttonRoot}
    >
      {title}
    </Button>
  );
});

export default JumpButton;
