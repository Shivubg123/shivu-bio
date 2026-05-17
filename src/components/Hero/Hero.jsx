import { useState, useEffect } from 'react';
import './Hero.css';

export const Hero = ({ image, name }) => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section">
      <img
        src={`${process.env.PUBLIC_URL || ''}/images/${image}`}
        alt="Groom"
        className="hero-image"
        onLoad={() => setTextVisible(true)}
        onError={(e) => {
           console.error('Image load failed, fallback applied', e);
           e.target.style.display = 'none';
        }}
      />
      <div className={`hero-text ${textVisible ? 'appear' : ''}`}>
        <h1 className="magical-text">{name}</h1>
      </div>
    </div>
  );
};
