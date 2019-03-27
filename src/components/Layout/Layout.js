import React from 'react';

import Header from '../Header';
import Modals from '../Modals';
import { Footer } from '../Footer/Footer';

import '../../styles/index.css';

export default ({ children }) => (
  <main className="main">
    <Header />
    {children}
    <Footer />
    <Modals />
  </main>
);
