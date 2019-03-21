import React from 'react';

export function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-title">Подпишитесь на свежие статьи блога!</div>
      <div className="subscribe-form-box">
        <form action="" className="form subscribe__form">
          <div className="form-item form-item--default subscribe__form-item">
            <input
              type="email"
              className="input--default"
              id="blog-subscribe-email"
              name="BLOG_SUBSCRIBE_EMAIL"
            />
            <label htmlFor="blog-subscribe-email" className="label--default">
              Ваш Email
            </label>
          </div>
          <div className="form-item subscribe__form-item subscribe__form-item__button">
            <button type="submit" className="button button--default">
              Подписаться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
