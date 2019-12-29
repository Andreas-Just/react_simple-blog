import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { getNextState } from './store/reducers';
import TestHandler from './component/Test/TestHandler';

const store = createStore(getNextState);

export const App = () => (
  <Provider store={store}>
    <TestHandler />
  </Provider>
);
