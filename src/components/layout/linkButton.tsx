import * as React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonRoot: {
      backgroundColor: 'black',
      color: 'white',
      marginRight: theme.spacing(2),
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
  }),
);

interface LinkButtonProps {
  reference: string;
  title: string;
}

const LinkButton = (props: LinkButtonProps) => {
  const classes = useStyles();
  const { reference, title } = props;
  const onClick = () => {
    if (!window) {
      return;
    }
    return window.open(reference);
  };
  return (
    <Button className={classes.buttonRoot} onClick={onClick}>
      <a
        href={reference}
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </Button>
  );
};

LinkButton.propTypes = {
  reference: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LinkButton;
