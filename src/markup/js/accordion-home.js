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
    const tabsParent = $(this).closest('.tabs__parent');
    const currContent = $('[data-content="' + currentTabData + '"]');

    tabsParent.find(tabBtn).removeClass('tab__button--current');
    currentTab.addClass('tab__button--current');

    tabsParent
      .find(accordionContent)
      .removeClass('accordion__content--visible');
    currContent.addClass('accordion__content--visible');
  }

  accordionBtn.on('click', handleAccorderonBtnClick);
  tabBtn.on('mouseenter', handleTabBtnHover);
});
