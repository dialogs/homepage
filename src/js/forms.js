import $ from 'jquery';

$(function() {

  const inputDefault = $(".input--default");

  inputDefault
    .on('blur', (e) => {
      const _this =  $(e.target);
		  
      if (_this.val().trim().length) {
        _this.addClass('input--filled');
      } else {
        _this.removeClass('input--filled');
      }
    });

});