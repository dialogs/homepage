import React from 'react';
import './Organize.css';
import { Section } from '../Section/Section';
import { FormattedMessage } from 'react-intl';
import { Heading } from '../Heading/Heading';
import { PageHeading } from '../PageHeading/PageHeading';
import { Container } from '../Container/Container';

export function Organize() {
  return (
    <Section className="organize stretch">
      <Container>
        <PageHeading className="organize__title--main">
          <FormattedMessage id="organize_heading_main" />
        </PageHeading>

        <div className="organize__wrapper">
          <div className="organize__row">
            <div className="organize__col organize__col--supervisor">
              <Heading
                className="organize__title organize__title--column"
                level="3"
              >
                <FormattedMessage id="organize_heading_1" />
              </Heading>

              <div className="organize__card item">
                <Heading
                  level="4"
                  className="organize__title organize__title--card"
                >
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

              <div className="organize__card item ">
                <Heading
                  level="4"
                  className="organize__title organize__title--card"
                >
                  <FormattedMessage id="organize_title_1_2" />
                </Heading>
                <ul className="organize__list list">
                  <li className="organize__item">
                    <FormattedMessage id="organize_text_1_2_1" />
                  </li>
                </ul>
              </div>

              <div className="organize__card item ">
                <Heading
                  level="4"
                  className="organize__title organize__title--card"
                >
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
              <Heading
                className="organize__title organize__title--column"
                level="3"
              >
                <FormattedMessage id="organize_heading_2" />
              </Heading>

              <div className="organize__card item ">
                <Heading
                  level="4"
                  className="organize__title organize__title--card"
                >
                  <FormattedMessage id="organize_title_2_1" />
                </Heading>
                <ul className="organize__list list">
                  <li className="organize__item">
                    <FormattedMessage id="organize_text_2_1_1" />
                  </li>
                </ul>
              </div>

              <div className="organize__card item ">
                <Heading
                  level="4"
                  className="organize__title organize__title--card"
                >
                  <FormattedMessage id="organize_title_2_2" />
                </Heading>
                <ul className="organize__list list">
                  <li className="organize__item">
                    <FormattedMessage id="organize_text_2_2_1" />
                  </li>
                </ul>
              </div>

              <div className="organize__card item ">
                <Heading
                  level="4"
                  className="organize__title organize__title--card"
                >
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
      </Container>
    </Section>
  );
}
