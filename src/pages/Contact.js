import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I LOVE <br />
        COFFEE
        <br /> CHAT ☕️
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Piano</p>

        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Coffee</p>
        <p>Physics</p>
        <p>Pizza</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span>
          <a href="mailto:devinveneyofficial@gmail.com">cOnTaCt mE</a>
        </span>
      </h3>

      <hr />

      <div className="social">
        <span>
          <a
            href="https://github.com/DevinVeney"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </span>
        <span>
          {' '}
          <a
            href="https://www.linkedin.com/in/devin-veney-0ab460226/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Contact;
