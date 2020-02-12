import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// utils
import inject from '../utils/inject';
// views
import HomePage from './HomePage';

const App = inject(() => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
});

export default App;
