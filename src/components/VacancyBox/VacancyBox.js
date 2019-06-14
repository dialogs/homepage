import React from 'react';
import { Link } from 'gatsby';
import './VacancyBox.css';

export function VacancyBox({ title, link, tags }) {
  return (
    <Link to={link} className="vacancies__box">
      <div className="vacancies__box__inner">
        <div className="vacancies__box__title">{title}</div>
        <div className="vacancies__box__tags">
          {tags &&
            tags
              .filter((tag) => tag.length)
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
