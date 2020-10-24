import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROOT_URL } from '../constants';
import App from './App';
import NotFound from '../routes/error';

const RoutedApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROOT_URL} component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RoutedApp;
