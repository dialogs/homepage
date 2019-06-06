import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import './VacancyBox.css';
export function VacancyBox(props) {
  //console.log(props);
  const node = props.vacancy;
  return (
    <Link key={node.id} to={node.slug} className="vacancies__box">
      <div key={node.id} className="vacancies__box_inner">
        <div className="vacancies__box__title">{node.title}</div>
        <div className="vacancies__box__tags">
          {node.tags
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
