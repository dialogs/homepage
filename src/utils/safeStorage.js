function checkLocalStorage() {
  const key = '__test__';

  try {
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

export const isSupported = checkLocalStorage();

export const safeStorage = {
  set(key, value) {
    if (isSupported) {
      localStorage.setItem(key, value);
    }
  },
  get(key, defaultValue) {
    if (isSupported) {
      return localStorage.getItem(key) || defaultValue;
    }

    return defaultValue;
  },
};
