import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

const LinkButton: React.FC<LinkButtonProps> = (props: LinkButtonProps) => {
  const classes = useStyles();
  const { reference, title } = props;
  return (
    <Button className={classes.buttonRoot}>
      <Link to={reference} className={classes.link}>
        {title}
      </Link>
    </Button>
  );
};

LinkButton.propTypes = {
  reference: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LinkButton;
