import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="actions">
      <button className="btn secondary" onClick={() => navigate('/register')}>Registration</button>
      <button className="btn secondary" onClick={() => navigate('/signin')}>Sign In</button>
      <button className="btn secondary" onClick={() => navigate('/signout')}>Sign Out</button>
    </div>
  );
};

export default ActionButtons;
