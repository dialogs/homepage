import { combineReducers } from 'redux';

import { app } from './app';
import { modals } from './modals';

export function createRootReducer() {
  return combineReducers({
    app,
    modals,
  });
}
