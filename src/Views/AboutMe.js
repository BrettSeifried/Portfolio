import React from 'react';
import { useState } from 'react';

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
      <p className={hidden ? 'aboutmeShow' : 'hidden'}> TEST INFORMATION HELLO </p>
    </div>
  );
}
