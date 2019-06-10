import React, { useState } from 'react';
import classNames from 'classnames';
import { PageHeader } from '../PageHeader/PageHeader';
import { FormattedMessage } from 'react-intl';
import { Select } from '../Select/Select';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import { VacancyBox } from '../VacancyBox/VacancyBox';

import './VacanciesWithTabs.css';

export function VacanciesWithTabs(props) {
  const [category, setCategory] = useState(props.RenderData.Categories[0]);
  const [city, setCity] = useState(props.RenderData.Cities[0]);

  let vacInCity = props.RenderData.Vacancies.filter((v) => v.city === city);
  if (city === 'Все' || city === 'All') {
    vacInCity = props.RenderData.Vacancies;
  }

  let catInCity = vacInCity
    .map((v) => v.category)
    .filter((value, index, self) => self.indexOf(value) === index);
  catInCity.unshift(props.RenderData.Categories[0]);

  const collapsible = catInCity.map((c) => {
    let vacInCategory = vacInCity.filter((v) => v.category === c);
    if (c === 'Все' || c === 'All') {
      vacInCategory = vacInCity;
    }

    return (
      <Collapsible
        className={classNames(
          'vacancies__content',
          category === c ? 'vacancies__content--visible' : null,
        )}
        title={c}
      >
        <div className="vacancies__boxes">
          {vacInCategory.map((vacancy) => (
            <VacancyBox vacancy={vacancy} />
          ))}
        </div>
      </Collapsible>
    );
  });

  return (
    <div className="vacancies">
      <PageHeader>
        <FormattedMessage id="jobs_vacancies_header" />
      </PageHeader>
      <Select
        options={props.RenderData.Cities}
        value={city}
        name="cities"
        onChange={setCity}
        isSmall
      />
      <div className="vacancies__filter">
        <Tabs onChange={setCategory} current={category}>
          {catInCity.map((cat) => {
            return (
              <Tab value={cat}>
                <span>{cat}</span>
              </Tab>
            );
          })}
        </Tabs>
      </div>
      <div className="collapsible">{collapsible}</div>
    </div>
  );
}
