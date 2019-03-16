
import $ from 'jquery';

import './forms.js';

$(function() {
	console.log('ww onload', $(window).width());

	$(window).on('resize', function(e) {
    console.log($(this), $(this).width());
	});
})