import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import HomePage from './HomePage';


function App() {
  return (
    <Fragment>

      <Router>
        <Switch> 
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/" component={LoginPage} />
        </Switch>

      </Router>
    </Fragment>
  );
}

export default App;
