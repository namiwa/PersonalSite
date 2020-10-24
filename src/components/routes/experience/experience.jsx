import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: window.innerWidth * 0.5,
    justifyContent: 'center',
  },
});

const Experience = (props) => {
  const classes = useStyles();
  const { children, direction, title, to, from, where } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  return (
    <Slide appear={false} direction={direction} in={trigger}>
      <Card classes={{ root: classes.root }}>
        <CardHeader title={where} subheader={`${title}, ${from} - ${to}`} />
        <Divider />
        <CardContent>
          <Typography variant="body1">{children}</Typography>
        </CardContent>
      </Card>
    </Slide>
  );
};

Experience.prototype = {
  direction: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  from: PropTypes.string,
  where: PropTypes.string,
};

export default Experience;
