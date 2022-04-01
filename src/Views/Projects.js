import React from 'react';
import { useState } from 'react';
import ProjectFourDetails from '../Components/projectFour/ProjectFourDetails';
import shield from '../assets/shield.png';

export default function ProjectFour() {
  const [project4, setStyle] = useState('project4');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!project4);
    setHidden(!hidden);
  };
  return (
    <div onClick={ToggleClass} className={project4 ? 'project4' : 'project4Big'}>
      <h1 className="padding">Hyrule Compendium</h1>
      <p className="padding">Javascript | API | CSS | HTML</p>
      <img className="shield" src={shield} />
      <div className={hidden ? 'hidden' : 'project1Show'}>
        <ProjectFourDetails />
      </div>
    </div>
  );
}
