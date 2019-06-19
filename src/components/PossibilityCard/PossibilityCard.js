import React from 'react';

import './PossibilityCard.css';

export function PossibilityCard({
  image,
  description,
  category1,
  category2,
  category3,
  category4,
  title,
}) {
  return (
    <div className="possibility__card">
      <div className="content__body">
        <p className="content__title">{title}</p>
        <img className="content__icon" src={image} alt="" />
        <div className="content__text">{description}</div>
        <div className="content__categories">
          <p className="content__category">{category1}</p>
          <p className="content__category">{category2}</p>
          <p className="content__category">{category3}</p>
          <p className="content__category">{category4}</p>
        </div>
      </div>
    </div>
  );
}
