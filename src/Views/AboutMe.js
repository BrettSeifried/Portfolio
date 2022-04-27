import React from 'react';
import { useState } from 'react';
import computer from '../assets/computer.png';
import AboutMeDetails from '../Components/aboutme/AboutMeDetails';
import X from '../assets/X.png';

export default function AboutMe() {
  const [style, setStyle] = useState('aboutme');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('computerSmall');

  // const ToggleClass = () => {
  //   setStyle(!aboutme);
  //   setHidden(!hidden);
  // };

  function handleClick() {
    setStyle('aboutmeBig');
    setHidden(null);
    setXStyle('X');
    setImage('hidden');
  }

  function minimize() {
    setStyle('aboutme');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('computerSmall');
  }

  return (
    <div>
      <img onClick={minimize} src={X} className={XStyle}></img>
      <div onClick={handleClick} className={style}>
        <h1 className="padding">About Me</h1>
        <p className="padding">Father | Developer | Veteran</p>
        <img src={computer} className={image} />
        <div className={hidden}>
          <AboutMeDetails />
        </div>
      </div>
    </div>
  );
}
