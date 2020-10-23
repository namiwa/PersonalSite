import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../layout/navbar";
import LandingPage from "../routes/landing";
import Blogs from "../routes/blog";
import Projects from "../routes/projects";
import { ROOT_URL, BLOGS_URL, PROJECTS_URL } from "../constants";

import "./App.css";
import NotFound from "../routes/error/notFound";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={ROOT_URL} component={LandingPage} />
          <Route path={BLOGS_URL} component={Blogs} />
          <Route path={PROJECTS_URL} component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
