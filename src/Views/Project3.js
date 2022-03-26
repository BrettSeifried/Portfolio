import React from 'react';
import { useState } from 'react';
import ProjectThreeDetails from '../Components/projectThree/ProjectThreeDetails';
import shopping from '../assets/shopping.png';

export default function Project3() {
  const [project3, setStyle] = useState('project3');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!project3);
    setHidden(!hidden);
  };

  return (
    <div onClick={ToggleClass} className={project3 ? 'project3' : 'project3Big'}>
      <h1 className="padding">Alchemy Tech Swap</h1>
      <p className="padding">React | Supabase | 4-Person team | 4 day-Sprint</p>
      <img className="shopping" src={shopping} />
      <div className={hidden ? 'hidden' : 'project3Show'}>
        <ProjectThreeDetails />
      </div>
    </div>
  );
}
