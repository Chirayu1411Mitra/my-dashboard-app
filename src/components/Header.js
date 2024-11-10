import React from 'react';
import logo from './logo.png'; // Adjust the path to your image file

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" style={{ width: '110px', height: 'auto' }} />
      <h1>User Dashboard</h1>
    </div>
  );
};

export default Header;