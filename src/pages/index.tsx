import * as React from 'react';
import { ThemeProvider } from '@mui/styles';

import ButtonAppBar from '../components/layout/appbar';
import customTheme from '../theme';
import LandingPage from '../components/routes/landing';

const IndexPage = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <ButtonAppBar />
        <LandingPage />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
