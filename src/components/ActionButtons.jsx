import React from 'react';
import { useNavigate } from 'react-router-dom';
import regIcon from '../assets/reg.png';
import inIcon from '../assets/in.png';
import outIcon from '../assets/out.png';

const ActionButtons = () => {
  const navigate = useNavigate();

  const buttons = [
    {
      title: 'Registration',
      subtitle: 'Lorem Ipsum is simply dummy text',
      icon: regIcon,
      route: '/register',
    },
    {
      title: 'Sign In',
      subtitle: 'Lorem Ipsum is simply dummy text',
      icon: inIcon,
      route: '/signin',
    },
    {
      title: 'Sign Out',
      subtitle: 'Lorem Ipsum is simply dummy text',
      icon: outIcon,
      route: '/signout',
    },
  ];

  return (
    <div style={{ position: 'relative', padding: '1rem' }}>
      {/* Top-left text above buttons */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        left: '60px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#555',
      }}>
        How it works
      </div>

      <div className="actions">
        {buttons.map((btn, index) => (
          <div key={index} className="action-card" onClick={() => navigate(btn.route)}>
            <div className="action-icon">
              <img src={btn.icon} alt={btn.title} />
            </div>
            <div className="action-text">
              <h3>{btn.title}</h3>
              <p>{btn.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;
