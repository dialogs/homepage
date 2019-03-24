export function openMobileMenu() {
  console.log('openMobileMenu');
  return {
    type: 'MOBILE_MENU/OPEN',
  };
}

export function closeMobileMenu() {
  return {
    type: 'MOBILE_MENU/CLOSE',
  };
}
