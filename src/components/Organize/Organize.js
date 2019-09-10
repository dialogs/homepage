import React from 'react';
import './Organize.css';
import { Section } from '../Section/Section';
import { FormattedMessage } from 'react-intl';
import { ArrowLink } from '../ArrowLink/ArrowLink';
import { Heading } from '../Heading/Heading';

export function Organize() {
  return (
    <Section className="organize organize--min-height">
      <div className="organize__wrapper">
        <div className="organize__row">
          <div className="organize__col organize__col--supervisor">
            <Heading level="2" className="prices__description">
              <FormattedMessage id="organize_heading_1" />
            </Heading>

            <div className="organize__group item ">
              <Heading level="3" className="item__title">
                <FormattedMessage id="organize_title_1_1" />
              </Heading>
              <ul className="organize__list list">
                <li className="organize__item">
                  <FormattedMessage id="organize_text_1_1_1" />
                </li>
                <li className="organize__item">
                  <FormattedMessage id="organize_text_1_1_2" />
                </li>
              </ul>
            </div>

            <div className="organize__group item ">
              <Heading level="3" className="item__title">
                <FormattedMessage id="organize_title_1_2" />
              </Heading>
              <ul className="organize__list list">
                <li className="organize__item">
                  <FormattedMessage id="organize_text_1_2_1" />
                </li>
              </ul>
            </div>

            <div className="organize__group item ">
              <Heading level="3" className="item__title">
                <FormattedMessage id="organize_title_1_3" />
              </Heading>
              <ul className="organize__list list">
                <li className="organize__item">
                  <FormattedMessage id="organize_text_1_3_1" />
                </li>
              </ul>
            </div>
          </div>

          <div className="organize__col organize__col--employee">
            <Heading level="2" className="prices__description">
              <FormattedMessage id="organize_heading_2" />
            </Heading>

            <div className="organize__group item ">
              <Heading level="3" className="item__title">
                <FormattedMessage id="organize_title_2_1" />
              </Heading>
              <ul className="organize__list list">
                <li className="organize__item">
                  <FormattedMessage id="organize_text_2_1_1" />
                </li>
              </ul>
            </div>

            <div className="organize__group item ">
              <Heading level="3" className="item__title">
                <FormattedMessage id="organize_title_2_2" />
              </Heading>
              <ul className="organize__list list">
                <li className="organize__item">
                  <FormattedMessage id="organize_text_2_2_1" />
                </li>
              </ul>
            </div>

            <div className="organize__group item ">
              <Heading level="3" className="item__title">
                <FormattedMessage id="organize_title_2_3" />
              </Heading>
              <ul className="organize__list list">
                <li className="organize__item">
                  <FormattedMessage id="organize_text_2_3_1" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
