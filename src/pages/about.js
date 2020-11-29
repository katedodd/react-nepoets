import './styles/about.css';
import React from 'react';
import MotionDiv from "../components/motionDiv";

function About() {
  return (
    <MotionDiv content={content}/>
  );
}

const content = (
  <div>
    <h1>About page</h1>
  </div>
);

export default About;
