import * as React from 'react';
import Typography from '@material-ui/core/Typography';

interface MovingTextProps {
  text: string;
  speedms: number;
}

/**
 * Text printing function for landing page
 * Key insight is using an unbreaking space char unicode 160
 * @param {MovingTextProps} props Display text & speed of re-writing in ms
 */
export const MovingText: React.FC<MovingTextProps> = (
  props: MovingTextProps,
) => {
  const startingText = String.fromCharCode(160);
  const [currentText, setCurrentText] = React.useState({
    display: startingText,
    len: -1,
  });

  const { text, speedms } = props;

  React.useEffect(() => {
    const interval = setInterval(() => {
      var current = currentText.display;
      var currLen = currentText.len;
      if (currLen < text.length - 1) {
        setCurrentText({
          display: current + text[currLen + 1],
          len: currLen + 1,
        });
      } else {
        setCurrentText({
          display: startingText,
          len: -1,
        });
      }
    }, speedms);
    return () => clearInterval(interval);
  }, [
    currentText.display,
    currentText.len,
    props.speedms,
    props.text,
    speedms,
    startingText,
    text,
  ]);

  if (speedms === 0) {
    return (
      <Typography align="center" variant="h3">
        {text}
      </Typography>
    );
  } else {
    return (
      <Typography align="center" variant="h3">
        {currentText.display}
      </Typography>
    );
  }
};

export default MovingText;
