import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { OrderPage, LoginPage, Dashboard, History, Guest, CreateOrder, ArticleList, DetailArticle, SalePage } from 'pages';

const Navigate = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/history" component={History} />
    <Route path="/guest" component={Guest} />
    <Route path="/sale" component={SalePage} />
    <Route exact path="/articles" component={ArticleList} />
    <Route path="/articles/detail/:id" component={DetailArticle} />
    <Route exact path="/order" component={OrderPage} />
    <Route path="/order/create" component={CreateOrder} />
    <Route path="*" component={() => <h1>404</h1>} />
  </Switch>
);

export default Navigate;
