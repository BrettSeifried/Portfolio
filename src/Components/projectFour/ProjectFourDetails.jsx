import React from 'react';
import './project4.css';
import github from '../../assets/github.png';
import hyrule from '../../assets/hyrule.png';
import link from '../../assets/link.png';
import X from '../../assets/X.png';

export default function ProjectOneDetails() {
  return (
    <div className="project1Detail">
      <h1>Hyrule Compendium of Plants & Monsters</h1>
      <h3 className="p1Body">
        A website designed from the Hyrule Compendium API that sorts through the entire API.
        Navigation created through React connecting to the API. Design created through CSS.
      </h3>
      <div className="externalLinks">
        <a
          href={'https://github.com/BrettSeifried/hyrule-weapons'}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="githubLink" src={github} />
        </a>
        <a href="https://zen-cray-ce321a.netlify.app/" target="_blank" rel="noreferrer noopener">
          <img className="urlLink" src={link} />
        </a>
        <img className="hyrule" src={hyrule}></img>
      </div>
      <img src={X} className="X"></img>
    </div>
  );
}
