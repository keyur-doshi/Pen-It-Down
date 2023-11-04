import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <h1 className="heading">Pen It Down</h1>
    </header>
  );
}

export default Header;
