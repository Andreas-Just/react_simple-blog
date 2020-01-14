import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "../Home/Home";
import Posts from "../Posts/Posts";

const RouteNavigation = (props) => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path='/home' component={Home} />
    <Route path='/posts' component={Posts} />
    {/*<Route path='/project' component={ProjectHandler} />*/}
    <Route />
    <Route />
  </Switch>
);

export default RouteNavigation;