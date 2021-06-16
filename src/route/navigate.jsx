import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { OrderPage, LoginPage, Dashboard, History } from 'pages';

const Navigate = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/history" component={History} />
    <Route path="/order" component={OrderPage} />
  </Switch>
);

export default Navigate;
