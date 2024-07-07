import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';


function Contact() {
 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or Name is invalid');
      return;
    }
  
    
    alert(`Hello ${name}!`);

    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div className="container text-start">
      <h1>Contact Me {name}!</h1>
      <p className='contact-prompt'>Name:</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          className='form-control w-50'
        />
        <br />
        <p className='contact-prompt'>Email address:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          className='form-control w-50'
        />

        <br />
        <p className='contact-prompt'>Message:</p>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          className='form-control w-50'
          rows="4"
          placeholder="message"
        />

{errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <br />
        <button className="contact-submit" type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default Contact;
