import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { VacanciesWithTabs } from '../VacanciesWithTabs/VacanciesWithTabs';
import './Vacancies.css';

export function Vacancies({ className, children, lang }) {
  const dataRu = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date
                city
                category
                tags
                salary
                description
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  const rawData = dataRu.allMarkdownRemark.edges;
  let vacanciesData = {};
  vacanciesData.Ru = {};
  vacanciesData.En = {};

  let rawVacanciesRu = rawData.filter(
    (el) => el.node.fields.slug.indexOf('/ru/') >= 0,
  );
  let rawVacanciesEn = rawData.filter(
    (el) => el.node.fields.slug.indexOf('/en/') >= 0,
  );
  vacanciesData.Ru.Cities = ['Все'];
  vacanciesData.Ru.Categories = ['Все'];
  vacanciesData.Ru.Vacancies = [];

  rawVacanciesRu.forEach((el) => {
    const city = el.node.frontmatter.city;
    if (vacanciesData.Ru.Cities.indexOf(city) < 0) {
      vacanciesData.Ru.Cities.push(city);
    }
    const category = el.node.frontmatter.category;
    if (vacanciesData.Ru.Categories.indexOf(category) < 0) {
      vacanciesData.Ru.Categories.push(category);
    }

    vacanciesData.Ru.Vacancies.push({
      title: el.node.frontmatter.title,
      city: city,
      category: category,
      salary: el.node.frontmatter.salary,
      tags: el.node.frontmatter.tags,
      date: el.node.frontmatter.date,
      description: el.node.frontmatter.description,
      slug: el.node.fields.slug,
      id: el.node.id,
    });
  });
  vacanciesData.En.Cities = ['All'];
  vacanciesData.En.Categories = ['All'];
  vacanciesData.En.Vacancies = [];
  rawVacanciesEn.forEach((el) => {
    const city = el.node.frontmatter.city;
    if (vacanciesData.En.Cities.indexOf(city) < 0) {
      vacanciesData.En.Cities.push(city);
    }
    const category = el.node.frontmatter.category;
    if (vacanciesData.En.Categories.indexOf(category) < 0) {
      vacanciesData.En.Categories.push(category);
    }

    vacanciesData.En.Vacancies.push({
      title: el.node.frontmatter.title,
      city: city,
      category: category,
      salary: el.node.frontmatter.salary,
      tags: el.node.frontmatter.tags,
      date: el.node.frontmatter.date,
      description: el.node.frontmatter.description,
      slug: el.node.fields.slug,
      id: el.node.id,
    });
  });

  console.log(vacanciesData, rawData);

  if (lang === 'ru')
    return <VacanciesWithTabs lang="ru" RenderData={vacanciesData.Ru} />;
  return <VacanciesWithTabs lang="en" RenderData={vacanciesData.En} />;
}
