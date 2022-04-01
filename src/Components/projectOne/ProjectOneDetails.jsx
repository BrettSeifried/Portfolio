import React from 'react';
import './project1.css';
import github from '../../assets/github.png';
import ERM from '../../assets/ERM.png';
import link from '../../assets/link.png';
import X from '../../assets/X.png';

export default function ProjectOneDetails() {
  return (
    <div className="project1Detail">
      <h1>Messenger with use of an API</h1>
      <h3 className="p1Body">
        4-person, 2-day sprint in creating a backend API. Using a test first development process, we
        created a list of books, authors, reviews and reviewers. Using controllers, middleware,
        models, and services, to allow multiple post and get requests.
      </h3>
      <div className="externalLinks">
        <a
          href={'https://github.com/michellerenehey/backend-bookstore'}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="githubLink" src={github} />
        </a>
        <a
          href="https://bbkm-backend-bookstore.herokuapp.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="urlLink" src={link} />
        </a>
        <img className="ermImg" src={ERM}></img>
      </div>
      <img src={X} className="X"></img>
    </div>
  );
}
