export function openMobileMenu() {
  document.body.classList.add('scrollBlocked');

  return {
    type: 'MOBILE_MENU/OPEN',
  };
}

export function closeMobileMenu() {
  document.body.classList.remove('scrollBlocked');

  return {
    type: 'MOBILE_MENU/CLOSE',
  };
}
