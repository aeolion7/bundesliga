import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger';
import axios from 'axios';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  )
);

export default store;
