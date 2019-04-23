import axios from 'axios';

import { Field } from '../utils/field';

function handleResponse({ data }) {
  console.log('handleResponse', { data });
  return new Promise((resolve, reject) => {
    if (data.status === 500) {
      reject(data);
    } else {
      resolve(data);
    }
  });
}

function sendAnal(form) {
  if (typeof window !== 'undefined') {
    try {
      if (window.ga && window.yaCounter) {
        // Send events to google analytics and Yandex.Metrika
        if (form.form !== 'support') {
          window.yaCounter.reachGoal('submit_form');
          window.ga('dlg.send', 'event', 'submit', 'form', 'form_send');
        }

        switch (form.form) {
          //   case 'Sales':
          //     ga('dlg.send', 'event', 'submit', 'form', 'block');
          //     yaCounter.reachGoal('submit_form_block');
          //     if (data.PAGE === 'index') {
          //       ga('dlg.send', 'event', 'submit', 'form', 'block_main');
          //       yaCounter.reachGoal('submit_form_block_main');
          //     } else if (data.PAGE === 'developers') {
          //       ga('dlg.send', 'event', 'submit', 'form', 'block_sdk');
          //       yaCounter.reachGoal('submit_form_block_sdk');
          //     } else {
          //       ga('dlg.send', 'event', 'submit', 'form', `block_${data.PAGE}`);
          //       yaCounter.reachGoal(`submit_form_block_${data.PAGE}`);
          //     }
          //     break;
          //   case 'Partner':
          //     ga('dlg.send', 'event', 'submit', 'form', 'partners');
          //     yaCounter.reachGoal('submit_form_block_partners');
          //     break;
          case 'support':
            break;
          case 'offer':
            if (form.flag === 'sales') {
              window.ga('dlg.send', 'event', 'submit', 'form', 'block');
              window.yaCounter.reachGoal('submit_form_block');
            } else {
              // flag === 'popup'
              window.ga('dlg.send', 'event', 'submit', 'form', 'popup');
              window.yaCounter.reachGoal('submit_form_block_popup');
            }
            break;
          case 'subscribe':
            window.ga('dlg.send', 'event', 'submit', 'form', 'blog');
            window.yaCounter.reachGoal('submit_form_block_blog');
            break;
          default:
        }
      }

      // if (fbq) {
      //   fbq('track', 'SubmitApplication');
      // }
    } catch (error) {
      console.warn('Sending events failed.', error);
    }
  }

  return Promise.resolve();
}

function submitFormAsync(form, endpoint) {
  console.log('submitFormAsync', { form, endpoint });
  return axios.post(endpoint, form).then(handleResponse);
}

function addInfoToForm(form) {
  const data = {};

  // add gacid
  let match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
  let raw = match ? decodeURIComponent(match[1]) : null;

  match = raw.match(/(\d+\.\d+)$/);
  let gacid = match ? match[1] : null;
  data.GACID = gacid;

  // return new Promise((resolve, reject) => {
  //   resolve({ ...form, data });
  // });

  return { ...form, data };
}

export function submitOfferForm(form) {
  return (dispatch) => {
    Field.dispatch({
      dispatch,
      type: 'OFFER_FORM_SUBMIT',
      context: {},
      action: submitFormAsync(addInfoToForm(form), '/api/v1/offer').then(() =>
        sendAnal(form),
      ),
      initialState: null,
    });
  };
}

export function submitSubscribeForm(form) {
  return (dispatch) => {
    Field.dispatch({
      dispatch,
      type: 'SUBSCRIBE_FORM_SUBMIT',
      context: {},
      action: addInfoToForm().then((data) =>
        submitFormAsync(data, form, '/api/v1/subscribe'),
      ),
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
      action: addInfoToForm().then((data) =>
        submitFormAsync(data, form, '/api/v1/support'),
      ),
      initialState: null,
    });
  };
}
