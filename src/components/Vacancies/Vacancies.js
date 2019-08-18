import React, { useState } from 'react';
import classNames from 'classnames';
import { PageHeading } from '../PageHeading/PageHeading';
import { FormattedMessage } from 'react-intl';
import { Select } from '../Select/Select';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import { VacancyBox } from '../VacancyBox/VacancyBox';
import './Vacancies.css';

export function Vacancies({ vacancies, cities, categories, locale }) {
  const [currentCity, setCurrentCity] = useState(cities[0]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function isCategoryHasVacancies(categoryForSearch) {
    const vacanciesInCategory = vacancies.find(
      ({ specialization, location }) => {
        return specialization === categoryForSearch && location === currentCity;
      },
    );

    return Boolean(vacanciesInCategory);
  }

  function handleCityChange(city) {
    setCurrentCity(city);
    setCurrentCategory(categories[0]);
  }

  function renderCollapsible() {
    return categories.map((currentCat, index) => {
      const currentCategoryVacancies = vacancies.filter((vacancy) => {
        const { specialization, location } = vacancy;

        if (currentCity === 'all' || currentCity === location) {
          if (currentCat === 'all' || currentCat === specialization) {
            return vacancy;
          }
        }
      });

      if (!currentCategoryVacancies.length) {
        return null;
      }

      return (
        <Collapsible
          className={classNames(
            'vacancies__content',
            currentCategory === currentCat
              ? 'vacancies__content--visible'
              : null,
          )}
          title={<FormattedMessage id={`career.category.${currentCat}`} />}
          key={`cotegory_collapsible_${index}`}
        >
          <div className="vacancies__boxes">
            {currentCategoryVacancies.map((vacancy, index) => {
              const { title, slug, skills } = vacancy;

              return (
                <VacancyBox
                  title={title}
                  link={`/${locale}/career/${slug}`}
                  skills={skills}
                  locale={locale}
                  key={`vacancy_${index}`}
                />
              );
            })}
          </div>
        </Collapsible>
      );
    });
  }

  return (
    <div className="vacancies">
      <PageHeading>
        <FormattedMessage id="jobs_vacancies_header" />
      </PageHeading>
      <Select
        options={cities.map((city) => {
          return {
            label: `career.location.${city}`,
            value: city,
          };
        })}
        value={currentCity}
        name="cities"
        onChange={handleCityChange}
        isSmall
        isNeedToTranslate
      />
      <div className="vacancies__filter">
        <Tabs onChange={setCurrentCategory} current={currentCategory}>
          {categories.map((category, index) => {
            const tabClassName = classNames({
              hide:
                category !== 'all' &&
                currentCity !== 'all' &&
                !isCategoryHasVacancies(category),
            });

            return (
              <Tab
                value={category}
                key={`category_tab_${index}`}
                className={tabClassName}
              >
                <FormattedMessage id={`career.category.${category}`} />
              </Tab>
            );
          })}
        </Tabs>
      </div>
      <div className="collapsible">{renderCollapsible()}</div>
    </div>
  );
}
