import * as React from 'react';
import { styled } from '@mui/material/styles';
import * as PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
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
