/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

import $ from 'jquery';
import { throttle } from 'lodash-es';

$(() => {
  const tabs = $('.features__tabs__tab');
  const content = $('.features__content');
  const links = $('.feature_block__link[data-slide]');
  const slides = $('.feature_block__slides');
  const slideLinks = $('.feature_block__slides dt a');
  const panels = $('.feature_block__slides dd');
  const scrollOptions = {
    capture: true,
    passive: true,
  };

  function changeSlide(nextSlideName) {
    const nextLink = links.filter(`[data-slide=${nextSlideName}]`);
    const nextSlide = slides.find(`[data-slide=${nextSlideName}]`);

    links.removeClass('feature_block__link--active');
    slides.find(`[data-slide]`).removeClass('feature_block__slide--visible');

    nextLink.addClass('feature_block__link--active');
    nextSlide.addClass('feature_block__slide--visible');
  }

  function changeTab(nextTabName) {
    const nextTab = tabs.filter(`[data-tab=${nextTabName}]`);
    const nextTabContent = content.find(`[data-tab=${nextTabName}]`);
    const nextTabFirstSlideName = nextTabContent
      .find(`[data-slide]`)
      .first()
      .attr('data-slide');

    const featuresPage = $('.features');
    featuresPage
      .removeClass('features--secondary')
      .removeClass('features--primary')
      .removeClass('features--transparent');
    switch (nextTabName) {
      case 'messenger':
        featuresPage.addClass('features--secondary');
        break;
      case 'business':
        featuresPage.addClass('features--primary');
        break;
      case 'integrations':
        featuresPage.addClass('features--transparent');
        break;
      default:
    }

    tabs.removeClass('features__tabs__tab--active');
    content.find(`[data-tab]`).removeClass('features__content__block--visible');

    nextTab.addClass('features__tabs__tab--active');
    nextTabContent.addClass('features__content__block--visible');

    changeSlide(nextTabFirstSlideName);
  }

  function handleTabClick(event) {
    const nextTabName = $(this).attr('data-tab');

    changeTab(nextTabName);
  }

  function handleLinkClick(event) {
    event.preventDefault();

    const nextSlideName = $(this).attr('data-slide');

    changeSlide(nextSlideName);
  }

  function handleAccorderonTitleClick(event) {
    event.preventDefault();

    const nextPanel = $(this).parent();
    const isOpen = nextPanel.attr('data-open');

    nextPanel.attr('data-open', isOpen !== 'true');
  }

  const selectNextSlide = throttle(() => {
    const nextSlide = $('.feature_block__link--active').next();

    if (nextSlide !== 0) {
      const nextSlideName = nextSlide.attr('data-slide');
      changeSlide(nextSlideName);
    } else {
      disableSlidesScroll();
    }
  }, 500);

  function handleScrollDisabled() {
    const headerHeight = $('#header').outerHeight();
    window.scrollTo(0, headerHeight);
  }

  function enableSlidesScroll() {
    window.removeEventListener('scroll', handleScrollEnabled, scrollOptions);
    window.addEventListener('scroll', handleScrollDisabled, scrollOptions);
    window.addEventListener('scroll', selectNextSlide, scrollOptions);
  }

  function disableSlidesScroll() {
    window.removeEventListener('scroll', selectNextSlide, scrollOptions);
    window.removeEventListener('scroll', handleScrollDisabled, scrollOptions);
    window.addEventListener('scroll', handleScrollEnabled, scrollOptions);
  }

  function handleScrollEnabled() {
    const scrollTop = $(document).scrollTop();
    const headerHeight = $('#header').outerHeight();
    const footerHeight = $('#footer').outerHeight();

    // if (scrollTop > headerHeight && scrollTop < footerHeight) {
    //   enableSlidesScroll();
    // }
  }

  // page load defaults
  slideLinks.parent().attr('data-open', false);
  changeTab(
    tabs
      .filter(`[data-tab]`)
      .first()
      .attr('data-tab'),
  );

  tabs.on('click', handleTabClick);
  links.on('click', handleLinkClick);
  slideLinks.on('click', handleAccorderonTitleClick);

  window.addEventListener('scroll', handleScrollEnabled, scrollOptions);
});
