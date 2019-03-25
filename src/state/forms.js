import { Field } from '../utils/field';

const initialState = {
  offer: new Field(null),
  subscribe: new Field(null),
  support: new Field(null),
};

export function forms(state = initialState, action) {
  switch (action.type) {
    case 'SUBSCRIBE_FORM_SUBMIT':
      return {
        ...state,
        subscribe: action.payload,
      };

    case 'OFFER_FORM_SUBMIT':
      return {
        ...state,
        subscribe: action.payload,
      };

    case 'SUPPORT_FORM_SUBMIT':
      return {
        ...state,
        subscribe: action.payload,
      };

    default:
      return state;
  }
}
