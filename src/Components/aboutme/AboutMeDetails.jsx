import React from 'react';
import './aboutme.css';
import X from '../../assets/X.png';

export default function AboutMeDetails() {
  return (
    <div className="aboutmeDetail">
      <h1>Welcome to my Portfolio site!</h1>
      <h3>
        Thank you for taking the time to find this website! I have been planning on becoming a
        Software Developer in 2013, and realizing my Bachelor’s Degree in International Supply Chain
        Management was enjoyable, it wasn’t fullfilling. I chose to serve my Country in 2013 after
        debating attending a coding bootcamp instead. Now that I have a family and feel proud of my
        Military Service, I have dove into the deep end of Software Development.
      </h3>
      <h3>
        Starting my Software Development education at Alchemy Code Lab based in Portland, OR. I have
        built front-end and back-ends for websites. I spend most of my free time in understanding
        how web3 works, and how to develop in a web3 envrioment.
      </h3>
      <h3>
        Feel free to explore my website and don’t hesitate if you want to get into contact with me!
      </h3>
      <img src={X} className="X"></img>
    </div>
  );
}
