const initialState = {
  isMobileMenuOpen: false,
};

export function app(state = initialState, action) {
  switch (action.type) {
    case 'MOBILE_MENU/OPEN':
      return {
        ...state,
        isMobileMenuOpen: true,
      };

    case 'MOBILE_MENU/CLOSE':
      return {
        ...state,
        isMobileMenuOpen: false,
      };

    default:
      return state;
  }
}
