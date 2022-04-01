import React from 'react';
import { useState } from 'react';
import ProjectOneDetails from '../Components/projectOne/ProjectOneDetails';
import bookstore from '../assets/bookstore.png';

export default function ProjectOne() {
  const [project1, setStyle] = useState('project1');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!project1);
    setHidden(!hidden);
  };
  return (
    <div onClick={ToggleClass} className={project1 ? 'project1' : 'project1Big'}>
      <h1 className="padding">BookStore API</h1>
      <p className="padding">Javascript | API |</p>
      <img className="bookstore" src={bookstore} />
      <div className={hidden ? 'hidden' : 'project1Show'}>
        <ProjectOneDetails />
      </div>
    </div>
  );
}
