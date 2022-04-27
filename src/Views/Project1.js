import React from 'react';
import { useState } from 'react';
import ProjectOneDetails from '../Components/projectOne/ProjectOneDetails';
import bookstore from '../assets/bookstore.png';
import X from '../assets/X.png';

export default function ProjectOne() {
  const [style, setStyle] = useState('project1');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('bookstore');

  function handleClick() {
    setStyle('project1Big');
    setHidden(null);
    setXStyle('X');
    setImage('bookstore');
  }

  function minimize() {
    setStyle('project1');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('bookstore');
  }

  return (
    <div>
      <img onClick={minimize} src={X} className={XStyle} />
      <div onClick={handleClick} className={style}>
        <h1 className="padding">BookStore API</h1>
        <p className="padding">Javascript | API |</p>
        <img src={bookstore} className={image} />
        <div className={hidden}>
          <ProjectOneDetails />
        </div>
      </div>
    </div>
  );
}
