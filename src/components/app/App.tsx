import * as React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import ButtonAppBar from '../layout/appbar';
import LandingPage from '../routes/landing';
import customTheme from '../../theme';

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <ButtonAppBar />
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
