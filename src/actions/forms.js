import axios from 'axios';

import { Field } from '../utils/field';

function getData({ data }) {
  return new Promise((resolve, reject) => {
    if (data.status === 500) {
      reject(data);
    } else {
      resolve(data);
    }
  });
}

export function submitSubscribeForm(form) {
  return (dispatch) => {
    Field.dispatch({
      dispatch,
      type: 'SUBSCRIBE_FORM_SUBMIT',
      context: {},
      action: axios.post('/api/v1/subscribe', form).then(getData),
      initialState: null,
    });
  };
}

export function submitOfferForm(form) {
  return (dispatch) => {
    Field.dispatch({
      dispatch,
      type: 'OFFER_FORM_SUBMIT',
      context: {},
      action: axios.post('/api/v1/offer', form).then(getData),
      initialState: null,
    });
  };
}

export function submitSupportForm(form) {
  return (dispatch) => {
    Field.dispatch({
      dispatch,
      type: 'SUPPORT_FORM_SUBMIT',
      context: {},
      action: axios.post('/api/v1/support', form).then(getData),
      initialState: null,
    });
  };
}
