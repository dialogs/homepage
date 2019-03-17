/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

import $ from 'jquery';

const panels = $('.accordion > dd');
const panelTitle = $('.accordion > dt > a');
panelTitle.parent().attr('data-open', false);

$(() => {
  function handleAccorderonTitleClick(event) {
    console.log(handleAccorderonTitleClick);
    event.preventDefault();

    const currentPanelTitle = $(this).parent();
    const currentPanel = currentPanelTitle.next();
    const isOpen = currentPanelTitle.attr('data-open');

    if (isOpen === 'true') {
      currentPanelTitle.attr('data-open', false);
    } else {
      currentPanelTitle.attr('data-open', true);
    }
  }

  panelTitle.on('click', handleAccorderonTitleClick);
});
