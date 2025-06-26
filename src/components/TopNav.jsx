import React from 'react';
import './styles.css';


const TopNav = () => {
  return (
    <div className="top-nav">
      <button className="active">🗂 Registration</button>
      <button>🔐 Sign In</button>
      <button>🚪 Sign Out</button>
    </div>
  );
};

export default TopNav;
