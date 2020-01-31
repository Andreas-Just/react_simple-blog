import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';

export const App = () => (
  <Provider store={store}>
    <div className='app container-fluid d-flex flex-column'>
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);
