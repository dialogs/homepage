import { createStore as reduxCreateStore } from 'redux';
import { createRootReducer } from './state/createRootReducer';

const initialState = {};

export function createStore() {
  const rootReducer = createRootReducer();

  return reduxCreateStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
