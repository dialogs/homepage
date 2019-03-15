
import $ from 'jquery';

import './forms.js';

$(function() {
	$(window).on('resize', function(e) {
    console.log($(this), $(this).width());
	});
})