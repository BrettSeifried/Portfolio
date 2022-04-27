import React from 'react';
import { useState } from 'react';
import resumeImg from '../assets/resumeImg.png';
import ResumeDetails from '../Components/resume/ResumeDetails';
import X from '../assets/X.png';

export default function Resume() {
  const [style, setStyle] = useState('resume');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('resumeSmall');

  function handleClick() {
    setStyle('resumeBig');
    setHidden(null);
    setXStyle('X');
    setImage('hidden');
  }

  function minimize() {
    setStyle('resume');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('resumeSmall');
  }
  return (
    <div>
      <img onClick={minimize} src={X} className={XStyle} />
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Resume</h1>
        <p className="padding">My Professional History</p>
        <img src={resumeImg} className={image} />
        <div className={hidden}>
          <ResumeDetails />
        </div>
      </div>
    </div>
  );
}
