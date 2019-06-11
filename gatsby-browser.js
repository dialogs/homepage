import { wrapWithRedux } from './src/wrapWithRedux';
import { safeStorage } from './src/utils/safeStorage';

export const wrapRootElement = wrapWithRedux;

export function onRouteUpdate({ location, prevLocation }) {
  // Set href
  const href = safeStorage.get('href');

  if (href) {
    safeStorage.set(
      'href',
      JSON.stringify([...JSON.parse(href), location.href]),
    );
  } else {
    safeStorage.set('href', JSON.stringify([location.href]));
  }
}
