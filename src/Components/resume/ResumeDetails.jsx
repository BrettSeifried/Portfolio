import React from 'react';
import './resume.css';
import websiteResume from '../../assets/websiteResume.png';

export default function ResumeDetails() {
  return (
    <div>
      <a
        href="https://www.canva.com/design/DAE8r6k8Sjc/LDH2-76-QFdwvubedgyJRg/view"
        download
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className="resumeImg" src={websiteResume} />
      </a>
    </div>
  );
}
