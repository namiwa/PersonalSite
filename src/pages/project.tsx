import * as React from 'react';
import { ThemeProvider } from '@mui/styles';

import Projects from '../components/routes/projects';
import customTheme from '../theme';

const ProjectPage = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <Projects />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default ProjectPage;
