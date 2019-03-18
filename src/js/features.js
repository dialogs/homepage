/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

import $ from 'jquery';

$(() => {
  // Tabs
  const tabs = $('.features__tabs__tab');
  const tabContent = $('.features__content');

  function handleTabClick(event) {
    const tab = $(this);
    const currrentContent = tabContent.find(
      `[data-tab=${tab.attr('data-tab')}]`,
    );

    tabs.removeClass('features__tabs__tab--active');
    tab.addClass('features__tabs__tab--active');
    tabContent
      .find(`[data-tab]`)
      .removeClass('features__content__block--visible');
    currrentContent.addClass('features__content__block--visible');
  }

  tabs.on('click', handleTabClick);

  // Slides
  const links = $('.feature_block__link[data-slide]');
  const slides = $('.feature_block__slides');
  // $('.feature_block__slide')

  function handleLinkClick(event) {
    const link = $(this);
    const currrentSlide = slides.find(
      `[data-slide=${link.attr('data-slide')}]`,
    );

    links.removeClass('feature_block__link--active');
    link.addClass('feature_block__link--active');
    slides.find(`[data-slide]`).removeClass('feature_block__slide--visible');
    currrentSlide.addClass('feature_block__slide--visible');
  }

  links.on('click', handleLinkClick);

  // Accordion
  const panelTitle = $('.feature_block__slides dt a');
  const panels = $('.feature_block__slides dd');
  console.log({ panels, panelTitle });
  panelTitle.parent().attr('data-open', false);

  function handleAccorderonTitleClick(event) {
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
