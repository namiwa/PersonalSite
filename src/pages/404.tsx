import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';
import * as React from 'react';
import theme from '../theme';

const Error404Page = () => {
  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Typography>Sorry, page not found!</Typography>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default Error404Page;
