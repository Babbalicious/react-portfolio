import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleNameBlur = () => {
    if (!name) {
      setErrorMessage("Name is required");
    } else {
      setErrorMessage(""); // Clear the error message if the name is valid
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setErrorMessage("Email is required");
    } else {
      setErrorMessage(""); // Clear the error message if the name is valid
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    alert(`Thank you ${name}, I will get back to you soon!`);

    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <div className="container text-start">
      <h1>Contact Me {name}!</h1>
      <p className="contact-prompt">Name:</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleNameBlur}
          type="text"
          placeholder="name"
          className="form-control w-50"
        />
        <br />
        <p className="contact-prompt">Email address:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleEmailBlur}
          type="email"
          placeholder="email"
          className="form-control w-50"
        />

        <br />
        <p className="contact-prompt">Message:</p>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          className="form-control w-50"
          rows="4"
          placeholder="message"
        />
        <br />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="contact-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
