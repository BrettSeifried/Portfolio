import React from 'react';
import { useState } from 'react';
import computer from '../assets/computer.png';
import AboutMeDetails from '../Components/aboutme/AboutMeDetails';

export default function AboutMe() {
  const [aboutme, setStyle] = useState('aboutme');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!aboutme);
    setHidden(!hidden);
  };

  return (
    <div onClick={ToggleClass} className={aboutme ? 'aboutme' : 'aboutmeBig'}>
      <h1>About Me</h1>
      <p>Father | Developer | Veteran</p>
      <img className="computerSmall" src={computer} />
      <div className={hidden ? 'hidden' : 'aboutmeShow'}>
        <AboutMeDetails />
      </div>
    </div>
  );
}
