/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

import $ from 'jquery';

import './forms';
import './features';
import './accordion-home';

$(function() {
	console.log('window onload', $(window).width());

	$(window).on('resize', function(e) {
		console.log($(this), $(this).width());
	});
});

$(function() {
	const headerBtnMemu = $('.header__button--menu');
	const header = $('#header');

	headerBtnMemu.on('click', function() {
		headerBtnMemu.toggleClass('fg');
		header.toggleClass('header--mobile-open');
	});
});
