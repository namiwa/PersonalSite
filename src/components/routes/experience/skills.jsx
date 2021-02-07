import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ValueAxis,
  ArgumentAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const styles = (theme) => ({
  root: {},
});

const data = [
  { language: 'Python', farmiliarity: 7 },
  { language: 'JavaScript', farmiliarity: 8 },
  { language: 'Java', farmiliarity: 6 },
  { language: 'C/C++', farmiliarity: 6 },
  { language: 'Git', farmiliarity: 7 },
  { language: 'React', farmiliarity: 7 },
  { language: 'Linux OS', farmiliarity: 7 },
];

export class Skills extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  render() {
    const { forwardedRef, ...rest } = this.props;
    const { data: chartData } = this.state;

    return (
      <Paper ref={forwardedRef} {...rest}>
        <Typography variant="h4" align="center">
          {String.fromCharCode(160)}
        </Typography>
        <Typography variant="h4" align="center">
          Skills
        </Typography>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={10} showGrid={false} showTicks={true} />
          <BarSeries
            valueField="farmiliarity"
            argumentField="language"
            color={'#000000'}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default withStyles(styles)(Skills);
