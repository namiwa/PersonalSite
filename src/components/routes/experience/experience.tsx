import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

type ExperienceProps = {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  title: string;
  to: string;
  from: string;
  where: string;
};

const Experience = (props: ExperienceProps) => {
  const { children, direction, title, to, from, where } = props;
  return (
    <Slide appear={false} direction={direction} in={true}>
      <Card>
        <CardHeader title={where} subheader={`${title}, ${from} - ${to}`} />
        <CardContent>
          <Typography variant="body1">{children}</Typography>
        </CardContent>
      </Card>
    </Slide>
  );
};

export default Experience;
