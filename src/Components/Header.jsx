import React from 'react';
import './Header.css';
import github from '../assets/github.png';

export default function Header() {
  return (
    <div className="header">
      <a href={'mailto:seifriedbrett@gmail.com'}>BRETT SEIFRIED // SOFTWARE DEVELOPER // </a>
      <a href={'https://github.com/BrettSeifried'} target="_blank" rel="noreferrer noopener">
        <img className="logo" src={github} />
      </a>
      <a
        href={'https://www.linkedin.com/in/brett-seifried/'}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
        />
      </a>
      <a href={'mailto:seifriedbrett@gmail.com'}>
        <img className="logo" src="https://cdn-icons-png.flaticon.com/512/281/281769.png" />
      </a>
    </div>
  );
}
