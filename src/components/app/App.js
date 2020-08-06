import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../layout/navbar";
import LandingPage from "../routes/landing";
import {
  ROOT_URL
} from '../constants';

const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route path={ROOT_URL} component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
