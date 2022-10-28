import * as React from 'react';
import { ThemeProvider } from '@mui/styles';

import Projects from '../components/routes/projects';
import customTheme from '../theme';
import { ButtonAppBar } from '../components/layout';

const ProjectPage = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <ButtonAppBar />
        <Projects />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default ProjectPage;
