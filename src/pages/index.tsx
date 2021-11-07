import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import ButtonAppBar from '../components/layout/appbar';
import customTheme from '../theme';
import LandingPage from '../components/routes/landing';

const IndexPage = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <ButtonAppBar />
        <LandingPage />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
