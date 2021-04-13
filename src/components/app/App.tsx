import * as React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core';

import ButtonAppBar from '../layout/appbar';
import LandingPage from '../routes/landing';

const defaultTheme = createMuiTheme();
const extendedTheme = responsiveFontSizes(defaultTheme);

const App = () => {
  return (
    <ThemeProvider theme={extendedTheme}>
      <ButtonAppBar />
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
