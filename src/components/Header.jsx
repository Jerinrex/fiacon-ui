import React from 'react';
import './styles.css';
import topImage from '../assets/top.png';
const Header = () => {
  return (
    <header className="header">
     <img src={topImage} alt="FIACON Logo" className="logo" />
      <button className="hamburger">&#9776;</button>
    </header>
  );
};

export default Header;
