import * as React from 'react';
import * as PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const PREFIX = 'LinkButton';

const classes = {
  buttonRoot: `${PREFIX}-buttonRoot`,
  link: `${PREFIX}-link`,
};

const StyledButton = styled(Button)(({ theme }) => ({
  [`&.${classes.buttonRoot}`]: {
    backgroundColor: 'black',
    color: 'white',
    marginRight: theme.spacing(2),
  },

  [`& .${classes.link}`]: {
    textDecoration: 'none',
    color: 'white',
  },
}));

interface LinkButtonProps {
  reference: string;
  title: string;
}

const LinkButton = (props: LinkButtonProps) => {
  const { reference, title } = props;

  return (
    <StyledButton className={classes.buttonRoot}>
      <a
        href={reference}
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </StyledButton>
  );
};

LinkButton.propTypes = {
  reference: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LinkButton;
