import React from 'react';
import AboutMe from '../Views/AboutMe';
import Contact from '../Views/Contact';
import Hobbies from '../Views/Hobbies';
import Projects from '../Views/Projects';
import Resume from '../Views/Resume';
import './Body.css';

export default function Body() {
  return (
    <div className="body">
      <h1>BRETT SEIFRIED</h1>
      <a>Father | Veteran | Developer</a>
      <AboutMe />
      <Contact />
      <Projects />
      <Resume />
      <Hobbies />
    </div>
  );
}
