import { createTheme, responsiveFontSizes } from '@mui/material';

const defaultTheme = createTheme({
  spacing: 2,
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#2196f3',
      light: '#6ec6ff',
      dark: '#0069c0',
    },
    secondary: {
      main: '#5c6bc0',
      light: '#8e99f3',
      dark: '#26418f',
    },
  },
});

const customTheme = responsiveFontSizes(defaultTheme);

export default customTheme;
