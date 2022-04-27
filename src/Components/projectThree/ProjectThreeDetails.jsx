import React from 'react';
import './project3.css';
import github from '../../assets/github.png';
import techSwap from '../../assets/techSwap.png';
import techSwap1 from '../../assets/techSwap1.png';
import techSwap2 from '../../assets/techSwap2.png';
import link from '../../assets/link.png';

export default function ProjectThreeDetails() {
  return (
    <div className="project3Detail">
      <h1>Marketplace for Alchemy Code Lab Students</h1>
      <h3 className="p3Body">
        A market place for new studnets and alumni to trade old computer equipment. Intent is to
        give the incoming students the opprotunity to learn and not be limited by technology.
        Includes Authentication requirements and protected Routes. Current design is a mobile only
        app.
      </h3>
      <div className="externalLinks">
        <a
          href={'https://github.com/Alchemy-Tech-Swap/TechSwap'}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="githubLink" src={github} />
        </a>
        <a href="https://techswap.netlify.app/" target="_blank" rel="noreferrer noopener">
          <img className="urlLink" src={link} />
        </a>
        <img className="techSwapImg" src={techSwap}></img>
        <img className="techSwapImg1" src={techSwap1}></img>
        <img className="techSwapImg2" src={techSwap2}></img>
      </div>
    </div>
  );
}
