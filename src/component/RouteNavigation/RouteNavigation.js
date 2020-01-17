import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Posts from '../Posts/Posts';
import AddPost from '../AddPost/AddPost';

const RouteNavigation = (props) => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path='/home' component={Home} />
    <Route path='/posts' component={Posts} />
    <Route path='/add' component={AddPost} />
    <Route />
    <Route />
  </Switch>
);

export default RouteNavigation;