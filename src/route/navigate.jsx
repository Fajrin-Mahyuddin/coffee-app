import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { OrderPage, LoginPage, Dashboard } from 'pages';

const Navigate = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/order" component={OrderPage} />
  </Switch>
);

export default Navigate;
