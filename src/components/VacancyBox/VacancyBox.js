import React from 'react';
import { Link } from 'gatsby';
import './VacancyBox.css';

export function VacancyBox({ title, link, tags, skills }) {
  console.log(skills, skills.length);
  return (
    <Link to={link} className="vacancies__box">
      <div className="vacancies__box__inner">
        <div className="vacancies__box__title">{title}</div>
        <div className="vacancies__box__tags">
          {skills.map((skill) => (
            <span key={skill.name}>{skill.name}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
