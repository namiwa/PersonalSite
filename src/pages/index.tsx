import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

import { ButtonAppBar } from '../components/layout';
import customTheme from '../theme';
import LandingPage from '../components/routes/landing';

const IndexPage = () => {
  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <ButtonAppBar />
        <LandingPage />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
