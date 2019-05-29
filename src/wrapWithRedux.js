import React from 'react';
import { Provider } from 'react-redux';

import { createStore } from './createStore';

export function wrapWithRedux({ element }) {
  const store = createStore();

  return <Provider store={store}>{element}</Provider>;
}
