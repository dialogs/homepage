const initialState = {
  isOfferModalOpen: false,
};

export function modals(state = initialState, action) {
  switch (action.type) {
    case 'OFFER_MODAL/OPEN':
      return {
        ...state,
        isOfferModalOpen: true,
      };

    case 'OFFER_MODAL/CLOSE':
      return {
        ...state,
        isOfferModalOpen: false,
      };

    default:
      return state;
  }
}
