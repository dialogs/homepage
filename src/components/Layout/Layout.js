import React from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import { FormOffer } from '../FormOffer/FormOffer';
import '../../styles/index.css';
import '../../styles/modal.css';

export default ({ children }) => (
	<main className="main">
		<Header />
		{children}
		<Footer />
		<section className="modal modal--opened">
			<div className="modal__bg" />
			<div className="modal__wrapper">
				<div className="modal__window">
					<div className="modal__window__content">
						<FormOffer />
					</div>
				</div>
			</div>
		</section>
	</main>
);
