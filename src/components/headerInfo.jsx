import React from 'react';
import './styles.css';


const HeaderInfo = () => {
  return (
    <div className="header-info">
      <div>
        <h2>Pioneering CMS</h2>
        <p>Lorem Ipsum is simply dummy text</p>
        <a href="https://fiacon.com/registration" target="_blank" rel="noopener noreferrer">
          https://fiacon.com/registration
        </a>
      </div>
      <div className="icon-circle">👤</div>
    </div>
  );
};

export default HeaderInfo;
