import React from 'react';
import './contact.css';
import X from '../../assets/X.png';

export default function ContactDetails() {
  return (
    <div className="aboutmeDetail">
      <h1>Thank you for looking at my portfolio website</h1>
      <h3>
        If you made it this far, please don’t hesitate to send me a message no LinkedIn or through
        Email! I look forward to hearing from you!
      </h3>
      <div className="contactHeader">
        <a
          href={'https://www.linkedin.com/in/brett-seifried/'}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="contactLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
          />
        </a>
        <a href={'mailto:seifriedbrett@gmail.com'}>
          <img
            className="contactLogo"
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
          />
        </a>
      </div>
      <img src={X} className="Xcontact"></img>
    </div>
  );
}
