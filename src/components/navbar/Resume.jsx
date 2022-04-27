import React from 'react';
import cv from './../../assets/cv.pdf';

const Resume = () => {

  return (
    <a href={cv} target="_blank" without rel='noopener noreferrer' className="resume-btn">Resume</a>
  );
};

export default Resume;
