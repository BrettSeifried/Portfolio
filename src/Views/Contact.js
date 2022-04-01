import React from 'react';
import { useState } from 'react';
import computer from '../assets/computer.png';
import ContactDetails from '../Components/contact/ContactDetails';

export default function Contact() {
  const [contact, setStyle] = useState('contact');
  const [hidden, setHidden] = useState('hidden');
  const ToggleClass = () => {
    setStyle(!contact);
    setHidden(!hidden);
  };

  return (
    <div onClick={ToggleClass} className={contact ? 'contact' : 'contactBig'}>
      <h1 className="padding">Contact</h1>
      <p className="padding">Email | LinkedIn</p>
      <img className="computerSmall" src={computer} />
      <div className={hidden ? 'hidden' : 'contactShow'}>
        <ContactDetails />
      </div>
    </div>
  );
}
