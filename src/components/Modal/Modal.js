import React from 'react';
import classnames from 'classnames';

import './Modal.css';
import { FormOffer } from '../FormOffer/FormOffer';

export function Modal() {
	return (
		<section className="modal modal--opened">
			<div className="modal__bg" />
			<div className="modal__wrapper">
				<div className="modal__window">
					<div className="modal__window__content">
						<img
							className="modal__window__close"
							src="images/svg-icons/icon-clear.svg"
							alt="Закрыть окно"
						/>
						<FormOffer />
					</div>
				</div>
			</div>
		</section>
	);
}
