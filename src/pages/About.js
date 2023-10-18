import React from 'react';
import './About.css';
import ReduxIcon from '../assets/redux.png';
import HTML from '../assets/html.png';
import jQuery from '../assets/jquery.png';
import tailwindcss from '../assets/tailwindcss.png';
import mongodb from '../assets/mongodb.png';
import express from '../assets/express.png';
import nodejs from '../assets/nodejs.png';
import ReactIcon from '../assets/react.png';

import GitLogo from '../assets/git.png';

import CSS from '../assets/css.png';
import BootStrap from '../assets/bootstrap.png';
import NextJS from '../assets/next.webp';
import JavaScript from '../assets/javascript.png';
import Sass from '../assets/sass.png';

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
        Beyond the world of coding, I am a multifaceted individual with a
        diverse set of interests. You'll often find me lost in the enchanting
        melodies of the piano, where music becomes a form of expression and
        solace. When I'm not immersed in coding projects or composing music, I'm
        hitting the basketball court, where I unleash my competitive spirit and
        love for teamwork. Additionally, gaming serves as my escape into virtual
        realms, allowing me to explore new worlds and engage in thrilling
        adventures. These interests not only balance my life but also fuel my
        creativity and drive to excel in every endeavor I pursue.{' '}
      </p>
      <button className="hire-me">
        <a
          href="https://drive.google.com/file/d/13v3tq-8Nk0yvBzo1-d4KDBImOCqxGp4_/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Skills</h2>
      <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={ReduxIcon} alt="" />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={nodejs} alt="" />
          <p>NodeJs</p>
        </div>
        <div className="skill">
          <img src={express} alt="" />
          <p>Express</p>
        </div>
        <div className="skill">
          <img src={tailwindcss} alt="" />
          <p>Tailwindcss</p>
        </div>
        <div className="skill">
          <img src={mongodb} alt="" />
          <p>MongoDb</p>
        </div>

        <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img src={jQuery} alt="" />
          <p>jQuery</p>
        </div>
        <div className="skill">
          <img src={Sass} alt="" />
          <p>SASS</p>
        </div>
        <div className="skill">
          <img src={BootStrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <img src={NextJS} alt="" />
          <p>Next.js</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
