import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../layout/navbar';
import LandingPage from '../routes/landing';
import Competitions from '../routes/competitions';
import Projects from '../routes/projects';
import NotFound from '../routes/error/notFound';

import './App.css';

const App = () => {
  const landingRefs = React.useRef(null);
  const competitionsRefs = React.useRef(null);
  const projectsRefs = React.useRef(null);
  const notFoundRefs = React.useRef(null);

  const refsArray = [landingRefs, competitionsRefs, projectsRefs, notFoundRefs];

  return (
    <Container>
      <NavBar refsArray={refsArray} />
      <LandingPage ref={landingRefs} />
      <Competitions ref={competitionsRefs} />
      <Projects ref={projectsRefs} />
      <NotFound ref={notFoundRefs} />
    </Container>
  );
};

export default App;
