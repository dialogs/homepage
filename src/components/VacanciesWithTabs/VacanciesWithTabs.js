import React, { useState } from 'react';
import classNames from 'classnames';
import { PageHeader } from '../PageHeader/PageHeader';
import { FormattedMessage } from 'react-intl';
import { Select } from '../Select/Select';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import { VacancyBox } from '../VacancyBox/VacancyBox';

import './VacanciesWithTabs.css';

export function VacanciesWithTabs({ data }) {
  const [category, setCategory] = useState(data.Categories[0]);
  const [city, setCity] = useState(data.Cities[0]);

  let vacInCity = data.Vacancies.filter((vacancy) => vacancy.city === city);
  if (city === 'Все' || city === 'All') {
    vacInCity = data.Vacancies;
  }

  let catInCity = vacInCity
    .map((v) => v.category)
    .filter((value, index, self) => self.indexOf(value) === index);
  catInCity.unshift(data.Categories[0]);

  const collapsible = catInCity.map((currentCategory, index) => {
    let vacInCategory = vacInCity.filter(
      ({ category }) => category === currentCategory,
    );
    if (currentCategory === 'Все' || currentCategory === 'All') {
      vacInCategory = vacInCity;
    }

    return (
      <Collapsible
        className={classNames(
          'vacancies__content',
          category === currentCategory ? 'vacancies__content--visible' : null,
        )}
        title={currentCategory}
        key={`cotegory_collapsible_${index}`}
      >
        <div className="vacancies__boxes">
          {vacInCategory.map((vacancy, index) => (
            <VacancyBox vacancy={vacancy} key={`vacancy_${index}`} />
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
        options={data.Cities}
        value={city}
        name="cities"
        onChange={setCity}
        isSmall
      />
      <div className="vacancies__filter">
        <Tabs onChange={setCategory} current={category}>
          {catInCity.map((cat, index) => {
            return (
              <Tab value={cat} key={`category_tab_${index}`}>
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
