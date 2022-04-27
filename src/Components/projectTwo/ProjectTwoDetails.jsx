import React from 'react';
import './project2.css';
import github from '../../assets/github.png';
import letsgo from '../../assets/letsgo.png';
import link from '../../assets/link.png';

export default function ProjectTwoDetails() {
  return (
    <div className="project2Detail">
      <h1>Tour Guide Travel App</h1>
      <h3 className="p2Body">
        4-person, 2-week Sprint. A tool for those who plan trips. Created all animations of planning
        page. Incorporated Yelp API on back-end and front-end. Passed all inputted user information
        from front-end to back-end and rendered on page. Created, tested, and implemented all
        Lodging front-end and back-end.
      </h3>
      <div className="externalLinks">
        <a
          href={'https://github.com/TravelPlanningFinals'}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="githubLink" src={github} />
        </a>
        <a href="https://lets-go-final.netlify.app/" target="_blank" rel="noreferrer noopener">
          <img className="urlLink" src={link} />
        </a>
        <img className="letsgo" src={letsgo}></img>
      </div>
    </div>
  );
}
