import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

export const ResumeButton = () => {
  const classes = useStyles();
  const onResumeClick = () => {
    window.open(process.env.PUBLIC_URL + '/khairul.pdf');
  };
  return (
    <Button onClick={onResumeClick} classes={{ root: classes.root }}>
      <Typography variant="h5" align="center">
        View Resume
      </Typography>
    </Button>
  );
};

export default ResumeButton;