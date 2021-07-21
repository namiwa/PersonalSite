import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import ButtonAppBar from '../components/layout/appbar';
import BlogsList from '../components/bloglist/blogslist';
import customTheme from '../theme';

const BlogsListPage = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <ButtonAppBar />
        <BlogsList />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default BlogsListPage;
