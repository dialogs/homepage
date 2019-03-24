import { createStore as reduxCreateStore } from 'redux';
import { createRootReducer } from './state/createRootReducer';

const initialState = {};

export function createStore() {
  const rootReducer = createRootReducer();
  const devTools =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : undefined;

  return reduxCreateStore(rootReducer, initialState, devTools);
}
