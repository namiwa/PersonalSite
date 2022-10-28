import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
