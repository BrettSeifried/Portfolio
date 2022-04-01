import React from 'react';
import { useState } from 'react';
import resumeImg from '../assets/resumeImg.png';
import ResumeDetails from '../Components/resume/ResumeDetails';

export default function Resume() {
  const [resume, setStyle] = useState('resume');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!resume);
    setHidden(!hidden);
  };

  return (
    <div onClick={ToggleClass} className={resume ? 'resume' : 'resumeBig'}>
      <h1 className="padding">Resume</h1>
      <p className="padding">My Professional History</p>
      <img className="resumeSmall" src={resumeImg} />
      <div className={hidden ? 'hidden' : 'resumeShow'}>
        <ResumeDetails />
      </div>
    </div>
  );
}
