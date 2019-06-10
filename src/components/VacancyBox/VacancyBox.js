import React from 'react';
import { Link } from 'gatsby';
import './VacancyBox.css';

export function VacancyBox({ vacancy }) {
  return (
    <Link key={vacancy.id} to={vacancy.slug} className="vacancies__box">
      <div key={vacancy.id} className="vacancies__box__inner">
        <div className="vacancies__box__title">{vacancy.title}</div>
        <div className="vacancies__box__tags">
          {vacancy.tags
            .filter((tag) => tag.length > 0)
            .map((tag) => (
              <span key={tag}>
                {tag} <span className="tag-delimeter">&sdot;</span>{' '}
              </span>
            ))}
        </div>
      </div>
    </Link>
  );
}
