import React from 'react';
import { useState } from 'react';

export default function AboutMe() {
  const [aboutme, setStyle] = useState('aboutme');
  const ToggleClass = () => {
    setStyle(!aboutme);
  };

  return (
    <div>
      <div onClick={ToggleClass} className={aboutme ? 'aboutme' : 'aboutmeBig'}>
        <h1>About Me</h1>
        <p>Father | Developer | Veteran</p>
      </div>
    </div>
  );
}
