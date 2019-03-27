import { combineReducers } from 'redux';

import { app } from './app';
import { modals } from './modals';
import { forms } from './forms';

export function createRootReducer() {
  return combineReducers({
    app,
    modals,
    forms,
  });
}
