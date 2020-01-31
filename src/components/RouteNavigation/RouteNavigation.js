import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import PostsContainer from '../Posts/PostsContainer';
import AddPost from '../AddPost/AddPost';
import EditPost from '../EditPost/EditPost';

const RouteNavigation = () => (
  <Switch>
    <Redirect exact from='/' to='/home' />
    <Route path='/home' component={Home} />
    <Route path='/posts' component={PostsContainer} />
    <Route path='/add' component={AddPost} />
    <Route path='/edit/:id' component={EditPost} item />
  </Switch>
);

export default RouteNavigation;