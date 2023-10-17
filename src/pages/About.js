import React from 'react';
import './About.css';
import ReduxIcon from '../assets/redux.png';
import HTML from '../assets/html.png';
import jQuery from '../assets/jquery.png';
import Ruby from '../assets/ruby.png';
import JEST from '../assets/jest.png';
import Flutter from '../assets/flutter.png';
import VSCode from '../assets/vscode.png';
import Figma from '../assets/figma.png';
import ReactIcon from '../assets/react.png';
import RSpecLogo from '../assets/rspec.png';
import NPMlogo from '../assets/npm.png';
import GitLogo from '../assets/git.png';
import GitHublogo from '../assets/github.png';
import GMeet from '../assets/meet.png';
import Zoomlogo from '../assets/zoom.webp';
import SkypeLogo from '../assets/skype.png';
import Slack from '../assets/slack.png';
import WebPack from '../assets/webpack.png';
import PostGres from '../assets/postgres.png';
import Rails from '../assets/rails.png';
import Canva from '../assets/canva.png';
import CDT from '../assets/cdt.png';
import CSS from '../assets/css.png';
import BootStrap from '../assets/bootstrap.png';
import NextJS from '../assets/next.webp';
import JavaScript from '../assets/javascript.png';
import Sass from '../assets/sass.png';
import PostMan from '../assets/postman.png';
import WordPress from '../assets/wordpress.png';

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
          href="https://drive.google.com/file/d/1RIQlxcFspH89xvugEeEyvgSG_ABMX3rI/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
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
