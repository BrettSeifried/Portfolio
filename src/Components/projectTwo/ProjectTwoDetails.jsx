import React from 'react';
import './project2.css';
import github from '../../assets/github.png';
import messege from '../../assets/messege.png';
import link from '../../assets/link.png';
import X from '../../assets/X.png';

export default function ProjectTwoDetails() {
  return (
    <div className="project2Detail">
      <h1>Messenger with use of an API</h1>
      <h3 className="p2Body">
        A messeging system that stores user info, and messeges to be displayed. The intent was to
        create clean code through the use of context to prevent Prop-Drilling, customHooks to limit
        the total amount of lines of code on each file, and draw user data from the gitHub API to
        display information.
      </h3>
      <div className="externalLinks">
        <a
          href={'https://github.com/BrettSeifried/context-guest-book'}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="githubLink" src={github} />
        </a>
        <a
          href="https://gracious-torvalds-4b1b84.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="urlLink" src={link} />
        </a>
        <img className="messegeImg" src={messege}></img>
      </div>
      <img src={X} className="X"></img>
    </div>
  );
}
