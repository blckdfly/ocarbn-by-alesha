import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;