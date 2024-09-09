import React from 'react';
import './Wave.css';

function Wave() {
  return (
    <section>
      <div className="wave">
        <svg viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#18baff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#27b9f8', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path className="wave-path" fill="url(#waveGradient)" d="M0,96L40,101.3C80,107,160,117,240,138.7C320,160,400,192,480,202.7C560,213,640,203,720,186.7C800,171,880,149,960,133.3C1040,117,1120,107,1200,106.7C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Wave;
