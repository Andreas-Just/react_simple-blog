import React from 'react';
import { Provider } from 'react-redux';
import store from './store/createStore';
import Main from './component/Main/Main';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import './App.scss'

export const App = () => (
  <Provider store={store}>
    <div className='app container-fluid d-flex flex-column'>
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);
