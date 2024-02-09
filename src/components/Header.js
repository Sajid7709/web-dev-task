// Header.js
import React from 'react';
 // Import your logo image

function Header({ companyName }) {
  return (
    <header>
      <h1>{companyName}</h1>
    </header>
  );
}

export default Header;
