import React from 'react';
import './styles.css';
import apple from '../assets/apple.png';
import android from '../assets/android.png';

const AppLinks = () => {
  return (
    <section className="app-links">
      <div>
        <h3>For iOS</h3>
        <div className="card">
          <img src={apple} alt="Apple" className="icon" />
          <div>
            <p><strong>Pioneering CMS</strong></p>
            <p>Sign In and Sign Up</p>
          </div>
          <button className="install-btn">Install</button>
        </div>
      </div>

      <div>
        <h3>For Android</h3>
        <div className="card">
          <img src={android} alt="Android" className="icon" />
          <div>
            <p><strong>Pioneering CMS</strong></p>
            <p>Sign In and Sign Up</p>
          </div>
          <button className="install-btn">Install</button>
        </div>
      </div>
    </section>
  );
};

export default AppLinks;
