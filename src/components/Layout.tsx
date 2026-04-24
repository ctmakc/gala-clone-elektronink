import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
