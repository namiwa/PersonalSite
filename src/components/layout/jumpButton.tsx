import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import scrollToRef from '../utils';

const PREFIX = 'JumpButton';

const classes = {
  buttonRoot: `${PREFIX}-buttonRoot`,
};

const StyledButton = styled(Button)(({ theme }) => ({
  [`&.${classes.buttonRoot}`]: {
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
  const [title, setTitle] = React.useState(props.name);
  React.useEffect(() => {
    setTitle(props.name);
  }, [props.name]);
  return (
    <StyledButton
      onClick={() => scrollToRef(ref as React.RefObject<HTMLDivElement>)}
      className={classes.buttonRoot}
    >
      {title}
    </StyledButton>
  );
});

export default JumpButton;
