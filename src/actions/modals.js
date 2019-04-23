export function openOfferModal() {
  document.body.classList.add('modal-open');
  document.getElementById('___gatsby').classList.add('modal-open');

  return {
    type: 'OFFER_MODAL/OPEN',
  };
}

export function closeOfferModal() {
  document.body.classList.remove('modal-open');
  document.getElementById('___gatsby').classList.remove('modal-open');
  return {
    type: 'OFFER_MODAL/CLOSE',
  };
}
