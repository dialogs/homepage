import React from 'react';

import './Modal.css';

export function Modal({ onClose, title, children }) {
  function handleModalClick(event) {
    event.stopPropagation();
  }

  return (
    <section className="modal" onClick={onClose}>
      <div className="modal__window" onClick={handleModalClick}>
        {onClose && (
          <div className="modal__window__close" onClick={onClose}>
            <img src="/images/svg-icons/icon-clear.svg" alt="Закрыть окно" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
