import axios from 'axios';

export function submitSubscribeForm(form) {
  axios
    .post('/api/v1/subscribe', form)
    .then((response) => {
      console.log(response);
      return {
        type: 'SUBSCRIBE_FORM/SUBMIT',
      };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function submitOfferForm(form) {
  return ({ dispatch }) => {
    axios
      .post('/api/v1/offer', form)
      .then((response) => {
        dispatch({
          type: 'SUBSCRIBE_FORM/SUBMIT',
          payload: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
