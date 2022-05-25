import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const defaultTheme = createTheme({
  spacing: 2,
});

const customTheme = responsiveFontSizes(defaultTheme);

export default customTheme;
