import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

const defaultTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  spacing: 2,
});

const customTheme = responsiveFontSizes(defaultTheme);

export default customTheme;
