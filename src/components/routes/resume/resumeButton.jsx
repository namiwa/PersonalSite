import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Resume from '../../../docs/Khairul_Iman_NOC_Resume.pdf';

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    backgroundColor: 'black',
    color: 'white',
    marginRight: theme.spacing(2),
  },
}));

export const ResumeButton = () => {
  const classes = useStyles();
  const onResumeClick = () => {
    window.open(Resume);
  };
  return (
    <Button onClick={onResumeClick} className={classes.buttonRoot}>
      RESUME
    </Button>
  );
};

export default ResumeButton;
