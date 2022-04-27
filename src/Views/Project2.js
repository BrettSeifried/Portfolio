import React from 'react';
import { useState } from 'react';
import ProjectTwoDetails from '../Components/projectTwo/ProjectTwoDetails';
import letsgologo from '../assets/letsgologo.png';
import X from '../assets/X.png';

export default function ProjectTwo() {
  const [style, setStyle] = useState('project2');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('dm');

  function handleClick() {
    setStyle('project2Big');
    setHidden(null);
    setXStyle('X');
    setImage('dmBig');
  }

  function minimize() {
    setStyle('project2');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('dm');
  }
  return (
    <div>
      <img onClick={minimize} src={X} className={XStyle} />
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Let’s Go Travel App</h1>
        <p className="padding">React | PostgreSQL | Full-Stack | Yelp API | OAuth</p>
        <img src={letsgologo} className={image} />
        <div className={hidden}>
          <ProjectTwoDetails />
        </div>
      </div>
    </div>
  );
}
