import * as React from 'react';
import { ThemeProvider } from '@mui/styles';

import ButtonAppBar from '../components/layout/appbar';
import BlogsList from '../components/bloglist/blogslist';
import customTheme from '../theme';

const BlogsListPage = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <ButtonAppBar />
        <BlogsList />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default BlogsListPage;
