import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import Projects from '../components/routes/projects';
import customTheme from '../theme';

const ProjectPage = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Projects />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default ProjectPage;
