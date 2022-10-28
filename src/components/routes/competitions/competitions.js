import React from 'react';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const PREFIX = 'Competitions';

const classes = {
  root: `${PREFIX}-root`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
}));

export const Competitions = React.forwardRef((props, ref) => {
  return (
    <StyledContainer className={classes.root} ref={ref}>
      <Typography align="center" variant="h4">
        Competitions
      </Typography>
      <Typography align="center" variant="h5">
        Here are some links to past competitions which I have taken part in!
      </Typography>
    </StyledContainer>
  );
});

export default Competitions;
