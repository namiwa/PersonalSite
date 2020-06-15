import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../layout/navbar";
import LandingPage from "../routes/landing";

const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
