import React from 'react';


export interface IContact {
  title?: string;
}

const Contact = ({ title }: IContact) => {
  return (
    <div className='contact'>
      <span className='contact-icon'></span>
      <p>{title}</p>
    </div>
  );
};

export default Contact;
