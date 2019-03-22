import React from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import '../../styles/index.css';

export default ({ children }) => (
  <main className="main">
    <Header />
    {children}
    <Footer />
  </main>
);
