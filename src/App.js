import React from 'react';
import { Provider } from 'react-redux';
import store from './store/createStore';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import './App.scss'
import RouteNavigation from './component/RouteNavigation/RouteNavigation';

export const App = () => (
  <Provider store={store}>
    <div className='app container-fluid d-flex flex-column'>
      <Header />
      <main className='row'>
        <RouteNavigation />
      </main>
      <Footer />
    </div>
  </Provider>
);
