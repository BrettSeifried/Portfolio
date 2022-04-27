import React from 'react';
import './resume.css';
import websiteResume from '../../assets/websiteResume.png';

export default function ResumeDetails() {
  return (
    <div>
      <a
        href="https://www.canva.com/design/DAE8r6k8Sjc/view?utm_content=DAE8r6k8Sjc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
        download
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className="resumeImg" src={websiteResume} />
      </a>
    </div>
  );
}
