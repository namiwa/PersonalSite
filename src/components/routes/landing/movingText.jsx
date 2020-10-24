import React from 'react';
import Typography from '@material-ui/core/Typography';

export const MovingText = (props) => {
  const [currentText, setCurrentText] = React.useState({
    display: '',
    len: -1,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      var current = currentText.display;
      var currLen = currentText.len;
      if (currLen < props.children.length) {
        setCurrentText({
          display: current + props.children[currLen + 1],
          len: currLen + 1,
        });
      } else {
        setCurrentText({
          display: '',
          len: -1,
        });
      }
    }, 250);
    return () => clearInterval(interval);
  }, [currentText.display, currentText.len, props.children]);

  const isChildrenString = typeof props.children === 'string';
  if (isChildrenString) {
    return (
      <Typography align="center" variant="h1">
        {currentText.display}
      </Typography>
    );
  } else {
    return <></>;
  }
};

export default MovingText;
