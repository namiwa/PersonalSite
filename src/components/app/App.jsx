import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core';

import NavBar from '../layout/navbar';
import LandingPage from '../routes/landing';
import Experience from '../routes/experience';
import Projects from '../routes/projects';

const defaultTheme = createMuiTheme();
const extendedTheme = responsiveFontSizes(defaultTheme);

const App = () => {
  const landingRefs = React.useRef(null);
  const projectsRefs = React.useRef(null);
  const experienceRefs = React.useRef(null);

  const refsArray = [landingRefs, experienceRefs, projectsRefs];
  const nameArray = ['ABOUT', 'EXPERIENCE', 'PROJECTS'];

  return (
    <div className="App">
      <ThemeProvider theme={extendedTheme}>
        <NavBar refsArray={refsArray} nameArray={nameArray} />
        <LandingPage ref={landingRefs} />
        <Experience ref={experienceRefs} />
        <Projects ref={projectsRefs} />
      </ThemeProvider>
    </div>
  );
};

export default App;
