import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PREFIX = 'NotFound';

const classes = {
  root: `${PREFIX}-root`,
};

const StyledContainer = styled(Container)(() => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
    marginTop: 60,
  },
}));

const NotFound = () => {
  return (
    <StyledContainer className={classes.root}>
      <Typography align="center" variant="h3">
        Sorry, the page is not found!
      </Typography>
    </StyledContainer>
  );
};

export default NotFound;
