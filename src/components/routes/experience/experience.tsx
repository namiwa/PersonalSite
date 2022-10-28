import * as React from 'react';
import { styled } from '@mui/material/styles';
import * as PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
const PREFIX = 'Experience';

const classes = {
  root: `${PREFIX}-root`
};

const StyledSlide = styled(Slide)({
  [`& .${classes.root}`]: {
    justifyContent: 'center',
  },
});

const Experience = (props: any) => {

  const { children, direction, title, to, from, where } = props;
  return (
    <StyledSlide appear={false} direction={direction} in={true}>
      <Card classes={{ root: classes.root }}>
        <CardHeader title={where} subheader={`${title}, ${from} - ${to}`} />
        <CardContent>
          <Typography variant="body1">{children}</Typography>
        </CardContent>
      </Card>
    </StyledSlide>
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
