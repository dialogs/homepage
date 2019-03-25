import axios from 'axios';

import { Field } from '../utils/field';

export function submitSubscribeForm(form) {
  return (dispatch) => {
    const body = { ...form, form: 'subscribe' };

    Field.dispatch({
      dispatch,
      type: 'SUBSCRIBE_FORM_SUBMIT',
      context: {},
      action: axios.post('/api/v1/', body),
      initialState: null,
    });
  };
}

export function submitOfferForm(form) {
  return (dispatch) => {
    const body = { ...form, form: 'offer' };

    Field.dispatch({
      dispatch,
      type: 'OFFER_FORM_SUBMIT',
      context: {},
      action: axios.post('/api/v1/', body),
      initialState: null,
    });
  };
}

export function submitSupportForm(form) {
  return (dispatch) => {
    const body = { ...form, form: 'support' };

    Field.dispatch({
      dispatch,
      type: 'SUPPORT_FORM_SUBMIT',
      context: {},
      action: axios.post('/api/v1/', body),
      initialState: null,
    });
  };
}
