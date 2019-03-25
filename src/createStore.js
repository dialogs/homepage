import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import { createRootReducer } from './state/createRootReducer';

const initialState = {};
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export function createStore() {
  return reduxCreateStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}
