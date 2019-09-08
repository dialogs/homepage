import React from 'react';
import './Organize.css';
import { Section } from '../Section/Section';
import { FormattedMessage } from 'react-intl';
import { ArrowLink } from '../ArrowLink/ArrowLink';

export function Organize() {
  return (
    <Section className="organize">
      <div className="organize__wrapper">
        <div className="organize__row">
          <div className="organize__col organize__col--supervisor">
            <h2 className="organize__title">
              <FormattedMessage id="organize_heading_1" />
            </h2>
            <h3 className="organize__subtitle">
              <FormattedMessage id="organize_title_1_1" />
            </h3>
            <ul className="organize__list list">
              <li className="organize__item">
                <FormattedMessage id="organize_text_1_1_1" />
              </li>
              <li className="organize__item">
                <FormattedMessage id="organize_text_1_1_2" />
              </li>
            </ul>
            <h3 className="organize__subtitle">
              <FormattedMessage id="organize_title_1_2" />
            </h3>
            <ul className="organize__list list">
              <li className="organize__item">
                <FormattedMessage id="organize_text_1_2_1" />
              </li>
            </ul>

            <h3 className="organize__subtitle">
              <FormattedMessage id="organize_title_1_3" />
            </h3>
            <ul className="organize__list list">
              <li className="organize__item">
                <FormattedMessage id="organize_text_1_3_1" />
              </li>
            </ul>
          </div>

          <div className="organize__col organize__col--employee">
            <h2 className="organize__title">
              <FormattedMessage id="organize_heading_2" />
            </h2>
            <h3 className="organize__subtitle">
              <FormattedMessage id="organize_title_2_1" />
            </h3>
            <ul className="organize__list list list">
              <li className="organize__item">
                <FormattedMessage id="organize_text_2_1_1" />
              </li>
            </ul>

            <h3 className="organize__subtitle">
              <FormattedMessage id="organize_title_2_2" />
            </h3>
            <ul className="organize__list list">
              <li className="organize__item">
                <FormattedMessage id="organize_text_2_2_1" />
              </li>
            </ul>

            <h3 className="organize__subtitle">
              <FormattedMessage id="organize_title_2_3" />
            </h3>
            <ul className="organize__list list">
              <li className="organize__item">
                <FormattedMessage id="organize_text_2_3_1" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
