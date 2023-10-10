import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">welcome! </h2>
        <h3 className="tagline">
          Breaking keyboards and pushing pixels since 2016
        </h3>
        <p className="paragraph">
          I am driven by a deep passion for creating remarkable digital
          journeys. With my keyboard as a tool and lines of code as my medium, I
          have the ability to transform your digital visions into reality. Let's
          collaborate and turn your digital dreams into tangible experiences.
          Don't hesitate to reach out, and together, we can embark on this
          thrilling adventure!
        </p>
        <div className="hero-btns">
          <button className="hire-me">
            <a
              href="https://drive.google.com/file/d/1RIQlxcFspH89xvugEeEyvgSG_ABMX3rI/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="DevinVeney" className="hero-image" />
    </div>
    <div className="social-icons">
      <a href="https://github.com/DevinVeney" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/devin-veney-0ab460226/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>
    </div>
  </div>
);

export default Hero;
