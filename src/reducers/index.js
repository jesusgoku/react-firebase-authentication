import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import login from './login';

const reducers = combineReducers({
  login,
});

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ReduxThunk),
);

const store = createStore(
  reducers,
  initialState,
  enhancers,
);

export default store;
