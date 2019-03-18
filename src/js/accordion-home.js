/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

import $ from 'jquery';

const accordionBtn = $('.accordion__button');
const accordionContent = $('.accordion__content');

const tabBtn = $('.tab__button');

$(() => {
  function handleAccorderonBtnClick(event) {
    const currentPanelTitle = $(this);
    const currentPanel = currentPanelTitle.next();
    const isOpen = currentPanelTitle.attr('data-open');

    if (isOpen === 'true') {
      currentPanelTitle.attr('data-open', false);
    } else {
      currentPanelTitle.attr('data-open', true);
    }
  }

  function handleTabBtnHover(event) {
    const currentTab = $(this);
    const currentTabData = currentTab.attr('data-target');
    const currContent = $('[data-content="' + currentTabData + '"]');

    tabBtn.removeClass('tab__button--current');
    currentTab.addClass('tab__button--current');

    accordionContent
      .addClass('accordion__content--hidden')
      .removeClass('accordion__content--visible');
    currContent
      .removeClass('accordion__content--hidden')
      .addClass('accordion__content--visible');
  }

  accordionBtn.on('click', handleAccorderonBtnClick);
  tabBtn.on('mouseenter', handleTabBtnHover);
});
