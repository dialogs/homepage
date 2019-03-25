import { Field } from '../utils/field';

const initialState = {
  offer: new Field(null),
  subscribe: new Field(null),
  support: new Field(null),
};

export function forms(state = initialState, action) {
  switch (action.type) {
    case 'OFFER_FORM/CHANGE':
      return {
        state,
        offer: new Field(action.payload),
      };

    default:
      return state;
  }
}
