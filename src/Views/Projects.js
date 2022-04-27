import React from 'react';
import { useState } from 'react';
import ProjectFourDetails from '../Components/projectFour/ProjectFourDetails';
import shield from '../assets/shield.png';
import X from '../assets/X.png';

export default function ProjectFour() {
  const [style, setStyle] = useState('project4');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('contactSmall');

  function handleClick() {
    setStyle('project4Big');
    setHidden(null);
    setXStyle('X');
    setImage('shield');
  }

  function minimize() {
    setStyle('project4');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('shield');
  }

  return (
    <div>
      <img onClick={minimize} src={X} className={XStyle} />
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Hyrule Compendium</h1>
        <p className="padding">Javascript | API | CSS | HTML</p>
        <img src={shield} className={image} />
        <div className={hidden}>
          <ProjectFourDetails />
        </div>
      </div>
    </div>
  );
}
