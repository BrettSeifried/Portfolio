import React from 'react';
import { useState } from 'react';
import contactImg from '../assets/contactImg.png';
import ContactDetails from '../Components/contact/ContactDetails';
import X from '../assets/X.png';

export default function Contact() {
  const [style, setStyle] = useState('contact');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('contactSmall');

  function handleClick() {
    setStyle('contactBig');
    setHidden(null);
    setXStyle('X');
    setImage('contactSmall');
  }

  function minimize() {
    setStyle('contact');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('contactSmall');
  }

  return (
    <div>
      <img onClick={minimize} src={X} className={XStyle} />
      <div onClick={handleClick} className={style}>
        <h1 className="padding">Contact</h1>
        <p className="padding">Email | LinkedIn</p>
        <img src={contactImg} className={image} />
        <div className={hidden}>
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
