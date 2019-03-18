/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

import $ from 'jquery';

import './forms';
import './accordion';
import './features';

$(function() {
  console.log('window onload', $(window).width());

  $(window).on('resize', function(e) {
    console.log($(this), $(this).width());
  });
});
