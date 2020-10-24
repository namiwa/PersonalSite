import React from 'react';
import Typography from '@material-ui/core/Typography';

/**
 * Text printing function for landing page
 * Key insight is using an unbreaking space char unicode 160
 * @param {React Props} props children ms
 */
export const MovingText = (props) => {
  const [currentText, setCurrentText] = React.useState({
    display: String.fromCharCode(160),
    len: -1,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      var current = currentText.display;
      var currLen = currentText.len;
      if (currLen < props.children.length - 1) {
        setCurrentText({
          display: current + props.children[currLen + 1],
          len: currLen + 1,
        });
      } else {
        setCurrentText({
          display: String.fromCharCode(160),
          len: -1,
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentText.display, currentText.len, props.children]);

  const isChildrenString = typeof props.children === 'string';
  if (isChildrenString) {
    return (
      <Typography align="center" variant="h2">
        {currentText.display}
      </Typography>
    );
  } else {
    return <></>;
  }
};

export default MovingText;
