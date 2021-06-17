import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { OrderPage, LoginPage, Dashboard, History, Guest } from 'pages';

const Navigate = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/history" component={History} />
    <Route path="/guest" component={Guest} />
    <Route path="/order" component={OrderPage} />
    <Route path="*" component={() => <h1>404</h1>} />
  </Switch>
);

export default Navigate;
