import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import BlogsList from '../components/bloglist/blogslist';
import theme from '../theme';

const SimpleIndex = () => {
  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BlogsList />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default SimpleIndex;
