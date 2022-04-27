import React from 'react';
import { useState } from 'react';
import ProjectThreeDetails from '../Components/projectThree/ProjectThreeDetails';
import shopping from '../assets/shopping.png';
import X from '../assets/X.png';

export default function Project3() {
  const [style, setStyle] = useState('project3');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('contactSmall');

  function handleClick() {
    setStyle('project3Big');
    setHidden(null);
    setXStyle('X');
    setImage('shoppingBig');
  }

  function minimize() {
    setStyle('project3');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('shopping');
  }

  return (
    <div>
      <img onClick={minimize} src={X} className={XStyle} />
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Alchemy Tech Swap</h1>
        <p className="padding">React | Supabase | 4-Person team | 4 day-Sprint</p>
        <img src={shopping} className={image} />
        <div className={hidden}>
          <ProjectThreeDetails />
        </div>
      </div>
    </div>
  );
}
