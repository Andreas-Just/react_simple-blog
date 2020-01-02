import { createStore, compose, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { getNextState } from './reducers';
import * as axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */


const client = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
  responseType: 'json',
});
const configureStore = () => (
  createStore(
    getNextState,
    composeEnhancers(applyMiddleware(axiosMiddleware(client))),
  )
);

const store = configureStore();

export default store;