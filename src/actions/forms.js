import axios from 'axios';

import { Field } from '../utils/field';

function getGACID() {
  const cookie = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
  const raw = cookie ? decodeURIComponent(cookie[1]) : null;
  const match = raw.match(/(\d+\.\d+)$/);

  return match ? match[1] : null;
}

function sendAnal({ form }) {
  console.log('sendAnal', { form });
  if (typeof window !== 'undefined') {
    try {
      if (window.ga && window.yaCounter) {
        // Send events to google analytics and Yandex.Metrika
        if (form.form !== 'support') {
          window.yaCounter.reachGoal('submit_form');
          window.ga('dlg.send', 'event', 'submit', 'form', 'form_send');
        }

        switch (form.form) {
          case 'support':
            break;
          case 'offer':
            if (form.flag === 'sales') {
              window.ga('dlg.send', 'event', 'submit', 'form', 'block');
              window.yaCounter.reachGoal('submit_form_block');
            } else {
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

function getFormData(form) {
  // console.log('getFormData', { form });
  return new Promise((resolve, reject) => {
    resolve({
      ...form,
      data: {
        GACID: getGACID(),
      },
    });
  });
}

function sendFormData(form, endpoint) {
  // console.log('sendFormData', { form, endpoint });
  return axios.post(endpoint, form).then(({ data }) => {
    return new Promise((resolve, reject) => {
      if (data.status === 200) {
        resolve({ form, data });
      } else {
        reject({ form, data });
      }
    });
  });
}

function sendForm(form, endpoint) {
  return getFormData(form)
    .then((data) => sendFormData(data, endpoint))
    .then(sendAnal);
}

export function submitOfferForm(form) {
  return (dispatch) => {
    Field.dispatch({
      dispatch,
      type: 'OFFER_FORM_SUBMIT',
      context: {},
      action: sendForm(form, '/api/v1/offer'),
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
      action: sendForm(form, '/api/v1/subscribe'),
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
      action: sendForm(form, '/api/v1/support'),
      initialState: null,
    });
  };
}
