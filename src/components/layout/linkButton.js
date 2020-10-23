import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    backgroundColor: 'black',
    color: 'white',
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const LinkButton = ({ reference, title }) => {
  const classes = useStyles();
  return (
    <Button className={classes.buttonRoot}>
      <Link to={reference} className={classes.link}>
        {title}
      </Link>
    </Button>
  );
};

LinkButton.propTypes = {
  reference: PropTypes.string,
  title: PropTypes.string,
};

export default LinkButton;
