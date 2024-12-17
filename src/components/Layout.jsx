import React from 'react';
import HeroBanner from './HeroBanner';

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: '80%', margin: '0 auto', padding: '20px' }}>
      <HeroBanner />
      <div style={{ marginTop: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;