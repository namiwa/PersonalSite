import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

const defaultTheme = createMuiTheme({
  spacing: 2,
});

const customTheme = responsiveFontSizes(defaultTheme);

export default customTheme;
