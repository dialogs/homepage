import React, { useEffect, useState } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

// import { Page } from '../Page/Page';
import { Heading } from '../Heading/Heading';
import { Section } from '../Section/Section';
import { PartnerTab } from '../PartnerTab/PartnerTab';
import debounce from 'lodash.debounce';
import './ForPartners.css';

const TOP_SCROLL_HIDE_OFFSET2 = 2000;
const TOP_SCROLL_REMOVE_OFFSET = 4000;
export function ForPartners() {
  const [isTabSticky, setTabSticky] = useState(false);
  let prevScrollPosition2 = 0;
  let style = {};

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  useEffect(() => {
    function handleWindowLoad2() {
      prevScrollPosition2 = getCurrentScroll();
    }

    function handleScroll2() {
      const currentScroll2 = getCurrentScroll();
      console.log(currentScroll2);

      if (
        (currentScroll2 > TOP_SCROLL_HIDE_OFFSET2) &
        (currentScroll2 < TOP_SCROLL_REMOVE_OFFSET)
      ) {
        setTabSticky(true);
        console.log(currentScroll2, TOP_SCROLL_HIDE_OFFSET2, 'setSticky(true)');
      } else {
        setTabSticky(false);
        console.log('setSticky(false)');
      }

      prevScrollPosition2 = currentScroll2 <= 0 ? 0 : currentScroll2;
    }

    const debouncedScroll2 = debounce(handleScroll2, 100, {
      leading: false,
      trailing: false,
      maxWait: 100,
    });

    window.addEventListener('load', handleWindowLoad2);
    window.addEventListener('scroll', debouncedScroll2, { passive: true });

    return () => {
      window.removeEventListener('load', handleWindowLoad2);
      window.removeEventListener('scroll', debouncedScroll2);
    };
  }, []);

  return (
    <Section className="for-partners">
      <Heading>
        <FormattedMessage id="for_partners_title" />
      </Heading>
      <div className="for-partners__content">
        <div className="for-partners__content__block">
          <ul
            className={'nav__list ' + (isTabSticky ? 'sticky' : 'not-sticky')}
          >
            <li className="nav__list_item">
              <div className="nav__list_item_wrapper">
                <a className="llink" href="#technological">
                  <FormattedMessage id="partners_technological_nav_title" />
                </a>
              </div>
            </li>
            <li className="nav__list_item">
              <div className="nav__list_item_wrapper">
                <a className="llink" href="#business">
                  <FormattedMessage id="partners_business_nav_title" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="for-partners__content__tabs">
          <div className="for-partners__content__technological__wrapper">
            <FormattedMessage id="partners_technological_nav_title" />
          </div>
          <div
            className="for-partners__content__technological__text"
            id="technological"
          >
            <FormattedMessage id="partners_technological_text" />
          </div>
          <div className="for-partners__content__technological">
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="fasttrack_tab_title" />}
              link={<FormattedMessage id="fasttrack_tab_link" />}
              description={<FormattedMessage id="fasttrack_tab_description" />}
              country={<FormattedMessage id="fasttrack_tab_country" />}
              category={<FormattedMessage id="fasttrack_tab_category" />}
              image="/images/partners/fasttrack_icon.svg"
              href="https://fstrk.io/"
            />
            <PartnerTab
              title={<FormattedMessage id="mtraining_tab_title" />}
              link={<FormattedMessage id="mtraining_tab_link" />}
              description={<FormattedMessage id="mtraining_tab_description" />}
              country={<FormattedMessage id="mtraining_tab_country" />}
              category={<FormattedMessage id="mmtraining_tab_category" />}
              image="/images/partners/mtraining_icon.svg"
              href="https://www.mastertraining.it/"
            />
            <PartnerTab
              title={<FormattedMessage id="chatme_tab_title" />}
              link={<FormattedMessage id="chatme_tab_link" />}
              description={<FormattedMessage id="chatme_tab_description" />}
              country={<FormattedMessage id="chatme_tab_country" />}
              category={<FormattedMessage id="chatme_tab_category" />}
              image="/images/partners/chatme_icon.svg"
              href="https://chatme.ai/"
            />
            <PartnerTab
              title={<FormattedMessage id="basealt_tab_title" />}
              link={<FormattedMessage id="basealt_tab_link" />}
              description={<FormattedMessage id="basealt_tab_description" />}
              country={<FormattedMessage id="basealt_tab_country" />}
              category={<FormattedMessage id="basealt_tab_category" />}
              image="/images/partners/basealt_icon.svg"
              href="https://www.basealt.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="omp_tab_title" />}
              link={<FormattedMessage id="omp_tab_link" />}
              description={<FormattedMessage id="omp_tab_description" />}
              country={<FormattedMessage id="omp_tab_country" />}
              category={<FormattedMessage id="omp_tab_category" />}
              image="/images/partners/omp_icon.svg"
              href="http://omprussia.ru"
            />
          </div>
          <div className="for-partners__content__business__wrapper">
            <FormattedMessage id="partners_business_nav_title" />
          </div>
          <div className="for-partners__content__business__text" id="business">
            <FormattedMessage id="partners_business_text" />
          </div>
          <div className="for-partners__content__business">
            <PartnerTab
              title={<FormattedMessage id="beclever_tab_title" />}
              link={<FormattedMessage id="beclever_tab_link" />}
              description={<FormattedMessage id="beclever_tab_description" />}
              country={<FormattedMessage id="beclever_tab_country" />}
              category={<FormattedMessage id="beclever_tab_category" />}
              image="/images/partners/beclever_icon.svg"
              href="http://beclever.online/"
            />
            <PartnerTab
              title={<FormattedMessage id="softline_tab_title" />}
              link={<FormattedMessage id="softline_tab_link" />}
              description={<FormattedMessage id="softline_tab_description" />}
              country={<FormattedMessage id="softline_tab_country" />}
              category={<FormattedMessage id="softline_tab_category" />}
              image="/images/partners/softline_icon.svg"
              href="https://softline.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="rb_tab_title" />}
              link={<FormattedMessage id="rb_tab_link" />}
              description={<FormattedMessage id="rb_tab_description" />}
              country={<FormattedMessage id="rb_tab_country" />}
              category={<FormattedMessage id="rb_tab_category" />}
              image="/images/partners/rb_icon.svg"
              href="http://rbtechnologies.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="dm_tab_title" />}
              link={<FormattedMessage id="dm_tab_link" />}
              description={<FormattedMessage id="dm_tab_description" />}
              country={<FormattedMessage id="dm_tab_country" />}
              category={<FormattedMessage id="dm_tab_category" />}
              image="/images/partners/dm_icon.svg"
              href="http://www.dm-solutions.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="swemel_tab_title" />}
              link={<FormattedMessage id="swemel_tab_link" />}
              description={<FormattedMessage id="swemel_tab_description" />}
              country={<FormattedMessage id="swemel_tab_country" />}
              category={<FormattedMessage id="swemel_tab_category" />}
              image="/images/partners/swemel_icon.svg"
              href="https://www.swemel.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="croc_tab_title" />}
              link={<FormattedMessage id="croc_tab_link" />}
              description={<FormattedMessage id="croc_tab_description" />}
              country={<FormattedMessage id="croc_tab_country" />}
              category={<FormattedMessage id="croc_tab_category" />}
              image="/images/partners/croc_icon.svg"
              href="https://www.croc.ru/"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
