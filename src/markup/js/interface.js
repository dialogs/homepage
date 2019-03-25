/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

import $ from 'jquery';

$(function() {
  const headerBtnMemu = $('.header__button--menu');
  const header = $('#header');

  headerBtnMemu.on('click', function() {
    header.toggleClass('header--mobile-open');
  });

  // TODO sticky menu on scroll

  // TODO modalwindow
});
