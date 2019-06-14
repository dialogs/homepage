import { Field } from '../utils/field';

const initialState = {
  offer: new Field(null),
  subscribe: new Field(null),
  support: new Field(null),
  apply: new Field(null),
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
        offer: action.payload,
      };

    case 'SUPPORT_FORM_SUBMIT':
      return {
        ...state,
        support: action.payload,
      };
    case 'APPLICATION_FORM_SUBMIT':
      return {
        ...state,
        apply: action.payload,
      };

    default:
      return state;
  }
}
