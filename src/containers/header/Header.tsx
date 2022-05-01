import React from 'react';
import Typed from 'react-typed';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ship from '../../assets/ship.svg';
import './header.css';
import Resume from '../../components/navbar/Resume';
const Fade = require('react-reveal/Fade');

const firstLine = "Ahoy! I'm Gabi, a Full-Stack Developer";
const textLines = [
  'Me be savvy with Backend and Frontend,',
  'been keeping a weather eye open matey',
  'and found a nice PirateShip I\'d wanna join',
];

export class Header extends React.Component {
  render = () => (
    <div id="hero" className="hero module module--border clearifx">
      <div className="container-fluid">
        <div className="row d-block d-md-flex clearfix h-100">
          <div className="hero__illustration col-12 gutters-off">
            <div className="hero__mask mask position-absolute" />
            <Fade right>
              <div className="hero__ship-container position-absolute">
                <div className="hero__anim-updown">
                  <img src={ship} />
                </div>
                <div className="hero__waves hero__waves--three position-absolute" />
                <div className="hero__waves hero__waves--two position-absolute" />
                <div className="hero__waves hero__waves--one position-absolute" />
              </div>
            </Fade>
          </div>
          <div className="hero__intro col-12 gutters-off-md reveal">
            <div className="hero__intro__texts text-center text-md-left col-12 col-md-3 offset-md-1 gutters-off mb-1">
              <p className="hero__social mb-1">
                <a href="https://www.linkedin.com/in/gabriela-d" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                {/*<a href="https://github.com/gabriela-dinca" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>*/}
              </p>
              <h1 className="gradient__text__blue">
                {firstLine}
              </h1>
              <h4 className="gradient__text typed-text mt-4">
                <Typed strings={textLines} typeSpeed={100} className="col-12 col-md-3 offset-md-1 gutters-off" />
              </h4>
              <div className="d-flex justify-content-evenly mt-4 cta-btns">
                <Resume></Resume>
                <a href="#radar" className="btn rounded-pill tech-radar-btn">Tech RadAAARRrrrr</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

