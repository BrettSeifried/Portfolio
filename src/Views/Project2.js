import React from 'react';
import { useState } from 'react';
import ProjectTwoDetails from '../Components/projectTwo/ProjectTwoDetails';
import DM from '../assets/DM.png';

export default function ProjectTwo() {
  const [project2, setStyle] = useState('project2');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!project2);
    setHidden(!hidden);
  };
  return (
    <div onClick={ToggleClass} className={project2 ? 'project2' : 'project2Big'}>
      <h1 className="padding">Github Messenger</h1>
      <p className="padding">React | API | Context | Custom Hooks</p>
      <img className="dm" src={DM} />
      <div className={hidden ? 'hidden' : 'project2Show'}>
        <ProjectTwoDetails />
      </div>
    </div>
  );
}
