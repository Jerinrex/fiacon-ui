import React from 'react';
import './styles.css';
import regIcon from '../assets/reg_icon.png';
import signInIcon from '../assets/s_in.png';
import signOutIcon from '../assets/s_out.png';

const TopNav = () => {
  return (
    <div className="top-nav">
      <button className="nav-btn active">
        <img src={regIcon} alt="Registration" className="nav-icon" />
      </button>
      <button className="nav-btn">
        <img src={signInIcon} alt="Sign In" className="nav-icon" />
       
      </button>
      <button className="nav-btn">
        <img src={signOutIcon} alt="Sign Out" className="nav-icon" />
    
      </button>
    </div>
  );
};

export default TopNav;
